module.exports = function(eleventyConfig) {


	//markdownTemplateEngine: "njk"
	eleventyConfig.addPassthroughCopy("js/*");
	eleventyConfig.addPassthroughCopy("_redirects");

	return {
		markdownTemplateEngine: false
	}
}