import { DbConsumption } from '../models/db';

export const filterDataByType = (data: DbConsumption[], type?: number) => {
    const newData = new Array();
    console.log(type);
    if (type !== undefined) {
        data.forEach(value => {
            newData.push({
                ...value,
                time: new Date(Date.parse(value.time)).toISOString().substring(0, 9),
            })
        })
    }
    else {
        data.forEach(value => {
            newData.push({
                ...value,
                time: new Date(Date.parse(value.time)).toISOString().substring(0, 9),
            })
        })
    }
    return newData;
}

export const getSummary = (data: DbConsumption[]) => {
    if (data.length > 1) {
        let totalGeneratorConsumption = 0;
        let totalHouseConsumption = 0;
        let dateInterval = [new Date(data[0].time), new Date(data[0].time)];
        let firstDateOccurrence = 0;
        data.map((value, index) => {
            totalGeneratorConsumption += value.generatorConsumption;
            totalHouseConsumption += value.homeConsumption;
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
        })
        return {
            totalGeneratorConsumption,
            totalHouseConsumption,
            dateInterval
        }
    }
    else {
        return {
            totalGeneratorConsumption: 0,
            totalHouseConsumption: 0,
            dateInterval: [new Date(), new Date()]
        };
    }
}
