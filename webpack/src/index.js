/*   index.js 入口文件
* 1.运行指令
    开发环境 webpack ./src/index.js -o ./build --mode=development
    webpack会以 ./src/index.js入口文件开始打包 打包输出到./build/build.js 
    整体打包环境 是开发环境
    开发环境 webpack ./src/index.js -o ./build --mode=production
*/ 
import './index.css'
import data from './index.json'
console.log(data)
function add(x, y) {
    return x + y
}
console.log(add(1, 2))