//[] במחרוזת מחזיר undifined
//charAt מחזיר מחרוזת ריקה

//error
function num() {
    var rand =Math.floor(Math.random()*5);
    if (rand<3)
    throw new Error("invalid number: "+rand);
    console.log(rand);
}

//num();//Error: invalid number: 2

function num1() {//handling
    var rand =Math.floor(Math.random()*5);
    if (rand<3)
    throw new Error("invalid number: "+rand);
    console.log(rand);
}
// try {
//     num1();
// } catch (error) {
//     console.log("error with mess: "+error.message);//error with mess: invalid number: 0
// }

//ex
function chkLowEmail(email) {
    if(email!=email.toLowerCase())
    throw new Error("email isnt valid "+email);

    console.log("valid email");
}

try {
    var em="Aviaorg@gmail.com";
    chkLowEmail(em);
} catch (error) {
    console.log(error.message);
    chkLowEmail(em.toLocaleLowerCase());
}
// email isnt valid
// valid email

//error function
var printAge = (age)=> {
    console.log(age);
}

printAge(25);//25