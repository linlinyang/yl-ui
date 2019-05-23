/* 
 * 
 * dom操作工具方法
 *
 */

 /* 
  * 为元素节点绑定监听事件
  *
  * @params {el} HTMLElement,元素节点，要添加的监听事件的元素节点，例如：div
  * @params {type} String,事件类型，添加监听事件类型，例如：click、mouseenter等
  * @params {handler} Function,回调函数，触发监听事件的回调函数
  * @params {options} Boolean | Object,事件修饰符，例如：{capture: true,once: true}等支持事件捕获或执行一次
  */
function on(el,type,handler,options = false){
    if(el.addEventListener){
        el.addEventListener(type,handler,options);
    }else{
        el.attachEvent('on' + type,handler);
    }
}

/* 
 * 从元素节点移除监听事件
 * 
 * @params {el} HTMLElement,元素节点，要移除监听事件的元素，例如：div
 * @params {type} String,事件类型，要移除的监听事件类型，例如：click，dblclick等
 * @params {handler} Function,事件回调，要移除监听事件的回调函数
 * @params {options} Boolean | Object,事件修饰符，例如：{capture: true,once: true}等支持事件捕获或执行一次
 */
function off(el,type,handler,options = false){
    if(el.removeEventListener){
        el.removeEventListener(type,handler,options);
    }else{
        el.detachEvent('on' + type,handler);
    }
}

export {
    on,
    off
};