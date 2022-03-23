import React from 'react';
import { DbConsumption } from '../models/db';
import { useDatabaseData } from '../utils/dbRequests';
import { filterDataByType } from '../utils/filterData';

const HomeConsumption = () => {

    const dbData = useDatabaseData<DbConsumption>();
    if (dbData) {
        const data = filterDataByType(2, dbData);
    }

    return (
        <div>
            <p>Home Consumption</p>
        </div>
    )
}

export default HomeConsumption;