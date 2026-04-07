import Buyable from './buyables';
export default class Movie implements Buyable {

    constructor(
       readonly id: number,
       readonly year: number,
       readonly country: string,
       readonly name: string, 
       readonly slogan: string, 
       readonly price: number, 
       readonly genre: [],
       readonly time: string,

    ) {
       

    }

}