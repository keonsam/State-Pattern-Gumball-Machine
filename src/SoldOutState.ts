import { GumballMachine } from "./GumballMachine";
import { State } from "./state";

export class SoldOutState implements State {
  constructor(private _gumballMachine: GumballMachine) {}

  insertQuarter(): void {
    console.log("Oops, no gumballs available");
  }

  ejectQuarter(): void {
      console.log("You haven't inserted a quarter");
  }

  turnCrank(): void {
      console.log("You turned, but there's no quarter");
  }

  dispense(): void {
        console.log("No gumballs");
  }
}
