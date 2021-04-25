**PART A**
1. values added: 20
2. values added: 20
3. values added: 20
4. ReferenceError; the "let" keyword only has block scope, and so the "result" variable is contained within the if-block. Line 13 is outside of the if-block and tries to access the contents of the result variable, resulting in a ReferenceError.
5. TypeError; the "const" keyword does not allow for modification of the variable value, which is why a TypeError occurs when line 7 tries to reassign the value of "result". 
6. ReferenceError; the "const" keyword only has block scope, and so the "result" variable is contained inside the if-block. Line 13 is outside of the if-block and tries to access the contents of the result variable, resulting in a ReferenceError.
   
**PART B**
1. 3
2. The value "3" will be printed to the console because the "var" variable "i" has function scope and therefore line 12 is in valid scope. "3" is printed because that is the final value of "i" after the for-loop finishes (up to prices.length, where prices is the array of size 3: [100, 200, 300]). 
3. The value "150" will be printed to the console because the "var" variable "discountedPrice" has function scope and therefore line 13 is in valid scope. "150" is printed because that is the final value of "discountedPrice" after the for-loop finishes. This value is computed by the formula: prices[2] * (1 - 0.5) = 300 * (0.5) = 150. 
4. The value "150" will be printed to the console because the "var" variable "finalPrice" has function scope and therefore line 13 is in valid scope. "150" is printed because that is the final value of "finalPrice" after the for-loop finishes. This value is computed by the formula Math.round(discountedPrice * 100) / 100, where discountedPrice = 150, as computed in #3. Therefore, Math.round(150 * 100) / 100 = 15000 / 100 = 150.
5. ReferenceError; the "let" keyword only has block scope, and so the "i" variable is contained within the for-loop. Line 12 is outside of the for-loop and tries to access the contents of the "i" variable, resulting in a ReferenceError.
6. ReferenceError; the "let" keyword only has block scope, and so the "discountedPrice" variable is contained within the for-loop. Line 13 is outside of the for-loop and tries to access the contents of the "i" variable, resulting in a ReferenceError.
7. The value "150" will be printed to the console because the "let" variable "finalPrice" has function scope and therefore line 14 is in valid scope. "150" is printed because that is the final value of the "finalPrice" variable after the for-loop finishes. This value is computed by the formula Math.round(discountedPrice * 100) / 100, where discountedPrice = 150, as computed in #3. Therefore, Math.round(150 * 100) / 100 = 15000 / 100 = 150.
8. This function returns an array [50, 100, 150]. The values represent the discounted prices of the input array [100, 200, 300] given the discount value of 0.5.
9. ReferenceError; the "let" keyword only has block scope, and so the "i" variable is contained within the for-loop. Line 11 is outside of the for-loop and tries to access the contents of the "i" variable, resulting in a ReferenceError.
10. The value "3" will be printed to the console because the "const" variable "length" has function scope and therefore line 12 is in valid scope. "3" is printed because that is the initialized value of the variable "length", the array length of the prices input array [100, 200, 300].
11. This function returns an array [50, 100, 150]. The values represent the discounted prices of the input array [100, 200, 300] given the discount value of 0.5.
12. Notations
    1.  student.name
    2.  student["Grad Year]
    3.  student.greeting()
    4.  student['Favorite Teacher'].name
    5.  student.courseload[0]
13. Arithmetic
    1.  '32'; '3'+2 results in '32' because the integer 2 is type converted to a string and concatenated to the '3', resulting in '32'.
    2.  1'; '3'-2 results in the integer 1 because the string '3' is type converted to an integer and the subtraction operation is performed on primitive values: 3 - 2 = 1.
    3.  3; the null value in 3 + null is type converted to the integer 0, and thus the addition operation is performed: 3 + 0 = 3.
    4.  '3null'; the null value is typed converted to the string 'null' and concatenated to the string '3'.
    5.  4; the true boolean value is typed converted to the integer 1 and the addition operation is performed: 1 + 3 = 4.
    6.  0; false and null are both type converted the the integer 0 and the additioanl operation is performed: 0 + 0 = 0.
    7.  '3undefined'; the undefined value is type converted to the string 'undefined' and concatenated to the string '3'.
    8.  NaN; the string '3' is type converted to the integer 3 and undefined value is numeric type converted to the NaN value. The operation 3 - NaN results in NaN. 
14. Comparison
    1.  true; '2' is type converted to the integer 2 and the comparison 2 > 1 is evaluated as true.
    2.  false; '2' and '12' are compared lexicographically as strings and '2' comes before '12', resulting in a greater value than the latter.
    3.  true; the string '2' is type converted to the integer 2 and the comparison 2 == 2 is evaluated as true.
    4.  false; the strict equality operator '===' enforces that both sides are of the same type, which is false in this case as '2' is a string and 2 is an integer.
    5.  false; the true boolean value is type converted to the integer 1 and the integer comparison 1 == 2 is evaluated as false.
    6.  true; the Boolean(2) term type converted the integer 2 to a boolean value (true or false). Since 2 is greater than or equal to 1, it is type converted to true and the strict comparison true === true is evaluated as true.
15. The '===' differs from the '==' operator as it is the strict equality operator, which enforces that both sides of the equality are of the same type. The '==' operator performs type conversions on both sides of the equation when evaluating equality.
16. Answer in part1b-question16.js
17. The result of the function would be a return array newArr with the values [2,4,6]. The flow of the program starts with the input array [1,2,3], as well as a callback function doSomething that are passed in as parameters to the modifyArray function. Then an empty const array is declared with function scope. A for-loop iterates for the length of the array (3) and pushes the return value of the callback function (doSomething, which multiplies the paramter value by 2). At each iteration the "i" value is passed into the parameter of the callback function, and therefore the resulting array would simply by [2,4,6] or double the values of the input array.
18. Answer in part1b-question18.js
19. 1
    
    4

    3
    
    2