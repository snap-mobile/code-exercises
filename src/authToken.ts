
export default class AuthToken {
  person: any;

  constructor(person: any) {
    this.person = person;
  }

  generate() {
    console.log(`Token generated at ${new Date()}`)
  }
}