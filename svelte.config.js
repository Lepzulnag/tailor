const preprocess = require('svelte-preprocess')

module.exports = {
	preprocess: [
		preprocess.typescript(),
		preprocess({
			typescript: false, // for typescript, use the typescript examples!
		}),
	]
}
