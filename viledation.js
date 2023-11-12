// 1.PQuestion
// var stringTape = 'hi';
// let SaKhy  = true;
// const TarPrice = 1200000000;
// 2.PQuestion
// const habana = 20;
// let hobo = 20;

// hobo = habana+hobo;
// console.log(hobo);

// 3.PQuestion
// let fNumber = 20;
// let sNumber = 40;

// const totalNumber = fNumber+sNumber;
// console.log(totalNumber);
// const deferentNumbers = sNumber-fNumber;
// console.log(deferentNumbers);
// const deviateNumber = sNumber/fNumber;
// console.log(deviateNumber);
// const multiplyNumber = sNumber*fNumber;
// console.log(multiplyNumber);
// const vagSasNumber = sNumber%fNumber;
// console.log(vagSasNumber);


// 4.PQuestion
// const number1 = 26;
// const number2 = 28;
// const number3 = 10;
// const number4 = 5;
// const number5 = 5;
// if(number2>number1){
//     console.log('hoba');
// }
// if(number1<number2){
//     console.log('hoba');
// }
// if(number4 == number5){
//     console.log('hoba');
// }
// if(number3!= number1){
//     console.log('thik');
// }

// if(number3>=number4){
//     console.log('hoba');
// }
// if(number4<=number5){
//     console.log('thik');
// }

// 5.PQuestion

// const number1 = 20;
// const number2 = 30;
// if(number1<number2 && number2-number1 === 10){
//     console.log(true);
// }
// if(number1<number2|| number2-number1 === 20){
//     console.log(true);
// }

// 6.PQuestion

// const number1 = 12;
// const number2 = 24;
// if(number1===number2){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// 7.PQuestion
// let start = 7;
// let end = 19;

// while (start <= end) {
//     if (start % 2 !== 0) {
//         console.log(start);
//     }
//     start++;
// }

// 8.PQuestion
// function manipulateArray(arr) {
//     let numberOfElements = arr.length;
//     arr[3] = "New Element";
//     arr.push("New Element 1", "New Element 2");
//     let removedElement = arr.pop();

//     return {
//         numberOfElements: numberOfElements,
//         modifiedArray: arr,
//         removedElement: removedElement
//     };
// }

// let demoArray = [1, 2, 3, 4, 5];
// let result = manipulateArray(demoArray);
// console.log(result);
// 9.PQuestion
// let array = [ 12, 24, 32, 25, 30, 34, 36, 40, 45];
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);
// }

// let myArray = [1, 2, 3, 4, 5];

// for (let element of myArray) {
//     console.log(element);
// }

// 10.PQuestion

// let myArray = [19, 25, 35, 48, 56, 80, 82, 86, 89,95, 99,1010];

// for (let element of myArray) {
//     if(element>80){
//         console.log(element);
//     }
// }

// 11.PQuestion

// function calculateProduct(num1, num2, num3) {
//     let result = num1 * num2 * num3;
//     return result;
// }

// let number1 = 2;
// let number2 = 3;
// let number3 = 4;

// let product = calculateProduct(number1, number2, number3);
// console.log("গুণফল:", product);

// 12.PQuestion
// let myObject = {
//     property1: "Value 1",
//     property2: "Value 2",
//     property3: "Value 3"
// };

// myObject.property2 = "New Value";

// console.log(myObject);



// 1.morePQuestion

// function feetToInch(feet) {
//     let inch = feet * 12;
//     return inch;
// }

// let feetValue = 5;
// let inchValue = feetToInch(feetValue);

// console.log(inchValue);


// 2.morePQuestion

// function centimeterToMeter(centimeter) {
//     let meter = centimeter / 100;
//     return meter;
// }

// let centimeterValue = 10000;
// let meterValue = centimeterToMeter(centimeterValue);

// console.log(meterValue);


// 3.morePQuestion
// function paperRequirements(firstBook, secondBook, thirdBook) {
//     let totalPages = (firstBook * 100) + (secondBook * 200) + (thirdBook * 300);
//     return totalPages;
// }

// let firstBookCopies = 2;
// let secondBookCopies = 3;
// let thirdBookCopies = 1;

// let totalRequiredPages = paperRequirements(firstBookCopies, secondBookCopies, thirdBookCopies);

// console.log(totalRequiredPages);

// 4.morePQuestion


// function bestFriend(friends) {
//     let bestFriendName = friends[0]; // প্রথম ফ্রেন্ড নাম ধরলাম
//     for (let i = 1; i < friends.length; i++) {
//         if (friends[i].length > bestFriendName.length) {
//             bestFriendName = friends[i];
//         }
//     }
//     return bestFriendName;
// }

// // ফাংশনকে কল করে দেখানো হচ্ছে
// let myFriends = ["John", "Jane", "Michael", "Emma"];

// let bestFriendName = bestFriend(myFriends);

// console.log('Big friend is :', bestFriendName);


// 5.morePQuestion

function positiveNumbers(arr) {
    let positiveArr = [];
    let positiveCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            positiveArr.push(arr[i]);
            positiveCount++;
        } else {
            break;
        }
    }

    return {
        positiveNumbers: positiveArr,
        positiveCount: positiveCount
    };
}

// ফাংশনকে কল করে দেখানো হচ্ছে
let numbers = [5, 10, 15, 20, -2, 30, 40, -5, 50];
let result = positiveNumbers(numbers);

console.log("positiveNumber  :", result.positiveNumbers);
console.log("numberOfPositiveNumber:", result.positiveCount);