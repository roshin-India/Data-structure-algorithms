class UserQueue {
  constructor() {
      this.items=[];

  }
  
  push(X) {
      // Push element X to the back of queue.
      this.items.push(X)
      
  }
  
  pop() {
      // Removes the element from in front of queue and returns that element.
      if(this.empty()) return 
      return this.items.shift();

  }
  
  peek() {
          // Get the front element of the queue.
        return this.items[0];
  }
  
  empty() {
      // Returns whether the queue is empty.
       return this.items.length==0
    }
}

 const obj = new UserQueue();
//  obj.push(20);
//  console.log(obj.empty());
//  console.log(obj.peek());
//  console.log(obj.pop());
//  console.log(obj.empty());
//  obj.push(30)
//  console.log(obj.peek());
//  obj.push(40);
//  console.log(obj.peek());




//  1000
 console.log(obj.empty());
 obj.push(858266521)
 console.log(obj.empty());
 obj.push( 524017393)
 obj.push( 758498923)
 obj.push (471901759)
 obj.push( 285778414)
 console.log(obj.pop());
 console.log(obj.pop());
 obj.push( 731682524)
 console.log(obj.pop());
 console.log(obj.pop());
 console.log(obj.pop());
 console.log(obj.peek());
 console.log(obj.peek());
 console.log(obj.empty());
 console.log(obj.empty()); 
 console.log(obj.peek());
 console.log(obj.empty());
//  push 359833475
//  push 424566379
//  pop 
//  peek 
//  push 393834998
//  pop 
//  push 820499165
//  isempty 
//  push 280937661
//  peek 
//  push 48817401
//  peek 
//  pop 
//  push 247841965
//  peek 
//  isempty 
//  isempty 
//  pop 
//  push 460729661
//  pop 
//  isempty 
//  push 28536236
//  peek 
//  pop 
//  push 158993473
//  peek 
//  peek 
//  push 211473256
//  peek 
//  peek 
//  pop 
//  peek 
//  push 652971724
//  push 616185077
//  push 919252998
//  pop 
//  push 645704807
//  peek 
//  pop 
//  isempty 
//  push 691481378
//  isempty 
//  isempty 
//  isempty 
//  pop 
//  peek 
//  push 763331734
//  push 638904251
//  pop 
//  isempty 
//  push 743963385
//  peek 
//  pop 
//  push 931860231
//  peek 
//  push 665536001
//  peek 
//  pop 
//  peek 
//  pop 
//  pop 
//  peek 
//  pop 
//  push 331536062
//  peek 
//  pop 
//  pop 
//  peek 
//  isempty 
//  isempty 
//  pop 
//  isempty 
//  peek 
//  peek 
//  isempty 
//  push 292442586
//  isempty 
//  isempty 
//  peek 
//  pop 
//  pop 
//  pop 
//  isempty 
//  push 152573039
//  push 172758961
//  push 752687973
//  push 397423008
//  pop 
//  peek 
//  pop 
//  pop 
//  isempty