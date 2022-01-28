import { GumballMachine } from "./GumballMachine";
import { State } from "./state";

export class SoldState implements State {
  constructor(private _gumballMachine: GumballMachine) {}

  insertQuarter(): void {
    console.log("Please wait, we're already giving you a gumball");
  }

  ejectQuarter(): void {
    console.log("Sorry, you already turned the crank");
  }

  turnCrank(): void {
    console.log("Turning twice doesn't get you another gumball");
  }

  dispense(): void {
    this._gumballMachine.releaseBall();
    if (this._gumballMachine.getCount() > 0) {
      this._gumballMachine.set(this._gumballMachine.getHasQuarterState());
    } else {
      console.log("Oops, out of gumballs!");
      this._gumballMachine.set(this._gumballMachine.getSoldOutState());
    }
  }
}
