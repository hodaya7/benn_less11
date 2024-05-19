console.log("__________hw____________");

var strArr2=["aaaaa","ee","bbb","ccccccc","dd"]
delete strArr2[0];
console.log(strArr2);//[ <1 empty item>, 'ee', 'bbb', 'ccccccc', 'dd' ]
strArr2.sort();
console.log(strArr2);//[ 'bbb', 'ccccccc', 'dd', 'ee', <1 empty item> ]
strArr2.reverse()
console.log(strArr2);//[ <1 empty item>, 'ee', 'dd', 'ccccccc', 'bbb' ]

function print(element,index) {
    console.log("element: "+element+". index: "+index);
}
var intArr2=[10,20,30,40,50];
intArr2.forEach(print);
// element: 10. index: 0
// element: 20. index: 1
// element: 30. index: 2
// element: 40. index: 3
// element: 50. index: 4
function chkDivide(element,index) {
    return element%4==0//? true: false;
}
var resArr= intArr2.filter(chkDivide);
console.log(resArr); //[ 20, 40 ] 


const ages = [3, 10, 18, 20];
function checkAge(age) {
  return age > 18;
}

console.log(ages.findIndex(checkAge));//3