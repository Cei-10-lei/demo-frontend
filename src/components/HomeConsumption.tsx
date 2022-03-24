import React, {useState, useEffect} from 'react';
import { useDatabaseData } from '../utils/dbRequests';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
  import { DbConsumption, Summary } from '../models/db';
import { filterDataByType, getSummary } from '../utils/filterData';


const ELECTRICITY_PRICE = 1.5;

const HomeConsumption = () => {

    const [data, setData] = useState<DbConsumption[]>();
    const [summary, setSummary] = useState<Summary>();

    const dbData = useDatabaseData<DbConsumption>();

    useEffect(() => {
        if (dbData) {
            setData(filterDataByType(dbData));
            setSummary(getSummary(dbData));
        }
    }, [dbData]);

    return (
        <div>
            <h2 style={{textAlign: 'left'}}>Consumul casei tale</h2>
            <p>Intervalul de timp masurat: {summary ? summary.dateInterval[0].toString().substring(0, 25) : null} - {summary ? summary.dateInterval[1].toString().substring(0, 25) : null}</p>
            <p>Consum total al casei: <span style={{color: 'red'}}>{summary ? summary.totalHouseConsumption/1000 : null} kWh</span></p>
            <p>Curentul economisit de generator: <span style={{color: 'green'}}>{summary ? summary.totalGeneratorConsumption/1000 : null} kWh</span></p>
            <p>Bani economisiti: <span style={{color: "blue"}}>{summary ? summary.totalGeneratorConsumption/1000 * ELECTRICITY_PRICE : null} lei</span></p>
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
                <Legend />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="homeConsumption" stroke="#8cf3f5" fill="#8cf3f5" />
                <Area type="monotone" dataKey="generatorConsumption" stroke="#74e893" fill="#74e893" />
            </AreaChart>
            <div style={{display: "flex"}}>
                <p style={{marginTop: 30, marginRight: 10, fontSize: 20, fontWeight: 'bold'}}>Powered by: </p>
                <img src={require('../img/logo.png')} height={100} />
            </div>
        </div>
    )
}

export default HomeConsumption;