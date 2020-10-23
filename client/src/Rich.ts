


export default (element: Node) => new class Rich {
	toJson() {
		return JSON.stringify(element)
	}
}
