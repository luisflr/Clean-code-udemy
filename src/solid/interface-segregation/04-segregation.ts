// opcion 1
(() => {

  interface Bird {
    eat(): void;
  }

  interface FlyingBird {
    fly(): void;
  }

  interface RunningBird {
    run(): void;
  }

  interface SwimmingBird {
    swim(): void;
  }

  class Tucan implements Bird, FlyingBird {
    public fly(){}
    public eat(){}
  }

  class Humminbird implements Bird, FlyingBird {
    public fly(){}
    public eat(){}
  }

  class Ostrich implements Bird, RunningBird {
    public eat(){}
    public run(){}
  }

  class Penguin implements Bird, SwimmingBird {
    public eat(){}
    public swim(){}
  }
})();


// opcion 2
(() => {

  interface Bird {
    eat(): void;
    swim?(): void;
    fly?(): void;
    run?(): void;
  }

  

  class Tucan implements Bird {
    public fly(){}
    public eat(){}
  }

  class Humminbird implements Bird {
    public fly(){}
    public eat(){}
  }

  class Ostrich implements Bird {
    public eat(){}
    public run(){}
  }

  class Penguin implements Bird {
    public eat(){}
    public swim(){}
  }
})();