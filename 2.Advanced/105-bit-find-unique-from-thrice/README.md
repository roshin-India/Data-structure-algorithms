#Maximum AND Pair

#Problem Description

### Given an array A. For every pair of indices i and j (i != j), find the maximum A[i] & A[j].

### Problem Constraints

```
1 <= len(A) <= 105
1 <= A[i] <= 109

```

### Input Format

```
Only argument A is an array of integers
```

### Output Format

```
Return a single integer that is the maximum A[i] & A[j].
```

### Example

```
Example Input
Input 1:-
A = [53, 39, 88]
Input 2:-
A = [38, 44, 84, 12]


Example Output
Output 1:-
37
Output 2:-
36


Example Explanation
Explanation 1:-
53 & 39 = 37
39 & 88 = 0
53 & 88 = 16
Maximum among all these pairs is 37
Explanation 2:-
Maximum bitwise and among all pairs is (38, 44) = 36

```
