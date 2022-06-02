export default class AuthToken {
  person: any;
  token: string;

  constructor(person: any) {
    this.person = person;
  }

  generate() {
    this.token = "abc123";
    console.log(`Token generated at ${new Date()}`);
  }
}

export function generateToken() {
  return "abc123";
}
