
import '@types/socket.io-client/index.d'
import Position from '../shared/Position'

import { Mark, Block } from "../shared/nodes"
import Schema from '../shared/Schema'
import { schedulingPolicy } from 'cluster'



export class Tailor {
	container: HTMLElement
	socket: SocketIOClient.Socket = null
	client?: string
	selection: Selection
	schema: Schema

	constructor({container, schema, server, client}: {container: HTMLElement, schema: Schema, server?: string, client?: string}) {
		this.container = container
		this.client = client
		this.schema = schema
		if (server) this.socket = io(server)  // we connect to the server to send / receive live updates
		container.addEventListener('keydown', this.onKeyDown)
		container.addEventListener('input', this.onInput)

		document.addEventListener('selectionchange', event => {
			this.selection = window.getSelection()
		})
		container.addEventListener('selectstart', event => {
			console.log("SELECT START", event)
		})
	}


	private onInput(event) {
		console.log("INPUT", event)
	}

	private onKeyDown(event) {
		console.log("Key down!", event)
		// event.preventDefault()
		switch (event.keyCode) {
			case 9:  // TAB
				// event.preventDefault()
				break
			case 13:  // ENTER
				event.preventDefault()
				this.insertBlock(this.schema.defaultBlock())
				break
		}
	}


	/**
	 * Insert a new block
	 */
	insertBlock(block: Block) {
		let element = document.createElement(block.tag)
		let parent = this.selection.focusNode
		// while (!(parent instanceof Element))
	}


	/**
	 * Return the given node's position inside the container
	 * Return null if the given node is not a child of the container
	 */
	private getNodePosition(node: Node): Position {
		let position: Position = []

		while (node) {
			position.push(Tailor.getNodeIndex(node))
			node = node.parentNode
			if (node == this.container) return position
		}

		return null  // the node is not a child of the editor
	}

	/**
	 * Return the index of the given node
	 */
	private static getNodeIndex(node: Node): number {
		let index = 0
		while (node = node.previousSibling) index++
		return index
	}

	/**
	 * Return the current caret position and the anchor of the selection
	 */
	getCaretPosition(): [Position, Position] {
		let { anchorNode, anchorOffset, focusNode, focusOffset } = this.selection
		let position = this.getNodePosition(focusNode)
		let anchor = this.getNodePosition(anchorNode)
		if (position) position.push(focusOffset)
		if (anchor) anchor.push(anchorOffset)
		return [ position, anchor ]
	}

	/**
	 * Return the word selected or hovered by the caret
	 */
	getSelectedWord() {

	}
}
