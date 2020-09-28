module.exports = function(eleventyConfig) {

	eleventyConfig.addPassthroughCopy("js/*");

	return {
		markdownTemplateEngine: false
	}
}