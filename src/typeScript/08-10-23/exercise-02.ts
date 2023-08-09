/*
Now that we have a Starship and CrewMembers, we're going to need
to decide which crewmembers are allowed to touch all the shiny
parts of the engine. 

Since we know that Engineers are all CrewMembers, let's use
inheritance to create a sub-class of CrewMember and keep track of 
an Engineer's 'Certifications'

1. Create a Type called 'Certification' and give it at least
two different string values.
https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html#composing-types

2. Use 'super' magic to initialize a new Engineer. 
https://www.typescriptlang.org/docs/handbook/classes.html#inheritance
*/


class Engineer extends CrewMember {
  certifications: Certification[]
  constructor(name: string, certifications: Certification){
    this.certifications = certifications
  }
}

const engineer1 = new Engineer('Tali')