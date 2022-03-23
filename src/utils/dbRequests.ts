import axios from "axios"
import { useEffect, useState } from "react";
import { DbConsumption } from "../models/db";

const API_URL = "http://localhost:8081/consumption/"


export function useDatabaseData<Db>() {
    const [data, setData] = useState<Db[]>();

    useEffect(() => {
       axios.get(API_URL, {headers: {"Content-Type": "application/json"}})
        .then(response => {
            // const newData = response.data.map((val:DbConsumption) => val);
            setData(response.data);
        })
        .catch(error => console.error(error));
    }, []);

    return data;
}
