
export default class Emailer {
  body: string;

  constructor(body: string) {
    this.body = body;
  }

  send() {
    console.log(this.body)
  }
}