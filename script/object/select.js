const uri = 'https://latest.currency-api.pages.dev/v1/currencies/eur.json';
const select = document.getElementById('unidad_precio');
import { getKeysDates } from '../helperSelect.js';
import { getIndexsDates } from '../helperSelect.js';
import { getValuesDates } from '../helperSelect.js';
import { setOptionsSelect } from '../helperSelect.js';
import { setValues } from '../helperSelect.js';

const getDates = async () => { //dates - getcurrencydata
    try{
        const response = await fetch(uri);
        if(response.ok){
            const datesjson = await response.json();
            const dates = datesjson.eur;
            filterDates(dates);
            return dates;
        }
    }
    catch(error){
        console.log(error);
    }
}


const filterDates = (dates) => {
    const keys = getKeysDates(dates)
    const indexs = getIndexsDates(dates)
    const values = getValuesDates(dates,indexs)
    setOptionsSelect(keys);
    setValues(values); 
}

select.addEventListener('change', async () => { 
    try{
        const response = await fetch(uri); 
        if(response.ok){
            const valuejson = await response.json();
            const listvalues = valuejson.eur;
            const indexs = getIndexsDates(listvalues);
            const values = getValuesDates(listvalues,indexs);
            if(select.value === 'eur'){
                setValues(values,'eur');
            }else if(select.value === 'gbp'){
                setValues(values,'gbp');
            }else if(select.value === 'usd'){
                setValues(values,'usd');
            };
        }
    }
    catch(error){
        console.log(error);
    }
});

getDates();