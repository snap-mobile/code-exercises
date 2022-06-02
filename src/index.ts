import {Person,PersonClass} from './person';

//new object equals to persons class
const peoplePersons: Person = {
    firstName: "Cathy",
    lastName: "Holmes",
    id: "1234"
} 



let person = new PersonClass("1234", "Cathy", "Holmes");
person.authenticate();
