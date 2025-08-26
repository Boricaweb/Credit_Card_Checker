// All valid credit card numbers
const valid1 = '4539677908016808'
const valid2 = '5535766768751439'
const valid3 = '371612019985236'
const valid4 = '6011144340682905'
const valid5 = '4539404967869666'

// All invalid credit card numbers
const invalid1 = '4532778771091795'
const invalid2 = '5795593392134643'
const invalid3 = '375796084459914'
const invalid4 = '6011127961777935'
const invalid5 = '5382019772883854'

// Can be either valid or invalid
const mystery1 = '344801968305414'
const mystery2 = '5466100861620239'
const mystery3 = '6011377020962656203'
const mystery4 = '4929877169217093'
const mystery5 = '4913540463072523'

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
//Check inlavaid card numbers
const validateCred = cardNum => {
    if (Array.isArray(cardNum)) {
        const elementType = cardNum.every(element => typeof element === 'number');
        if (elementType) {
            cardNum.pop();
            let reverseNum = cardNum.reverse();
            for (let i = 0; i < reverseNum.length; i++) {
                if (i % 2 === 0) {
                    reverseNum[i] = reverseNum[i] * 2;
                    if (reverseNum[i] > 9) {
                        reverseNum[i] = reverseNum[i] - 9;
                    }
                }
            }
            const checkNum = reverseNum.reduce((accumulator, currentValue) => accumulator + currentValue) % 10;
            if (checkNum === 0) {
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
//console.log(idInvalidCardCompanies(findInvalidCards(batch)));


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
//console.log(convertToArray(batch));


//Final log after adding additional function
console.log(idInvalidCardCompanies(findInvalidCards(convertToArray(batch))));
