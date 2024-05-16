function day(day) {
    switch (day) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuseday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("choose another num, " + day + " is not allowed");
            break;
    }
}
day(6);//Friday

//7
// חיבור, 2-חיסור, 3-חילוק, 4-הכפלה
function arithmatic(firstNum, secNum, action) {
    switch (action) {
        case 1:
        return firstNum+secNum;
        case 2:
            return firstNum-secNum;
            case 3:
        return firstNum/secNum;
        case 4:
        return firstNum*secNum;
        default:
            console.log("your num "+action+" isnt good, enter num between 1 to 4");
            return;
    }
}
console.log(arithmatic(4,5,4));