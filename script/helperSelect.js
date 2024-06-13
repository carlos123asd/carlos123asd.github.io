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

const setValues = (values,type = 'eur') => {//precio__content__eur
    const select = document.getElementsByClassName('precio__content__eur');
    if(type === 'eur'){//1
        select[0].innerHTML = `€${values[0] * 0}`; 
        select[1].innerHTML = `€${values[0] * 25}`;
        select[2].innerHTML = `€${values[0] * 60}`;
    }else if(type === 'gbp'){//0.84
        select[0].innerHTML = `£${Math.floor(values[1] * 0)}`;
        select[1].innerHTML = `£${Math.floor(values[1] * 25)}`;
        select[2].innerHTML = `£${Math.floor(values[1] * 60)}`;
    }else if(type === 'usd'){//1.08
        select[0].innerHTML = `$${Math.floor(values[2] * 0)}`;
        select[1].innerHTML = `$${Math.floor(values[2] * 25)}`;
        select[2].innerHTML = `$${Math.floor(values[2] * 60)}`;
    }
};

export {getKeysDates,getIndexsDates,getValuesDates,setOptionsSelect,setValues};