class Vehicle {
  constructor(public color: string) {}
  protected honk(): void {
    console.log('beeep');
  }
}

class Bus extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  startDriveProcess(): void {
    this.drive();
    this.honk();
  }
}

const bus = new Bus(8, 'red');
bus.startDriveProcess();
