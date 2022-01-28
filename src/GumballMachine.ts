import { HasQuarterState } from "./HasQuarterState";
import { NoQuarterState } from "./NoQuarterState";
import { SoldOutState } from "./SoldOutState";
import { SoldState } from "./SoldState";
import { State } from "./state";
import { WinnerState } from "./WinnerState";

export class GumballMachine {
  private _soldOutState: State = new SoldOutState(this);
  private _noQuarterState: State = new NoQuarterState(this);
  private _hasQuarterState: State = new HasQuarterState(this);
  private _soldState: State = new SoldState(this);
  private _winnerState: State = new WinnerState(this);
  private _state: State = this._soldOutState;
  constructor(private _count: number) {
    if (_count > 0) {
      this._state = this._noQuarterState;
    }
  }

  insertQuarter(): void {
    this._state.insertQuarter();
  }

  ejectQuarter(): void {
    this._state.ejectQuarter();
  }

  turnCrank(): void {
    this._state.turnCrank();
    this._state.dispense();
  }

  set(state: State) {
    this._state = state;
  }

  getHasQuarterState() {
    return this._hasQuarterState;
  }

  getNoQuarterState() {
    return this._noQuarterState;
  }

  getSoldState() {
    return this._soldState;
  }

  getSoldOutState() {
    return this._soldOutState;
  }

  getWinnerState() {
    return this._winnerState;
  }
  
  getCount() {
    return this._count;
  }

  getCapacity() {
    return this._capacity;
  }

  releaseBall() {
    console.log("A gumball comes rolling out the slot...");
    if (this._count > 0) {
      this._count--;
    }
  }
}