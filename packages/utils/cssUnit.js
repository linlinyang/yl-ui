/* 
 * 单位转换，将数字或字符串转换成css单位
*/
function cssUnit(data){
    if(typeof data === 'number'){
        return `${data}px`;
    }
    
    if(typeof data !== 'string'){
        return data;
    }
    data = data.trim();

    const units = ['px','em','rem','vw','vh','vmin','vmax','\%','in','cm','mm','pt'];
    let len = units.length;
    while(len--){
        let temp = units[len];
        let reg = new RegExp(`/^(\d*\.?\d+)${temp}/ig`);
        let matches = data.match(reg);
        if(matches === null){
            continue;
        }else{
            return matches[0];
        }
    }
    return `${parseFloat(data)}px`;
}

export default cssUnit;