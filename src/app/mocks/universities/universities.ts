import { University } from "../../models/University/university.interface";

const universitiesList: University[] = [
    {Name:"Carleton University",Country: "Canada", City: "Ottawa", Image:"./assets/CU.jpg", Enabled: true},
    {Name:"Ottawa University",Country: "Canada", City: "Ottawa", Image:"./assets/OU.png", Enabled: false},
 ]   

 export const UNIVERSITIES_LIST = universitiesList;