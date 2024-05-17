var arr=["hodaya","chananel","elay","gad meir","adiel"];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

// hodaya
// chananel
// elay
// gad meir
// adiel

arr[5]="noam";
arr[2]="eli"

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);

//hodaya
// chananel
// eli
// gad meir
// adiel
// noam

console.log(arr.length);
arr.sort();
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);

function inc(element,index) {
  // intArr[index]+=10;
   intArr[index]=element+10;
}

intArr=[10,20,30];
intArr.forEach(inc);
console.log(intArr);//[ 20, 30, 40 ]

function rev(element,index) {
    //boolArr[index]=!boolArr[index];
    boolArr[index]=!element;
}
boolArr=[true,false,false,true,true]
boolArr.forEach(rev)
console.log(boolArr);//[ false, true, true, false, false ]