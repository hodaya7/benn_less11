//12 בוצע בשיעור 20
//11 בוצע בשיעורי בית של שיעור 20
//14 לא חובה


//עבודה לפסח- פור

//1
for (let i = 12; i < 25; i++) {
    console.log(i);
}
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
// 21
// 22
// 23
// 24

//2
console.log("========2======");
for (let i = 7; i < 32; i += 2) {
    console.log(i);
}
// 7
// 9
// 11
// 13
// 15
// 17
// 19
// 21
// 23
// 25
// 27
// 29
// 31

//3
console.log("========3======");
for (let i = 10; i < 21; i += 2) {
    console.log(i);
}
// 10
// 12
// 14
// 16
// 18
// 20

//4
console.log("========4======");
for (let i = 1; i < 46; i++) {
    if (i % 3 == 0 && i % 5 == 0)
        console.log("FizzBuzz " + i);
    else if (i % 3 == 0)
        console.log("Fizz " + i);
    else if (i % 5 == 0)
        console.log("Buzz " + i);
}
// Fizz
// Buzz
// Fizz
// Fizz
// Buzz
// Fizz
// FizzBuzz
// Fizz
// Buzz
// Fizz
// Fizz
// Buzz
// Fizz
// FizzBuzz
// Fizz 
// Buzz
// Fizz
// Fizz
// Buzz
// Fizz
// FizzBuzz

//5
console.log("========5=======");
function sum(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

var numbersArray = [1, 13, 22, 123, 49, 34, 5, 24, 27, 45]
console.log(sum(numbersArray));//343

//6
console.log("========6=======");
function delProp(arr, prop) {
    for (let i = 0; i < arr.length; i++) {
        delete arr[i][prop];
    }
}

function print(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let p in arr[i])
            console.log(arr[i][p]);
    }
}

var objArr = [
    {
        id: "123",
        firstName: "odel",
        lastName: "david",
        age: 20,
        country: "israel",
        city: "ofakim"
    },
    {
        id: "456",
        firstName: "noa",
        age: 25,
        country: "israel",
        city: "netanya"
    },
    {
        id: "789",
        firstName: "avia",
        lastName: "alon",
        age: 30,
        country: "israel",
        city: "hadera"
    },
    {
        id: "101112",
        firstName: "or",
        lastName: "cohen",
        age: 28,
        country: "usa",
        city: "new york"
    }
]

delProp(objArr, "lastName");
print(objArr)
// 123
// odel
// 20
// israel
// ofakim
// 456
// noa
// 25
// israel
// netanya
// 789
// avia
// 30
// israel
// hadera
// 101112
// or
// 28
// usa
// 101112
// or
// 28
// usa
// new york

//7
console.log("========7=======");
function printCat(arrAn) {
    for (let i = 0; i < arrAn.length; i++) {
        if (arrAn[i].animalType == "cat")
            console.log(arrAn[i]);

    }
}
function printDog(arrAn) {
    for (let i = 0; i < arrAn.length; i++) {
        if (arrAn[i].animalType == "dog")
            console.log(arrAn[i]);

    }
}

var arrAnim = [{
    animalType: "cat",
    names: [
        "Meowzer",
        "Fluffy",
        "Kit-Cat"
    ]
},
{
    animalType: "dog",
    names: [
        "Spot",
        "Bowser",
        "Frankie"
    ]
}
];

printCat(arrAnim)//{ animalType: 'cat', names: [ 'Meowzer', 'Fluffy', 'Kit-Cat' ] }
printDog(arrAnim)//{ animalType: 'dog', names: [ 'Spot', 'Bowser', 'Frankie' ] }

//8
console.log("========8=======");
function printStu(stu) {
    for (let prop in stu)
        console.log(stu[prop]);
}

const student = {
    name: "John",
    age: 20,
    hobbies: ["reading", "games", "coding"]
}
function addHobby(obj, hobby) {
    obj.hobbies[obj.hobbies.length] = hobby;
}
function deleteHobby(obj, hobby) {
    for (let i = 0; i < obj.hobbies.length; i++) {
        if (obj.hobbies[i] == hobby)
            delete obj.hobbies[i];
    }
}
printStu(student);
// John
// 20
// [ 'reading', 'games', 'coding' ]
addHobby(student, "swiming");
printStu(student);
// John
// 20
// [ 'reading', 'games', 'coding', 'swiming' ]
deleteHobby(student, "games");
printStu(student);
// John
// 20
// [ 'reading', <1 empty item>, 'coding', 'swiming' ]
student.family_name = "or"
printStu(student);
// John
// 20
// [ 'reading', <1 empty item>, 'coding', 'swiming' ]
// or

//9
console.log("========9=======");
function printEle(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            console.log(matrix[i][j]);
        }
    }
}

var arr = [
    [1, 2],
    [3, 4],
    [5, 6]
];

printEle(arr);
// 1
// 2
// 3
// 4
// 5
// 6

//10
console.log("========10=======");
function cntZero(matrix) {
    var cnt = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 0)
                cnt++;
        }
    }
    return cnt;
}
var arr = [[0, 1, 1], [0, 1, 0], [1, 0, 0]];
console.log(cntZero(arr));//5

//11
//בדיקת כפילויות עם מערך מונים
console.log("========11=======");
function findDup(strArr) {
    var counts = []
    //אם לא קיים תאתחל באחד , אם קיים תעלה אותו
    for (let i = 0; i < strArr.length; i++) {
        if (counts[strArr[i]] == null)
            counts[strArr[i]] = 1;
        else
            counts[strArr[i]]++;
    }
    //console.log(counts);
    var resArr = [];
    for (let i = 0; i < counts.length; i++) {
        if (counts[i] > 1)
            resArr.push(i);
    }
    return resArr;
}

console.log(findDup([4, 2, 34, 4, 1, 12, 1, 4]));//[ 1, 4 ]

//12
console.log("========12=======");
function revArr(arr) {
    var revArr = [];
    for (let i = 0; i < arr.length; i++) {
        revArr[arr.length - 1 - i] = arr[i];
    }
    return revArr;
}

console.log(revArr([43, "what", 9, true, "cannot", false, "be", 3, true]));
// [
//     true,     3,
//     'be',     false,
//     'cannot', true,
//     9,        'what',
//     43
//   ]

//13
console.log("========13=======");
function sumTwoArr(arr1, arr2) {
    var sumArr = [];
    for (let i = 0; i < arr1.length; i++) {
        sumArr[i] = arr1[i] + arr2[i];
    }
    return sumArr;
}
var arr_1 = [4, 6, 7];
var arr_2 = [8, 1, 9];
console.log(sumTwoArr(arr_1, arr_2));//[ 12, 7, 16 ]

//14
console.log("========14=======");
function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[str.length - 1 - i])
            return false;
    }
    return true;
}

console.log(isPalindrome("racecar"));//true

//while
//15
console.log("========15=======");
let counter = 1;
while (counter < 100) {
    //console.log(counter);
    counter *= 2;
}

//16
console.log("========16=======");
let counter1 = 900000;
while (counter1 >= 50) {
    //console.log(counter1);
    counter1 /= 2;
}

//17
console.log("========17=======");
let names = ["Chris", "Kevin", "Naveed", "Pete", "Victor"];
let copiedNames = [];
let index = 0;

while (index < names.length) {
    copiedNames[index] = names[index];
    index++;
}
//console.log(copiedNames);

//18
console.log("========18=======");
function copyWithwoutPete(arrNames) {
    let copiedNames = [];
    let index = 0;

    while (index < arrNames.length) {
        if(arrNames[index]=="Pete")
        break;
        copiedNames[index] = arrNames[index];
        index++;
    }
    return copiedNames;
}

let names1 = ["Chris", "Kevin", "Naveed", "Pete", "Victor"];
console.log(copyWithwoutPete(names1));//[ 'Chris', 'Kevin', 'Naveed' ]

//19
console.log("========19=======");
function chkEq(arr) {
    for (let i = 0; i < arr.length-1; i++) {
       if(arr[i]==arr[i+1])
       return i+1;
    }
    return -1;
}
console.log(chkEq([true, false, false, true, true, false]));//2
console.log(chkEq([true, false, true, false, true, true]));//5
console.log(chkEq([true, false, true, false, true, false]));//-1