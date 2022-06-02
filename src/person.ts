import AuthToken from "./authToken";
import DbModel from "./dbModel";
import Emailer from "./emailer";

export interface Person {
  id: string;
  firstName: string;
  lastName: string;
  dbRecord?: any;
  token?: any;
}

export const authenticatePerson = (person: Person) => {
  
} 

export const welcomeUser = (person: Person) => {

}
export class PersonClass {
  id: string;
  firstName: string;
  lastName: string;
  dbRecord: any;
  token: any;


  authenticate() {
    this.token = new AuthToken(this);
    this.token.generate();
    this.dbRecord = new DbModel("mysql://foobar").where({ id: this.id });
    this.welcome();
    this.dbRecord.lastLogin = new Date();
  }

  welcome() {
    // if (this.dbRecord?.lastLogin) { return };
    new Emailer("Welcome new user!").send();
  }
}
