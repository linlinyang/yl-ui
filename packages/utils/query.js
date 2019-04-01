function query(component,name){
    let childrens = component.$children,
        ret = null,
        len = childrens.length;
    
    name = name.trim();

    for(let i = 0; i < len; i++){
        let child = childrens[i];
        if(child.$options.name === name){
            ret = child;
            break;
        }else{
            ret = query(child,name);
            if(ret !== null){
                break;
            }
        }
    }

    return ret;
}

function queryAll(component,name){
    return component.$children.reduce((ret,child) => {
        if(child.$options.name == name.trim()){
            ret.push(child);
        }
        return ret.concat(queryAll(child,name));
    },[]);
}

function parent(component,name){
    let parent = component.$parent;
    name = name.trim();

    while(parent){
        if(parent.$options.name == name){
            break;
        }
        parent = parent.$parent;
    }

    return parent;
}

function parents(component,name){}

function prevComponent(component){}

function prevComponents(component){}

function nextComponent(component){}

function nextComponents(component){}

function siblings(component){}

export{
    query,
    queryAll
};