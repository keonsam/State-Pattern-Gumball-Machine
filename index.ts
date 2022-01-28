import { GumballMachine } from "./src/GumballMachine";

class GumballMachineTestDrive {
  static main() {
    const gumballMachine = new GumballMachine(5);

    console.log(gumballMachine);

    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();

    console.log(gumballMachine);

    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();

    console.log(gumballMachine);
  }
}

GumballMachineTestDrive.main();
