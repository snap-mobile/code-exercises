
import { generateToken } from './authToken';
import { dbWhere } from './dbModel';
import { sendEmail } from './emailer';

export type Person = {
  id: string;
  firstName: string;
  lastName: string;
  token?: string;
  lastLogin?: Date;
}

export const authenticate = (id: string, firstName: string, lastName: string): Person => {
  const person = generateToken({ id, firstName, lastName });
  const dbRecord = dbWhere("mysql://foobar", { id });

  const result = {
    ...person,
    ...dbRecord
  }

  sendEmail("Welcome new user!");

  return result;
}
