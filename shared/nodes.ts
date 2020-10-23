
export type NodeRef = Array<number>

export class Node {
}

export class Text extends Node {
	value = ""
	constructor(value="") {
		super()
		this.value = value
	}
}

export class Tag extends Node {
	static possibleChildren: Array<new(...args: any) => Node> = [Node]
	children: Array<Node> = []

	constructor(tag: string, attributes?: Object, children?: Array<Node>) {
		super()
	}
}

export class Mark extends Tag {
	static possibleChildren = [Mark, Text]
}

export class Block extends Tag {
	static possibleChildren = [Node]
}


class Link extends Mark {
	attributes: {
		href: String
	}
}