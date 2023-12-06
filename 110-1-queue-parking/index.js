
// Using Array
function parkingArray(A,B){
  let DQ = [];
  if(A.length == 1){
    return A  
  }
  for (let i = 0; i < B; i++) {
    while (DQ.length !== 0 && A[DQ[DQ.length - 1]] <= A[i]) {
      DQ.pop()
    }
    DQ.push(i)
  }
  console.log(A[DQ[0]])
  for (let i = B; i < A.length; i++) {
    while (DQ.length !== 0 && A[DQ[DQ.length - 1]] <= A[i]) {
      DQ.pop()
    }
    DQ.push(i)
    if(DQ[0] <= i - B) {
      DQ.shift();
    }
    console.log(A[DQ[0]])
  }

}
parkingArray([10,9,8,7,6,5,4,3,2,1],2)

//Using class
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }
  rear() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[this.items.length-1];
  }
  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.join(' '));
  }
}

// Example usage:
// const queue = new Queue();

// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);

// console.log("Queue Front:", queue.front()); // Output: 1
// console.log("Queue Size:", queue.size()); // Output: 3

// queue.print(); // Output: 1 2 3

// console.log("Dequeued:", queue.dequeue()); // Output: Dequeued: 1

// queue.print(); // Output: 2 3
function parking(A,B){
  let DQ = new Queue()
  for (let i = 0; i < B-1; i++) {
    while (!DQ.isEmpty() && A[DQ.rear()] <= A[i]) {
      DQ.dequeue()
      
    }
    DQ.enqueue(i)
  }
  console.log(A[DQ.front()])
  for (let i = B; i < A.length; i++) {
    while (!DQ.isEmpty() && A[DQ.rear()] <= A[i]) {
      DQ.dequeue()
    }
    
    DQ.enqueue(i)
    if(DQ.front() == i-B){
      DQ.dequeue()
    }
    console.log(A[DQ.front()])
  }

}
// console.log("res",parking([1,3,-1,-3,5,3,6,7],3))