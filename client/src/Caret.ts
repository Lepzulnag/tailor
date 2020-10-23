



export function pasteHtmlAtCaret(html) {
	let range
	let selection = document.getSelection()

	range = selection.getRangeAt(0)
	range.deleteContents()

	// Range.createContextualFragment() would be useful here but is
	// non-standard and not supported in all browsers (IE9, for one)
	let el = document.createElement("div")
	el.innerHTML = html
	let frag = document.createDocumentFragment(), node, lastNode
	while ( (node = el.firstChild) ) {
		lastNode = frag.appendChild(node)
	}
	range.insertNode(frag)
	
	// Preserve the selection
	if (lastNode) {
		range = range.cloneRange()
		range.setStartAfter(lastNode)
		range.collapse(true)
		selection.removeAllRanges()
		selection.addRange(range)
	}
}

export class Caret {
	elementId: string
	position = 0
	private _element: HTMLElement

	constructor(elementId: string) {
		this.elementId = elementId
	}


	get element() {
		if (!this._element)
			this._element = document.getElementById(this.elementId)
		return this._element
	}

	// save the current caret position
	save() {
		let selection = window.getSelection()
		let { focusNode, focusOffset } = selection
		if (!this.element.contains(focusNode))
			return

		this.position = focusOffset + getAllPreviousTextLength(this.element, focusNode)
	}

	// load the previously saved position
	load() {
		this.toPosition(this.position)
	}

	toStart() {
		this.toPosition(0)
	}

	toEnd() {
		let node: any = this.element
		while (node.lastChild)
			node = node.lastChild
		if (node.textContent.endsWith('\n'))
			setCaret(node, node.length - 1)
		else
			setCaret(node, node.length)
	}

	toPosition(position, container=null, start=0) {
		let node = (container || this.element).firstChild

		while (node) {
			let nodeTextLength = getNodeTextLength(node)
			
			if (start + nodeTextLength >= position) {
				if (node.nodeType == Node.TEXT_NODE)
					setCaret(node, position - start)
				else
					this.toPosition(position, node, start)
				return
			}

			start += nodeTextLength
			node = node.nextSibling
		}

		// we reached the end
		this.toEnd()
	}
}


// set the caret to the given node and focus position
function setCaret(node, position) {
	var range = document.createRange()
	var selection = window.getSelection()
	range.setStart(node, position)
	range.collapse(true)
	selection.removeAllRanges()
	selection.addRange(range)
}



// return the total length of the text of all previous siblings
// and go recursive with parent nodes
function getAllPreviousTextLength(root, node) {
	let length = getPreviousTextLength(node)

	while ((node = node.parentNode) && node != root)
		length += getPreviousTextLength(node)
	
	return length
}

// return the total length of the text of all previous siblings
function getPreviousTextLength(node) {
	let length = 0

	while (node = node.previousSibling)
		length += getNodeTextLength(node)

	return length
}

// get the total text length of a node
function getNodeTextLength(node) {
	if (node.nodeType == Node.TEXT_NODE)
		return node.length
	
	else if (node.nodeType == Node.ELEMENT_NODE)
		return node.innerText.length
	
	return 0
}

