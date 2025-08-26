//For all credit card numbers in array data type
// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


//For all credit card number in String data type
// All valid credit card numbers
const valid6 = '4539677908016808'
const valid7 = '5535766768751439'
const valid8 = '371612019985236'
const valid9 = '6011144340682905'
const valid10 = '4539404967869666'

// All invalid credit card numbers
const invalid6 = '4532778771091795'
const invalid7 = '5795593392134643'
const invalid8 = '375796084459914'
const invalid9 = '6011127961777935'
const invalid10 = '5382019772883854'

// Can be either valid or invalid
const mystery6 = '344801968305414'
const mystery7 = '5466100861620239'
const mystery8 = '6011377020962656203'
const mystery9 = '4929877169217093'
const mystery10 = '4913540463072523'

// An array of all the arrays above
const batchStr = [valid6, valid7, valid8, valid9, valid10, invalid6, invalid7, invalid8, invalid9, invalid10, mystery6, mystery7, mystery8, mystery9, mystery10]


// Add your functions below:
//Check inlavaid card numbers
const validateCred = cardNum => {
    if (Array.isArray(cardNum)) {
        const elementType = cardNum.every(element => typeof element === 'number');
        if (elementType) {
            let reverseNum = cardNum.slice();
            const checkDigit = reverseNum.pop();
            reverseNum.reverse();
            for (let i = 0; i < reverseNum.length; i++) {
                if (i % 2 === 0) {
                    reverseNum[i] = reverseNum[i] * 2;
                    if (reverseNum[i] > 9) {
                        reverseNum[i] = reverseNum[i] - 9;
                    }
                }
            }           
            const checkNum = (10 - (reverseNum.reduce((accumulator, currentValue) => accumulator + currentValue) % 10)) % 10;
            if (checkNum === checkDigit) {
                return 'valid';
            } else {
                return 'invalid';
            }
        } else {
            return 'invalid data'
        }
    } else {
        return 'Please input an array';
    }    
};

//Generate a nested array for invalid card
const findInvalidCards = cardArray => {
    let invalidCards = [];
    for (let i = 0; i < cardArray.length; i++) {
        let cardCheck = validateCred(cardArray[i]);
        if (cardCheck === 'invalid') {
            invalidCards.push(cardArray[i]);
        }
    }
    return invalidCards;
}

//Generate a nested array of invalid card companies
const idInvalidCardCompanies = invalidCards => {
    let invalidComs = [];
    for (let i = 0; i < invalidCards.length; i++) {
        if (invalidCards[i][0] === 3) {
            if (invalidComs.includes('Amex') === false) {
                invalidComs.push('Amex');
            }
        } else if (invalidCards[i][0] === 4) {
            if (invalidComs.includes('Visa') === false) {
                invalidComs.push('Visa');
            }
        } else if (invalidCards[i][0] === 5) {
            if (invalidComs.includes('Mastercard') === false) {
                invalidComs.push('Mastercard');
            }
        } else if (invalidCards[i][0] === 6) {
            if (invalidComs.includes('Discover') === false) {
                invalidComs.push('Discover');
            }
        } else {
            invalidComs.push('Company not found');
        }
    }
    return invalidComs;
}


//Additional function for convert the array of string to array of number
function convertToArray(arrayOfStr) {
    let newNestedArray = [];
    for (let i = 0; i < arrayOfStr.length; i++) {
        let subArray = [];
        for (let j = 0; j < arrayOfStr[i].length; j++) {
            subArray.push(Number(arrayOfStr[i][j]));
        }
        newNestedArray.push(subArray);
    }
    return newNestedArray;
}


//Convert invalid credit card numbers to valid card numbers function
function convertToValid(nestedOldNum) {
    let validNestedCards = [];
    for (let i = 0; i < nestedOldNum.length; i++) {
        let reverseNum = nestedOldNum[i].slice();
        reverseNum.pop();
        reverseNum.reverse();
        for (let j = 0; j < reverseNum.length; j++) {
            if (j % 2 === 0) {
                reverseNum[j] = reverseNum[j] * 2;
                if (reverseNum[j] > 9) {
                    reverseNum[j] = reverseNum[j] - 9;
                }
            }
        }           
        let checkNum = (10 - (reverseNum.reduce((accumulator, currentValue) => accumulator + currentValue) % 10)) % 10;
        nestedOldNum[i][nestedOldNum[i].length - 1] = checkNum;
        validNestedCards.push(nestedOldNum[i]);
    }
    return validNestedCards;    
};  


//All log for testing program
//console.log(idInvalidCardCompanies(findInvalidCards(convertToArray(batchStr))));
console.log(idInvalidCardCompanies(findInvalidCards(batch)));
//console.log(findInvalidCards(convertToArray(batch)));
//console.log(validateCred(convertToArray(batch)[0]));
//console.log(convertToArray(batch));
//console.log(convertToValid(findInvalidCards(convertToArray(batch))));
