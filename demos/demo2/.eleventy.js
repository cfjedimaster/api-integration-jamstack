module.exports = function(eleventyConfig) {


	//markdownTemplateEngine: "njk"
	eleventyConfig.addPassthroughCopy("js/*");

	return {
		markdownTemplateEngine: false
	}
}