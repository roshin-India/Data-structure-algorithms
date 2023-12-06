stack-removing double caracters


### Problem Description

You have a string, denoted as A.

To transform the string, you should perform the following operation repeatedly:
Identify the first occurrence of consecutive identical pairs of characters within the string.
Remove this pair of identical characters from the string.
Repeat steps 1 and 2 until there are no more consecutive identical pairs of characters.
The final result will be the transformed string.


### Problem Constraints

```
1 <= |A| <= 100000
```

### Example

```
Input Format
First and only argument is string A.



Output Format
Return the final string.



Example Input
Input 1:

 A = "abccbc"
Input 2:

 A = "ab"


Example Output
Output 1:

 "ac"
Output 2:

 "ab"

```
