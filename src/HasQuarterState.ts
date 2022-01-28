import { GumballMachine } from "./GumballMachine";
import { State } from "./state";

export class HasQuarterState implements State {
  constructor(private _gumballMachine: GumballMachine) {}

  insertQuarter(): void {
    console.log("You already inserted a quarter");
    this._gumballMachine.set(this._gumballMachine.getHasQuarterState());
  }

  ejectQuarter(): void {
    console.log("You quarter ejected");
    this._gumballMachine.set(this._gumballMachine.getNoQuarterState());
  }

  turnCrank(): void {
    console.log("You turned...");
    const random = Math.round(Math.random() * 10);

    if (random > 7) {
      this._gumballMachine.set(this._gumballMachine.getWinnerState());
    } else {
      this._gumballMachine.set(this._gumballMachine.getSoldState());
    }
  }

  dispense(): void {
    console.log("No gumball dispensed");
  }
}
