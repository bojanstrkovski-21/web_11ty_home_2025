module.exports.config = {
 
};

module.exports = function(eleventyConfig) {
	// Order matters, put this at the top of your configuration file.
    eleventyConfig.addPassthroughCopy('src/style.css');
    eleventyConfig.addPassthroughCopy('src/js');
    eleventyConfig.addPassthroughCopy('src/assets/')
  
    return {
        dir: {
          input: "src",
          output: "public"
        }
      };
};