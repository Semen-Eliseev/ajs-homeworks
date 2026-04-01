const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
    
    module.exports = {
       //mode: 'production',
        //mode: 'development',
       entry: "./src/js/app.js",
       module:{
            rules:[
                {
                    test: /\.css$/,
                    use: [
                        MiniCSSExtractPlugin.loader,
                        'css-loader'
                    ]
                }
            ]
       },
      plugins:[
            new MiniCSSExtractPlugin()
       ]
    }
