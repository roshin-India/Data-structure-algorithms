# Problem Description

### Given an array of integers A, a subarray of an array is said to be good if it fulfills any one of the criteria:

1. Length of the subarray is be even, and the sum of all the elements of the subarray must be less than B.
2. Length of the subarray is be odd, and the sum of all the elements of the subarray must be greater than B.
   Your task is to find the count of good subarrays in A.

```

### Problem Constraints

```

1 <= len(A) <= 103
1 <= A[i] <= 103
1 <= B <= 107

```

### Input Format

```

The first argument given is the integer array A.
The second argument given is an integer B.

```

### Output Format

```

Return the count of good subarrays in A.

```

### Example Input

```

Input 1:
A = [1, 2, 3, 4, 5]
B = 4

```

### Example Output

```

6

```

### Example Explanation

```

Explanation 1:
Even length good subarrays = {1, 2}
Odd length good subarrays = {1, 2, 3}, {1, 2, 3, 4, 5}, {2, 3, 4}, {3, 4, 5}, {5}

```

```
