import {DbConsumption} from '../models/db';

export const filterDataByType = (type: number, data: DbConsumption[]) => {
    const newData = new Array();
    data.forEach(value => {
        if (value.type === type) {
            newData.push({
                ...value,
                time: new Date(Date.parse(value.time)).toISOString().substring(0, 9),
            })
        }
    })
    return newData;
}

export const getSummary = (type: number, data: DbConsumption[]) => {
    if (data.length > 1) {
        let totalConsumption = 0;
        let dateInterval = [new Date(data[0].time), new Date(data[0].time)];
        let firstDateOccurrence = 0;
        data.map((value, index) => {
            if (value.type === type) {
                totalConsumption += value.consumption;
                if (firstDateOccurrence === 0) {
                    dateInterval = [new Date(value.time), new Date(value.time)];
                    firstDateOccurrence = 1;
                }
                if (dateInterval.length === 2) {
                    const currentDate = new Date(value.time);
                    if (dateInterval[0].getTime() > currentDate.getTime()) {
                        dateInterval[0] = currentDate;
                    }
                    if (dateInterval[1].getTime() < currentDate.getTime()) {
                        dateInterval[1] = currentDate;
                    }
                }
            }
        })
        return {
            totalConsumption,
            dateInterval
        }
    }
    else {
        return {
            totalConsumption: 0,
            dateInterval: [new Date(), new Date()]
        };
    }
}