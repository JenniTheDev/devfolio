module.exports = [{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":590,"wrapperStyle":"margin: 0 0 30px;"},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"ADD YOUR TRACKING ID HERE"},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"devfolio","short_name":"devfolio","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/jenniFace.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"09a1ac47c8d73a68b9474bb0dfb264d2"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
