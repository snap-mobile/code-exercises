import authToken from './authToken';
import { getPersonRecord, DbModel } from './dbModel';

export interface Person {
  id: string;
  firstName: string;
  lastName: string;
  dbRecord?: DbModel;
  token?: string;
}

export function newPerson(
  id: string,
  firstName: string,
  lastName: string
): Person {
  return { id, firstName, lastName };
}

export function authenticate(person: Person) {
  const token = authToken(person);
  const record = getPersonRecord(person.id);
  return { ...person, token, record };
}
