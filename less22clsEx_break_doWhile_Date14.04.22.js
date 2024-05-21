//break, do while
function printAge(stuArr, fullName) {
    for (let i = 0; i < stuArr.length; i++) {
        if (stuArr[i].firstName + " " + stuArr[i].lastName == fullName) {
            console.log(stuArr[i].age);
            break;
        }
    }
}

var stArr = [
    {
        firstName: "mor",
        lastName: "azulay",
        age: 20
    },
    {
        firstName: "noa",
        lastName: "alon",
        age: 30
    },
    {
        firstName: "ori",
        lastName: "moshe",
        age: 25
    }
]

printAge(stArr, "noa alon")//30

//תרגיל להדפיס פרופרטי 2
function printSecond(obj) {
    for (let i = 0; i < obj.secondTable.length; i++) {
        for (let j = 0; j < obj.secondTable[0].length; j++) {
            console.log(obj.secondTable[i][j] + ", ");
        }
    }
}

var obj = {
    firstTable: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ],
    secondTable: [
        [7, 8, 9],
        [1, 2, 3],
        [4, 5, 6]
    ],
    thirdTable: [
        [4, 5, 6],
        [7, 8, 9],
        [1, 2, 3]
    ]
}

printSecond(obj)
// 7, 
// 8,
// 9,
// 1,
// 2,
// 3,
// 4,
// 5,
// 6,