//for
//1
function printNumber() {
    for (let i = 0; i < 10; i++)
        console.log(i + 1);
}

printNumber()
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

//2
function deleteElement(arr, number) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == number)
            delete arr[i];
    }
}

var arr = [25, 56, 4, 78, 5, 63, 45, 210, 56];
deleteElement(arr, 4);
console.log(arr);
// [ 25, 56, <1 empty item>, 78, 5, 63, 45, 210, 56 ]

//3
function oddEven(arr) {
    var ob = {
        oddsNum: 0,
        evensNum: 0
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0)
            ob.evensNum++;
        else
            ob.oddsNum++;
    }
    return ob;
}

console.log(oddEven([1, 2, 3, 4, 6]));//{ oddsNum: 2, evensNum: 3 }

//4
function printPyramid(num) {
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < i + 1; j++) {
            process.stdout.write("*");
        }
        console.log();
    }
}

printPyramid(5);
// *
// **
// ***
// ****
// *****

//5
//בודק כפילויות
//הכנסתי לאובייקט  מונים
function findDup(strArr) {
    var counts = {}
    // for (let i = 0; i < strArr.length; i++) {
    //     counts[strArr[i]] = 0;
    // }
    // for (let i = 0; i < strArr.length; i++) {
    //     counts[strArr[i]]++;
    // }

    //אם לא קיים תאתחל באחד , אם קיים תעלה אותו
    for (let i = 0; i < strArr.length; i++) {
        if (counts[strArr[i]] == null)
            counts[strArr[i]] = 1;
        else
            counts[strArr[i]]++;
    }
    //console.log(counts);
    var obj = {};
    for (let i in counts) {
        if (counts[i] > 1)
            obj[i] = counts[i];
    }
    return obj;
}

console.log(findDup([1, 2, 3, 2, 6, 5, 6, 6]));//{ '2': 2, '6': 3 }

//6
//א
for (let i = 0; i < 20; i++)
    console.log(i + 1);

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20    
console.log("===ב===");
for (let i = 3; i < 30; i += 2) {
    console.log(i);
}
// 3
// 5
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
console.log("===ג===");
for (let i = 20; i > 1; i -= 2) {
    console.log(i);
}
// ===ג===
// 20
// 18
// 16
// 14
// 12
// 10
// 8
// 6
// 4
// 2
console.log("===ד===");
for (let i = 48; i > 20; i -= 3) {
    console.log(i);
}
// ===ד===
// 48
// 45
// 42
// 39
// 36
// 33
// 30
// 27
// 24
// 21

//7
var l = "LaunchCode";
var arr = [1, 5, "LC101"];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// 1
// 5
// LC101
for (let i = l.length - 1; i >= 0; i--) {
    console.log(l[i]);
}
// e
// d
// o
// C
// h
// c
// n
// u
// a
// L

//while
//8
var i = 0;
while (i < 10) {
    console.log("Hello");
    i++;
}

// Hello
// Hello
// Hello
// Hello
// Hello
// Hello
// Hello
// Hello
// Hello
// Hello

//9
function sumNum(arr, num) {
    i = 0;
    var sum = 0;
    while (sum < num && i < arr.length) {
        sum += arr[i];
        i++;
    }
    return sum;
}

console.log(sumNum([1, 2, 3, 4], 5));//6
console.log(sumNum([1, 2, 3, 4], 20));//10
//10
function falseIndex(arr) {
    i = 0;
    while (i < arr.length) {
        if (!arr[i])
            return i;
        i++;
    }
    return -1;
}

console.log(falseIndex([true, true, false, false]));//2

//10
function isHello(arr) {
    i = 0;
    while (i < arr.length) {
        if (i % 2 != 0 && arr[i] == "Hello")
            return i;
        i++;
    }
    return -1;
}

console.log(isHello(["ok", "love", " Hello", "Hello"]));//3