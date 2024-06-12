const getKeysDates = (dates) => {
    //keys
    const arraydateskey = Object.keys(dates);
    const keysfilters = arraydateskey.filter(item => {
        return item === 'eur' || item === 'usd' || item === 'gbp'
    });
    return keysfilters;
}
const getIndexsDates = (dates) => {
    //index
    const indexdates = [];
    const arraydateskey = Object.keys(dates);
    arraydateskey.forEach(item => {
        if(item === 'eur' || item === 'usd' || item === 'gbp'){
            indexdates.push(arraydateskey.indexOf(item));
        }
    });
    return indexdates;
}
const getValuesDates = (dates,indexs) => { //require getindexdates
    //values
    const arraydatesvalues = Object.values(dates);
    const valuesfilters = [];
    for(let i = 0; i < indexs.length; i++){
        valuesfilters.push(arraydatesvalues[indexs[i]]);
    }
    return valuesfilters;
}

const setOptionsSelect = (date) => {
    const select = document.querySelector('#unidad_precio');
    date.forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        option.text = item;
        select.appendChild(option);
    });
}

export {getKeysDates,getIndexsDates,getValuesDates,setOptionsSelect};