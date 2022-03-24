import React, {useEffect, useState} from 'react';
import { useDatabaseData } from '../utils/dbRequests';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
  } from "recharts";
  import { DbConsumption, Summary } from '../models/db';
import { filterDataByType, getSummary } from '../utils/filterData';

const GeneratorConsumption = () => {

    const [data, setData] = useState<DbConsumption[]>();
    const [summary, setSummary] = useState<Summary>();

    const dbData = useDatabaseData<DbConsumption>();

    useEffect(() => {
        if (dbData) {
            setData(filterDataByType(dbData, 2));
            setSummary(getSummary(dbData));
        }
    }, [dbData]);

    console.log(data);

    return (
        <div>
            <p>Intervalul de timp masurat: {summary ? summary.dateInterval[0].toString().substring(0, 25) : null} - {summary ? summary.dateInterval[1].toString().substring(0, 25) : null}</p>
            <p>Consum total: {summary ? summary.totalGeneratorConsumption/1000 : null} kWh</p>
            <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="generatorConsumption" stroke="#8884d8" fill="#74e893" />
            </AreaChart>
        </div>
    )
}

export default GeneratorConsumption;