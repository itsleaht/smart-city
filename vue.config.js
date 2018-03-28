module.exports = {
  lintOnSave: false,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'vue-svg-loader'
            }
          ]
        },
      ]
    }
  }
};
