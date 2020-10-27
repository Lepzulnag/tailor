import Operation from "./Operation"

export default interface Message {
	user: string
	state: number
	operation: Operation
	data: any[]  // data depends on the operation
}
