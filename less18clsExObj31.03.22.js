var favCar = {
    //property
    manifacture: "mazda",
    yearOfProd: 2006,
    model: "cx-5", 
    licenseNumber: "77-87",//אם זה היה כמספר הוא מוריד אפסים מההתחלה
    kilometraz: 6
}

console.log(favCar);
// {
//     manifacture: 'mazda',
//     yearOfProd: 2006,
//     model: 'cx-5',
//     licenseNumber: '77-87',
//     kilometraz: 6
//   }


//הוספה או עדכון
favCar.city="net"
favCar["phone"]="000"
console.log(favCar);
// {
//     manifacture: 'mazda',
//     yearOfProd: 2006,
//     model: 'cx-5',
//     licenseNumber: '77-87',
//     kilometraz: 6,
//     city: 'net',
//     phone: '000'
//   }

var item = {
    //property
    name: "ball",
    size: "m",
    price: 4.4, 
    amount: 10
}
console.log(item.name);
console.log(item.size);
console.log(item.price);
console.log(item.amount);

item.color="red";
console.log(item);
item["amount"]=15;
delete item.size;
console.log(item);
// ball
// 5
// 4.4
// 10
// { name: 'ball', size: 5, price: 4.4, amount: 10, color: 'red' }
// { name: 'ball', price: 4.4, amount: 15, color: 'red' }

var student = {
    firatName: "hodaya",
    lastName: "co",
    country: {
        countryName: "israel",
        amountOfPeople: 9000000,
        continent: "asia"
    }
}

console.log(student.firatName);
console.log(student.lastName);
console.log(student.country.countryName);
console.log(student.country.amountOfPeople);
console.log(student.country.continent);
// hodaya
// co
// israel
// 9000000
// asia
