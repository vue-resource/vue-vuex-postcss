/**
 * 全局定义的过滤器集合
 */

export default {
	//货币符号
	currency (val,type) {
		return (val === "" || val === null) ?  "--" : (type||"￥") +" " + val
	},
	//百分比
	percentage (val,place) {
    return (val === "" || val === null) ? (place || "--") : val + "%"
	},
	//占位符
	placeholder (val,place) {
		return (val === "" || val === null) ? (place || "--") : val
 	},
	//溢出显示省略号
	subStr(val, length) {
		return val.length<=length ? val : val.substr(0, length) +'…'
	}
}
