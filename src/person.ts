import AuthToken from './authToken';
import DbModel from './dbModel';
import Emailer from './emailer';

import type {Pipe, Next} from './pipe';
import {pipe} from './pipe';

// export default class Person {
//     id: string;
//     firstName: string;
//     lastName: string;
//     dbRecord: any;
//     token: any;
//
//     constructor(id: string, firstName: string, lastName: string) {
//         this.id = id;
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dbRecord = null;
//         this.token = null;
//     }
//
//     authenticate() {
//         this.token = new AuthToken(this);
//         this.token.generate();
//         this.dbRecord = new DbModel("mysql://foobar").where({id: this.id});
//         this.welcome();
//         this.dbRecord.lastLogin = new Date;
//     }
//
//     welcome() {
//         // if (this.dbRecord?.lastLogin) { return };
//         new Emailer("Welcome new user!").send();
//     }
// }

type Person = {
    id: string;
    firstName: string;
    lastName: string;
    dbRecord: any;
    token: any;
};

export const create = (id: string, firstName: string, lastName: string): Next<Person> => {
    const person: Person = {id, firstName, lastName, dbRecord: null, token: null};
    return pipe<Person>(person)();
};

export const authenticate: Pipe<Person> = (person) => {
    const token = new AuthToken(person);
    token.generate();

    return {...person, token};
};

export const db = (config: string) => {
    return (person: Person) => {
        const dbRecord = new DbModel(config).where({id: person.id})
        dbRecord.lastLogin = new Date;

        return {...person, dbRecord}
    }
};

export const welcome = (body: string) => {
    new Emailer(body).send();
    return (person: Person) => person;
};
