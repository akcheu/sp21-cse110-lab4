1. The bug was that num1 and num2 were strings and not integers, so the "+" operation concatenates the two strings instead of performing integer addition. In the case of num1 = '1' and num2 = '2', the result was '12'.
2. To fix the bug, we can perform a type conversion of num1 and num2 from string to integer. This can be done by using the Number() type conversion function on both num1 and num2: let result = Number(num1) + Number(num2). A screenshot of this fix is included in this directory.
3. citylots.json
4. part2.js
5. 11.7 MB
6. 71 ms
7. Chrome/90.0.4430.85
8. Apache
9. Tue, 26 Jan 2021 22:14:13 GMT
10. application/json
11. fetchData()
   