
//反向代理请求配置文件
module.exports={   
    publicPath:'/miaomiao',
    devServer:{
        proxy:{
            '/api':{
                target:'http://39.97.33.178',
                changeOrigin:true
            }
        }
    }
}