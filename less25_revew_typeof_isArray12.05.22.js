//ex
function obgArr(obj) {
    var resArr = [];
    for (let prop in obj) {
        if (typeof obj[prop] === "object" && !Array.isArray(obj[prop]))//אפשר גם לבדוק שהוא לא מערך בנוסף
            resArr.push(obj[prop]);
    }
    return resArr;
}

var student = {
    name: "ben",
    age: 31,
    city: {
        name: "herzelia",
        amountOfPeople: 10000
    },
    course: {
        name: "fullstack",
        startDate: new Date(2022, 1, 1)
    }
}

console.log(obgArr(student));
// [
//     { name: 'herzelia', amountOfPeople: 10000 },
//     { name: 'fullstack', startDate: 2022 - 01 - 31T22: 00: 00.000Z }
// ]

function addNum(arr, target) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == target)
                throw new Error("the num " + target + " is already exsits")
        }
        arr.push(target)
}

var ar = [1, 2, 30];
try {//את הטראי נשים בקריאה לפונקציה
  addNum(ar, 2);  
} catch (error) {
    console.log("warning: " + error.message);
}

console.log(ar);
// warning: the num 2 is already exsits
// [ 1, 2, 30 ]