import { Node, Mark, Block } from './nodes'

export default class Schema {
	marks: {[key: string]: Mark} = {}
	blocks: {[key: string]: Block} = {}
	defaultBlock: () => Block

	register(...nodes: (new() => Node)[]) {
		for (let node of nodes) {
			console.log(`We register`, node.name, 'with tag', node.tag)
			if ((new node) instanceof Mark) console.log("(is mark)")
			if ((new node) instanceof Block) console.log("(is block)")
		}
	}
} 