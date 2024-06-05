var date = new Date();
console.log(date);//2024-05-23T23:28:32.737Z
console.log(date.getFullYear());//2024
console.log(date.getMonth());//4 חודשים סופר מאפס
console.log(date.getDate());//24
console.log(date.getHours());//2
//ההדפסה לפי זמן מקומי ולא היו טי סי

//אבן 0 נייר 1 מספריים 2
var rand1 = Math.floor(Math.random() * 3)
console.log(rand1);
var rand2 = Math.floor(Math.random() * 3)
console.log(rand2);

if (rand1 == 0 && rand2 == 0 || rand1 == 1 && rand2 == 1 || rand1 == 2 && rand2 == 2)
    console.log("tie");
else if (rand1 == 0 && rand2 == 1)
    console.log("player 2 won")
else if (rand1 == 0 && rand2 == 2)
    console.log("player 1 won")
else if (rand1 == 0 && rand2 == 0)
    console.log("player 1 won")
else if (rand1 == 1 && rand2 == 2)
    console.log("player 2 won")
else if (rand1 == 2 && rand2 == 0)
    console.log("player 2 won")
else if (rand1 == 2 && rand2 == 1)
    console.log("player 1 won")
// 2
// 0
// player 2 won

//cls ex
function printMonth(currDate) {
    //או לעשות מערך חודשים ולהחזיר מערך במקום הdate.getMonth
    switch (currDate.getMonth()) {
        case 00:
            console.log("ינואר");
            break;
        case 01:
            console.log("פברואר");
            break;
        case 02:
            console.log("מרץ");
            break;
        case 03:
            console.log("אפריל");
            break;
        case 04:
            console.log("מאי");
            break;
        case 05:
            console.log("יוני");
            break;
        case 06:
            console.log("יולי");
            break;
        case 07:
            console.log("אוגוסט");
            break;
        case 08:
            console.log("ספטמבר");
            break;
        case 09:
            console.log("אוטובר");
            break;
        case 10:
            console.log("נובמבר");
            break;
        case 11:
            console.log("דצמבר");
            break;
        default:
            console.log("mistake month");
            break;
    }
}

var date = new Date();
//console.log(date);//2024-05-24T14:30:48.348Z
printMonth(date);//מאי

function chkRand() {
    var r = Math.floor(Math.random() * 10) + 1;//לא נעשה עם ceil כי אם יצא אפס העיגול מעלה עדדין אפס ותיתיאפס התוצאה
    console.log(r);//7
    if (r >= 5)
        return r * 2;
    return r;
}

console.log(chkRand());//14

function chkSub(str1, str2) {
    if (str1.includes(str2) || str2.includes(str1))
        return true;
    return false;
}

console.log(chkSub("hello world","hello"));//true