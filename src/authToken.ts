import { Person } from './person';
export default function authToken(_person: Person): string {
  // irl we'd actually use `person` but whatever
  console.log(`Token generated at ${new Date()}`);
  return 'abc123';
}
