import { win,doc } from './variable';

let tempDiv = doc.createElement('div');
const hasClassList = 'classList' in tempDiv;//是否支持classList API，IE9+
tempDiv = null;

const contain = hasClassList
    ? function(el,name){
        return el.classList.contain(name);
    }
    : function(el,name){
        let reg = new RegExp(`(^\|\\s+)${name}(\\s+\|$)`,'g');
        return reg.test(el.className);
    }

const remove = hasClassList 
    ? function(el,name){
        el.classList.remove(name);
    }
    : function(el,name){
        let reg = new RegExp(`(^\|\\s+)${name}(\\s+\|$)`,'g');
        el.className = el.className.replace(reg,'$2');
    };

function addClass(el,className){
    if(!el || !el.nodeType || el.nodeType !== 1){
        throw new Error('只能为HTML元素节点添加类');
    }

    if(typeof className !== 'string'){
        throw new Error('要添加的类名必须是字符串，多个类名请用空格隔开');
    }

    if(el === win || el === doc){return ;}

    className = className.trim();

    if(hasClassList){
        let classNames = className.split(/\s+/g),
            len = classNames.length;
        
        while(len--){
            el.classList.add(classNames[len]);
        }
    }else{
        el.className += ' ' + className;
    }
}

function removeClass(el,className){
    if(!el || !el.nodeType || el.nodeType !== 1){
        throw new Error('只能为HTML元素节点删除类');
    }

    if(typeof className !== 'string'){
        throw new Error('要删除的类名必须是字符串，多个类名请用空格隔开');
    }

    if(el === win || el === doc){return ;}

    let classNames = className.split(/\s+/g),
        len = classNames.length;

    while(len--){
        remove(el,classNames[len]);
    }
}

function hasClass(el,className){
    if(!el || !el.nodeType || el.nodeType !== 1){
        throw new Error('只能检索HTML元素节点类名');
    }

    if(typeof className !== 'string'){
        throw new Error('要检索的类名必须是字符串，多个类名请用空格隔开');
    }

    if(el === win || el === doc){return false;}

    let classNames = className.split(/\s+/g),
        len = classNames.length;

    while(len--){
        if(contain(el,classNames[len])){
            return true;
        }
    }

    return false;
}

function toggleClass(el,className){
    if(!el || !el.nodeType || el.nodeType !== 1){
        throw new Error('只能为HTML元素节点切换类名');
    }

    if(typeof className !== 'string'){
        throw new Error('要切换的类名必须是字符串，多个类名请用空格隔开');
    }

    if(el === win || el === doc){return ;}

    let classNames = className.split(/\s+/g),
        len = classNames.length;

    while(len--){
        let tempClassName = classNames[len];
        if(hasClassList){
            el.classList.toggle(tempClassName);
        }else{
            if(contain(el,tempClassName)){
                remove(el,tempClassName);
            }else{
                el.className += '' + tempClassName;
            }
        }
    }
}

export {
    addClass,
    removeClass,
    hasClass,
    toggleClass
};