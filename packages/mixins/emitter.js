function broadcast(componentName,eventName,params){
    this.$children.forEach((child) => {
        const name = child.$options.name;

        if(name === componentName){
            child.$emit.apply(child,[eventName].concat(params));
        }else{
            broadcast.call(child,componentName,eventName,params);
        }
    });
}

export default{
    methods: {
        dispatch(componentName,eventName,params){
            let parent = this.$parent || this.$root;

            while(parent){
                if(parent.$options.name === componentName){
                    break;
                }else{
                    parent = parent.$parent;
                }
            }
            parent && this.$emit.call(parent,componentName,eventName,params);
        },
        broadcast(componentName,eventName,params){
            broadcast.call(this,componentName,eventName,params);
        }
    }
}