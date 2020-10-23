
import {
	NodeRef,
	Node,
	Text,
	Mark,
	Tag,
	Block,
} from './nodes'

export enum Operation {
	insertText,
	insertBlock,
	setMark,
	unsetMark,
	setBlock,
	deleteRange,
	deleteBlock,
	replaceRangeByText,
	insertRichText, // should we? Or should we split it into pieces of other operations?
	replaceRangeByRichText,  // same question
}

export function executeOperation(op: Operation, ...args: any) {
	return execute[op](...args)
}

export const execute = []

execute[Operation.insertText] = (parent: NodeRef, position: number, text: string) => {

}

execute[Operation.insertBlock] = (parent: NodeRef, position: number, block: Block) => {
	
}

execute[Operation.setMark] = (parent: NodeRef, start: number, end: number, mark: Mark) => {
	
}

execute[Operation.unsetMark] = (node: NodeRef) => {
	
}

execute[Operation.setBlock] = (node: NodeRef, block: Block) => {
	
}

execute[Operation.deleteRange] = (parent: NodeRef, start: number, end: number) => {
	
}

execute[Operation.deleteBlock] = (node: NodeRef) => {
	
}

execute[Operation.replaceRangeByText] = (parent: NodeRef, start: number, end: number, text: string) => {
	
}




