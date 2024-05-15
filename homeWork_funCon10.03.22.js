//1
function bigger(num1, num2) {
    if (num1 > num2)
        return num1;
    else
        return num2;
}

console.log(bigger(7, 9));//9

//2
function equ(num1, num2) {
    if (num1 == num2) {
        num1++;
        return num1;
    }
}

console.log(equ(3, 3));//4

//3
function smallest(num1, num2, num3, num4) {
    if (num1 >= 1 && num1 <= 5 || num2 >= 1 && num2 <= 5 || num3 >= 1 && num3 <= 5 || num4 >= 1 && num4 <= 5)
        return -1;
    else
        return Math.min(num1, num2, num3, num4)
}

console.log(smallest(8, 7, 10, 6));//6
console.log(smallest(8, 2, 10, 6));//-1

//4
function even(num) {
    return num % 2 == 0 ? "even" : "not even";
}

console.log(even(4));//even

//5
function allEq(num1, num2, num3, num4) {
    if (num1 == num2 == num3 == num4)
        return "all equal";
    else if (num1 == num2 || num1 == num3 || num1 == num4)
        return "only 2 are equal";
    else if (num2 == num3 || num2 == num4)
        return "only 2 are equal";
    else if (num3 == num4)
        return "only 2 are equal";
    else
        return "all not equal"
}

console.log(allEq(1, 1, 1, 1));//all equal
console.log(allEq(1, 3, 1, 4));//only 2 are equal
console.log(allEq(1, 2, 3, 4));//all not equal

//6
function day(day) {
    if (day < 1 || day > 7)
        return "Error";
    else if (day == 1)
        return "Sunday";
    else if (day == 2)
        return "Monday";
    else if (day == 3)
        return "Tuseday";
    else if (day == 4)
        return "Wednesday";
    else if (day == 5)
        return "Thursday";
    else if (day == 6)
        return "Friday";
    else if (day == 7)
        return "Saturday";
}

console.log(day(6));//Friday

//7
function daysInMonth(month) {
    if(month<1||month>12)
    return -1;
    if(month==1||month==3||month==5||month==7||month==8||month==10||month==12)
       return 31;
    if(month==2)
    return 28;
    if(month==4||month==6||month==9||month==11)
    return 30;   
}

console.log(daysInMonth(10));//31

var x=5;
function global() {
    x=8;
    console.log(x);
}

global();//8

var y=20;
function local() {
    var y=5;
    console.log(y);
}

local();//5