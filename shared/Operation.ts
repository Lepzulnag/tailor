/**
 * Describes the different id to 
 */
enum Operation {
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

export default Operation