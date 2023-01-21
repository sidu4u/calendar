import {months} from '../constants';

export const monthMapper = ()=>{
    const monthMap = new Map();
    const toggle = true;

    months.forEach(month=>{
        monthMap.set(month,toggle?31:30);
    });

    return monthMap;
}