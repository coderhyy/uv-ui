// import存在重复引用js问题么? https://blog.csdn.net/snans/article/details/123808010
// 路由封装
import route from './libs/util/route.js'
// 公共工具函数
import index from './libs/function/index.js'
// 规则检验
import test from './libs/function/test.js'

// 颜色渐变相关,colorGradient-颜色渐变,hexToRgb-十六进制颜色转rgb颜色,rgbToHex-rgb转十六进制
import colorGradient from './libs/function/colorGradient.js'

// 配置信息
import config from './libs/config/config.js'

const $uv = {
	route,
	config,
	test,
	...index,
	colorGradient: colorGradient.colorGradient,
	hexToRgb: colorGradient.hexToRgb,
	rgbToHex: colorGradient.rgbToHex,
	colorToRgba: colorGradient.colorToRgba,
}
uni.$uv = $uv;
console.log('uni.$uv',uni.$uv)
export default {}