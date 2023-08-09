/*
Now that we have a Starship fully crewed, let's practice
what we've learned and add it to our new class: Fleet

1. Create two new instances of the Starship class and
add them to a new instance of the Fleet class.

2.Populate the 'ShipsInFleet' getter below to return
the value of Fleet.ships. Be sure to catch errors!

3. Use the 'FleetDesignation' setter to . . . set the 
designation value for the instance of Fleet we created
in step 1. Again, add a check for errors.

https://www.typescriptlang.org/docs/handbook/classes.html#accessors
*/

class Fleet {
  public ships: Starship[]
  private designation: string

  constructor(ships: Starship[]) {
    this.ships = ships
  }

  get ShipsInFleet(){}

  set FleetDesignation(){}

}