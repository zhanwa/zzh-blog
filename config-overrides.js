/*
 * @Description: 自定义webpack
 * @Autor: zhangzhanhua
 * @Date: 2021-07-16 14:36:12
 * @LastEditors: zhangzhanhua
 * @LastEditTime: 2021-08-31 18:14:36
 */
const {
    override,
    // ...
    addWebpackAlias
} = require('customize-cra')
const path = require('path')

//自定义打包路径
const paths = require('react-scripts/config/paths');
paths.appBuild = path.join(path.dirname(paths.appBuild), 'blog_back');
module.exports = override(
    // ...
    // 路径别名
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src')
    })
)