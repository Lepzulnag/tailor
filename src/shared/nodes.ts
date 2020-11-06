
export type NodeRef = Array<number>

export class Node {
}

export class Text extends Node {
	value = ""
	// constructor(value="") {
	// 	super()
	// 	this.value = value
	// }
}

export class Tag extends Node {
	static possibleChildren: Array<new(...args: any) => Node> = [Node]
	static tag: string
	attributes: {[key: string]: string}
	children: Array<Node> = []

	get tag() {
		return (this.constructor as any).tag
	}

	// constructor(tag: string, attributes?: Object, children?: Array<Node>) {
	// 	super()
	// 	this.tag = tag
	// 	if (attributes) Object.assign(this.attributes, attributes)
	// 	if (children) this.children.push(...children)
	// }
}

export class Mark extends Tag {
	static possibleChildren = [Mark, Text]
}

export class Block extends Tag {
	static possibleChildren = [Node]
}
