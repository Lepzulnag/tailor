
import { Tailor } from './Tailor'
import { Mark, Block } from "../shared/nodes"
import Schema from "../shared/Schema"


class Paragraph extends Block {
	static tag = 'p'
}

class Coco extends Paragraph {
}


let schema = new Schema
schema.register(Paragraph, Coco)
schema.defaultBlock = () => new Paragraph

let container = document.getElementById('editor')
let tailor = new Tailor({container, schema})
