// import Person from './person';
//
// let person = new Person("1234", "Cathy", "Holmes");
// person.authenticate();
//

import {create, authenticate, db, welcome} from './person';

create("1234", "Cathy", "Holmes")
    .pipe(authenticate)
    .pipe(db('mysql://foobar'))
    .pipe(welcome("Welcome new user!"));