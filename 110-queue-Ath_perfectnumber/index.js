const A=2;

function AthPerfectnumber(A) {
  const q = [];
        q.push("1");
        q.push("2");


        let i = 0;
        while (i < A) {
            let val = q[i];
            q.push(val + "1");
            q.push(val + "2");
            i++;
        }

      return q[A - 1] + (q[A - 1].split("").reverse().join(""));
  }
const result =AthPerfectnumber(A);
console.log("result",result); 
