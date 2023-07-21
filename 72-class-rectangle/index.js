class Circle {
  constructor(a, b) {
    this.r = a;
    this.b = b;
  }
  volum() {
    return 3.14 * this.r * this.r;
  }
}
class Rectangle extends Circle {
  // Define constructor here
  constructor(...arg) {
    super(3, 4);
    this.l = arg[0];
    this.b = arg[1];
    this.name = "defaslt";
  }
  setName(a) {
    this.name = a;
  }
  perimeter() {
    return 2 * (this.l + this.b);
  }

  area() {
    console.log("parent fn", this.volum());
    return this.l * this.b;
  }
}

let a = new Rectangle(1, 2, 3, 4); // Length = 2, Breadth = 3
a.setName("Roshin");
console.log(a.perimeter()); //10
console.log(a.area()); // Should give 6
