const path = require("path");

const MiniCSSExtractPlugin = require('mini-css-extract-plugin');//to create seperate css files
module.exports = (env)=>{
    const isProduction = env==='production'
    const minicssplug = new MiniCSSExtractPlugin({filename:'style.css'})

    return {
        entry : './src/app.js',
        output : {
            path: path.join(__dirname,'public'),
            filename : 'bundle.js'
    
        },
        module :{
            rules : [
                {
                    loader : 'babel-loader',
                    test : /\.js$/,
                    exclude : /node_modules/,
                },
                
                {
                    test : /\.s?css$/,
                    use : [MiniCSSExtractPlugin.loader,
                        {
                            loader:'css-loader',
                            options:{
                                sourceMap:true
                            }
                        },
                        {
                            loader:'sass-loader',
                            options:{
                                sourceMap:true
                            }
                        }
                    ]
                },
                // {
                //     test : /\.scss$/,
                //     use : [
                //         'style-loader',
                //         'css-loader',
                //         'sass-loader'
                //     ]
                // },
                // {
                //     test : /\.css$/,
                //     use : [
                //         'style-loader',
                //         'css-loader',
                //         'sass-loader'
                //     ]
                // }
            ]
        },
         plugins: [minicssplug],
        devtool : isProduction?'source-map':'inline-source-map',
        devServer : {
            contentBase : path.join(__dirname,'public'),
            historyApiFallback: true
        }
    }
}