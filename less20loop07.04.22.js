//הדפסה לפי כמות פעמים
function dup(str, num) {
    console.log(str.repeat(num));
}

dup("aaa ", 5)//aaa aaa aaa aaa aaa 

function print(element, index) {
    console.log(element);
}

["hi ", "hi ", "hi "].forEach(print);
// hi 
// hi
// hi

//for
function dupFor(str, num) {
    for (let i = 0; i < num; i++) //כשידוע לרוב מתי מסתיימת הלולאה
        console.log(str);
}

dupFor("ggg", 7)
// ggg
// ggg
// ggg
// ggg
// ggg
// ggg
// ggg

function printArr(strArr) {
    for (let i = strArr.length - 1; i >= 0; i--)
        console.log(strArr[i]);
}

printArr(["orange", "apple", "banana", "melon"])
// melon
// banana
// apple
// orange

//פונקציה שמדפיסה מערך הפוך בforeach
function printRev(element, index) {
    console.log(array[array.length - 1 - index]);
}
var array = [1, 2, 3, 4, 5];
array.forEach(printRev)// Output: 5 4 3 2 1

console.log("======2=========");
function addElementToBackwardArr(element, index) {
    backArr[array.length - 1 - index] = element;
}

// דוגמה לשימוש
var backArr = []
array.forEach(addElementToBackwardArr)// Output: 5 4 3 2 1
console.log(backArr);

//while
function printArr(arr) {
    var i = 0;
    while (i < arr.length) {
        console.log(arr[i]);
        i++;
    }
}

var ar = [4, 5, 6]
printArr(ar)
// 4
// 5
// 6