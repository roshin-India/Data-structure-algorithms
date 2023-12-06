let head;
class LinkedList {
  data;
  next;
  constructor(data) {
      this.data = data;
  }

  insert_node(pos, no) {
      let newNode = new LinkedList(no);
      if (!head) head = newNode;
      else if(pos == 1) {
          let temp = head;
          head = newNode;
          newNode.next = temp;
      }
      else {

          // let t = head;
          // while (pos > 2) {
          //     pos--;
          //     t = t.next;
          // }
          // let temp = t.next;
          // t.next = n;
          // n.next = temp;

          //OR
          
          let current = head;
          let count = 1;

          while (current && count < pos - 1) {
            current = current.next;
            count += 1;
          }

          if (!current) {
            return;
          }

          newNode.next = current.next;
          current.next = newNode;
      }
      return;
  }

  delete_node(pos) {
      if(!head.next) head = new LinkedList();
      else if(pos == 1) {
          let next = head.next;
          head.next = null;
          head = next;
      }
      else {
          // let temp = head;
          // while(pos > 2 && temp.next) {
          //     temp = temp.next;
          //     pos--;
          // }
          // if(temp.next) {
          //     let next = temp.next.next;
          //     temp.next.next = null;
          //     temp.next = next;
          // }

          //OR
          
          let current = head;
          let count = 1;

          while (current && count < pos - 1) {
            current = current.next;
            count += 1;
          }

          if (!current || !current.next) {
            return;
          }

          current.next = current.next.next;
      }
      return;
  }

  print_ll() {
      let ll = "";
      let temp = head;
      while(temp != null) {
          if(temp.next == null) ll += temp.data;
          else ll += temp.data + " "; 
          temp = temp.next;
      }
      console.log(ll);
      return;
  }
}

const A = new LinkedList();
A.insert_node(1,1);
A.insert_node(2,2);
A.insert_node(3,3);
A.delete_node(1)
A.print_ll();
console.log("ffff",A)