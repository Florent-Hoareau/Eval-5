module.exports = function(eleventyConfig) {

	eleventyConfig.addPassthroughCopy('css')
	eleventyConfig.addPassthroughCopy('images')
	eleventyConfig.addPassthroughCopy('js')
	eleventyConfig.addPassthroughCopy('src')

	return {
		passthroughFileCopy: true,
		dir: {
			input: "src",
            output: "public"
		}
	}
}
