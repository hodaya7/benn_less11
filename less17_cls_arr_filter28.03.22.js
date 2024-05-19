function printGreating(element, insex) {
    console.log("thanks "+element);
}
var names=["ben","yossi","haim"];
names.forEach(printGreating)


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



