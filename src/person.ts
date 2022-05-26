
import AuthToken from './authToken';
import DbModel from './dbModel';
import Emailer from './emailer';

export default class Person {
  id: string;
  firstName: string;
  lastName: string;
  dbRecord: any;
  token: any;

  constructor(id: string, firstName: string, lastName: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dbRecord = null;
    this.token = null;
  }

  authenticate() {
    this.token = new AuthToken(this);
    this.token.generate();
    this.dbRecord = new DbModel("mysql://foobar").where({id: this.id});
    this.welcome();
    this.dbRecord.lastLogin = new Date;
  }

  welcome() {
    // if (this.dbRecord?.lastLogin) { return };
    new Emailer("Welcome new user!").send();
  }
}