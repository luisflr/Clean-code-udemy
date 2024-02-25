export abstract class Auto {
  abstract getNumberOfSeats(): number
}

export class Tesla extends Auto{

  constructor(private numberOfSeats: number) { super() }


  getNumberOfSeats() {
      return this.numberOfSeats;
  }
}

export class Audi extends Auto{

  constructor( private numberOfSeats: number ) { super() }

  getNumberOfSeats() {
      return this.numberOfSeats;
  }
}

export class Toyota extends Auto{

  constructor( private numberOfSeats: number ) { super() }

  getNumberOfSeats() {
      return this.numberOfSeats;
  }
}

export class Honda extends Auto{

  constructor( private numberOfSeats: number ) { super() }

  getNumberOfSeats() {
      return this.numberOfSeats;
  }
}
