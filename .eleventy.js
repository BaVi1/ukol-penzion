module.exports = function(eleventyConfig) {

	// VĂ˝chozĂ­ vĂ˝stupnĂ­ sloĹľka: _site

	// ZkopĂ­rovat images/ do _site/images
	eleventyConfig.addPassthroughCopy("images");

	// ZkopĂ­rovat css/ to _site/css/
	eleventyConfig.addPassthroughCopy("css");

  return {
    // moĹľnĂ© formĂˇty Ĺˇablon
    templateFormats: ["njk", "html", "md", "liquid"],

    // jako ĹˇablonovacĂ­ jazyk zvolĂ­me Nunjucks
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }

};
