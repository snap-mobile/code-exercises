import { authenticate, newPerson, Person } from './person';
import sendEmail from './emailer';

function welcome(_person: Person) {
  // irl we'd use person
  sendEmail('Welcome new user!');
}

welcome(authenticate(newPerson('1234', 'Cathy', 'Holmes')));
