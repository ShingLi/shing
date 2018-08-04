// 添加浏览器前缀
let elementStyle = document.createElement('div').style
const vendor = (()=>{
	const prefix = {
		'webkit':'webkitTransform',
		'Moz':'MozTransform',
		'O':'OTransform',
		'standard':'transform'
	}
	for (let key in prefix ) {
		if (elementStyle[key] == 'undefined') {
			return false
		}
		return key
	}
})()

export const prefix = (style) =>{
	
	if (vendor == 'standard') {
		return style
	}
	if (vendor!== 'false') {
		return vendor + style.charAt(0).toUpperCase() + style.subStr(1)
	}
}