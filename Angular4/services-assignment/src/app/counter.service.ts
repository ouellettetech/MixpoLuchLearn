export class CounterService {
  activateCount = 0;
  inactivateCount = 0;
  
  countUserInActive() {
      this.activateCount ++;
      this.printCount();
  }

  countUserActive() {
      this.inactivateCount++;
      this.printCount();
    }

    printCount() {
        console.log("Active To InActive: "+this.inactivateCount + "In Active to Active: "+this.activateCount);
    }
}
