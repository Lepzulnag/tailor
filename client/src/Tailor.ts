
import Rich from "./Rich"

export { Node, Text, Mark, Block } from "../../nodes/src"


export class Tailor {
	container: HTMLElement

	constructor(container: HTMLElement) {
		this.container = container
		container.addEventListener('keydown', this.onKeyDown)
		container.addEventListener('keypress', this.onKeyPress)
	}

	private onKeyDown(event) {
		console.log("Key down!", event)
		// event.preventDefault()
		switch (event.keyCode) {
			case 9:  // TAB

				event.preventDefault()
				break
		}
	}

	private onKeyPress(event: KeyboardEvent) {
		// console.log("Key pressed!")

	}
}
