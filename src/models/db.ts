/**
 * @author Rares Liscan
 * 
 * @constant GENERATED_ELECTRICITY - the consumption field from the database was created by the generator
 * @constant PROVIDED_ELECTRICITY - the consumption field from the database was used from the provider
 * @interface DbConsumption - defines the model of the fields from the database
 */

export const GENERATED_ELECTRICITY = 1;
export const PROVIDED_ELECTRICITY = 2;

export interface DbConsumption {
    _id: string,
    type: number,
    consumption: number,
    time: string
}

export interface Summary {
    totalConsumption: number,
    dateInterval: Array<Date>,
}