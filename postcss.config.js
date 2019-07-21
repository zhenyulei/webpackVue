module.exports = {
  plugins:[
    require('autoprefixer')({
      "overrideBrowserslist":[
        "defaults",
        "not ie <11",
        "last 2 version",
        ">1%",
        "ios 7",
        "last 3 iOS versions"
      ]
    })
  ]
}