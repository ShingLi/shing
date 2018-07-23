export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }

  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

/**
 * @shingli
 * @description js 控制浏览器兼容
 */
let elementStyle = document.createElement('div').style

let vendor = (()=>{
	let transformNames = {
		webkit:'webkitTransform',
		Moz:'MozTransform',
		O:'OTransform',
		ms:'msTransform',
		standard:'transform'
	}

	for (let key in transformNames) {

		if (elementStyle[transformNames[key]] !== 'undefined') {
			return key
		}
		
		if (elementStyle[transformNames[key]] == false) {
			return false
		}
	}
})()

export function prefixStyle(style) {
	if (vendor == false) {
		return false
	}

	if (vendor == 'standard') {
		return style
	}
	return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}