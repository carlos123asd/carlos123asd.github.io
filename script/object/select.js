const uri = 'https://latest.currency-api.pages.dev/v1/currencies/eur.json';
import { getKeysDates } from '../helperSelect.js';
import { getIndexsDates } from '../helperSelect.js';
import { getValuesDates } from '../helperSelect.js';
import { setOptionsSelect } from '../helperSelect.js';

const getDates = async () => {
    try{
        const response = await fetch(uri);
        if(response.ok){
            const datesjson = await response.json();
            const dates = datesjson.eur;
            return filterDates(dates);
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
    console.log(keys);
    console.log(indexs);
    console.log(values);
}

getDates();