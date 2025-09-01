
# Credit Card Checker program

This program will take a nested array of credit card number and validate the number by using Luhn algorithm to check the "Check digit" and return answer which related to Check digit.
The project is part of the Full-Stack Engineer course of www.codecademy.com.


## Lessons Learned

**Luhn algorithm**

**Javascript:** 
* Function 
* Conditional statement
* Loop
* Array method


## Tech Stack

**Back-end:** Javascript (Node.js)


## Environment Variables

To run this project, you will need to install Node.js in your computer


## Function Explanation

* Functon validateCred:
  * To validate the credit card number by using Luhn algorithm formula to compare the Check digit
* Function findInvalidCards:
  * To sort out the array of invalid card number
* Function idInvalidCardCompanies:
  * To compare the first number of credit card number with the credit card companies pattern and return all companies which relate to the compare
* Function convertToArray:
  * This function will be use when the input is not an array but it is string type data. The function will convert the string to be an array.
* Function convertToValid:
  * To convert the invalid credit card number to valid card number


## Running Test

To test this project, after copy and paste the code to your text editor.

You can use the lists of sample credit card number that I have provide in the first 24 lines, or use any random credit card, up to you!
```bash
  const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
  const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
  const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
  const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
  const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];
```

Next uncomment the following log to test each functions(read the function explanation above)
```bash
  //All log for testing program
  //console.log(idInvalidCardCompanies(findInvalidCards(convertToArray(batchStr))));
  console.log(idInvalidCardCompanies(findInvalidCards(batch)));
  //console.log(findInvalidCards(convertToArray(batch)));
  //console.log(validateCred(convertToArray(batch)[0]));
  //console.log(convertToArray(batch));
  //console.log(convertToValid(findInvalidCards(convertToArray(batch))));
```

then run the following command on the terminal to see the result
```bash
  node main.js
```


## Acknowledgements

 - [Javascript array method from Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array)
 - [Javascript array method from W3schools](https://www.w3schools.com/js/js_array_methods.asp)


## 🚀 About Me
I'm studying and learning to be a full stack developer.

