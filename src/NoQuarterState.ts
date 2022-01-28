import { GumballMachine } from "./GumballMachine";
import { State } from "./state";

export class NoQuarterState implements State {
  constructor(private _gumballMachine: GumballMachine) {}

  insertQuarter(): void {
      console.log("You inserted a quarter");
      this._gumballMachine.set(this._gumballMachine.getHasQuarterState());
  }

  ejectQuarter(): void {
      console.log("You haven't inserted a quarter");
  }

  turnCrank(): void {
      console.log("You turned, but there's no quarter");
  }

  dispense(): void {
      console.log("You need to pay first");
  }
}