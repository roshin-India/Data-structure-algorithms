# Problem Description

### Alex and Sam are good friends. Alex is doing a lot of programming these days. He has set a target score of A for himself.

Initially, Alex's score was zero. Alex can double his score by doing a question, or Alex can seek help from Sam for doing questions that will contribute 1 to Alex's score. Alex wants his score to be precisely A. Also, he does not want to take much help from Sam.

Find and return the minimum number of times Alex needs to take help from Sam to achieve a score of A.

### Problem Constraints

```
0 <= A <= 10^9
```

### Input Format

```
The only argument given is an integer A.

```

### Output Format

```
Return the minimum number of times help taken from Sam.
```

### Example Input

```
Input 1:
A = 5
Input 2:

A = 3
```

### Example Output

```
Output 1:
2
Output 2:

2
```

### Example Explanation

```
Explanation 1:
Initial score : 0
Takes help from Sam, score : 1
Alex solves a question, score : 2
Alex solves a question, score : 4
Takes help from Sam, score: 5
Explanation 2:

Initial score : 0
Takes help from Sam, score : 1
Alex solves a question, score : 2
Takes help from Sam, score : 3
```

OR

# Problem Description

### Alex has a cat named Boomer. He decides to put his cat to the test for eternity.

He starts on day 1 with one stash of food unit, every next day, the stash doubles.

If Boomer is well behaved during a particular day, only then she receives food worth equal to the stash produced on that day.

Boomer receives a net worth of A units of food. What is the number of days she received the stash?

### Problem Constraints

```
1 <= A <= 2^31-1
```

### Input Format

```
First and only argument is an integer A.
```

### Output Format

```
Return an integer denoting the number of days Boomer was well behaved.
```

### Example Input

```
Input 1:

A = 5
Input 2:

A = 8
```

### Example Output

```
Output 1:

 2
Output 2:

 1
```

### Example Explanation

```
Explanation 1:

 To eat a total of 5 units of food, Boomer behaved normally on Day 1 and on the Day 3.
Explanation 2:

 To eat a total of 8 units of food, Boomer behaved normally only on day 4.
```
