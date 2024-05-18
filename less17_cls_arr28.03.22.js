function inc(element,index) {//מונקציה שמקבלת 2 דברים ומבינים שזה לטיפול באיברי מערך
    // intArr[index]+=10;
     intArr[index]=element+10;
  }
  
  var intArr=[10,20,30,40,50];
  intArr.forEach(inc);
  console.log(intArr);//[ 20, 30, 40,50,60 ]

function chkLength(element,index) {
    return element.length>=5? true:false;
} 

var strArr=["aaaaa","bbb","ccccccc","dd"]
console.log(strArr.filter(chkLength));//[ 'aaaaa', 'ccccccc' ]

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


