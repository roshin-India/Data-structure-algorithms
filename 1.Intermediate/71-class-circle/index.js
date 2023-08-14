class Circle {
  // Define constructor here

  constructor(r = 0) {
    this.radius = r;
  }
  perimeter() {
    // Complete the function
    return 2 * 3.14 * this.radius;
  }

  area() {
    // Complete the function
    return 3.14 * this.radius * this.radius;
  }
}
a = new Circle(3); // Radius = 3
console.log(a.area()); // 28.26
