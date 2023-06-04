const A = [1, 2, 3, 4, 5];
const B = 4;

function goodSubarray(A, B) {
  let N = A.length;
  let count = 0;
  for (let i = 0; i < N; i++) {
    let sum = 0;
    for (let j = i; j < N; j++) {
      sum = sum + A[j];
      const len = j - i + 1;
      if ((len % 2 == 0 && sum < B) || (len % 2 != 0 && sum > B)) count++;
    }
  }
  return count;
}
const res = goodSubarray(A, B);
console.log(res);

/*
        Idea 1 (Brute-Force)
        TC --> O(N3)
        SC --> O(1)

        Note : This code As TC--> O(N3) may not have to work for bigger values as it gets close to 10^9. But here it is working somehow by chance.
   
        public int solve(int[] A, int B){
          int N=A.length;
  
          int count=0;
          for (int i=0; i<N; i++){
              for (int j=i; j<N; j++){
                  int sum=0;
                  for (int k=i; k<=j; k++) sum=sum+A[k];
  
                  int len=j-i+1;
                  if (len%2==0 & sum<B || len%2!=0 & sum>B) count++;
              }
          }
          return count;
      }

          Idea 2 : Find 'Prefix Sum' of the array, increment count for the conditions (even->len and sum<B) & (odd->len and sum>B).
          TC --> O(N2)
          SC --> O(1) ---> As here we are updating the given array only.  
  
      
      public int solve(int[] A, int B) {
          int N=A.length;
          for (int i=1; i<N; i++) A[i]=A[i-1]+A[i]; // Create pSum.
  
          int sum,count=0;
          for (int i=0; i<N; i++){
              for (int j=i; j<N; j++){
                  int len=j-i+1;
                  if (i!=0) sum=A[j]-A[i-1];
                  else sum=A[j];
  
                  if((len%2==0 & sum<B) | (len%2!=0 & sum>B)) count++;
                  // Condition 1. if len is 'even' sum should be less than B.
                  // Condition 2. if len is 'odd' sum should be greter than B.
              }
          }
          return count;
      }
  
  

          Idea 3 : "Carry Forword" the sum and increment the count for the given conditions of even and odd.
          TC --> O(N2)
          SC --> O(1)  
     
      public int solve(int[] A, int B) {
          int N=A.length;
  
          int count=0;
          for (int i=0; i<N; i++){    // Starting point
              int sum=0;
              for (int j=i; j<N; j++){    // Ending point
                  int len=j-i+1;  // Finding len
                  sum=sum+A[j];   // Finding sum
                  if((len%2==0 & sum<B) || (len%2!=0 & sum>B)) count++;
                  // Condition 1. if len is 'even' sum should be less than B.
                  // Condition 2. if len is 'odd' sum should be greter than B.
              }
          }
          return count;
      }
  */
