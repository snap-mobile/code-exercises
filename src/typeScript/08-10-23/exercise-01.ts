/*
Now that we have a CrewMember class, we can start assigning them.

But we don't want just anyone adding to our crew. The 'private' 
keyword on line 17 prevents the 'crew' attribute from being
accessible outside the class. 

1. Write a method within the Starship class to add CrewMembers to our crew
2. Make sure we are only receiving CrewMembers.
3. Write a method to return our current crew.

https://www.typescriptlang.org/docs/handbook/classes.html#public-private-and-protected-modifiers
*/

class Starship {
  public name: string;
  private crew: string[] = [];

  constructor(readonly n: string) {
    this.name = n;
  }
}

const normandy = new Starship('Normandy')

normandy.crew[0] = 'Garrus'
normandy.crew.push('Ashley')
normandy.crew.unshift('Jenkins')
