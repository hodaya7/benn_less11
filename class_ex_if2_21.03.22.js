const maxNumOfTables = 5;
const muxCusInATable = 4;

var currentNumOfTablesInRes = 3;
var currentAvailableNumberOfTables = 3;

function createTable() {
    currentNumOfTablesInRes++;
    currentAvailableNumberOfTables++;
    console.log("new table number " + currentNumOfTablesInRes + " was created");;
}

function sitNewCus(numOfCustomers) {
    var nextFreeTableNunber = currentNumOfTablesInRes - currentAvailableNumberOfTables + 1;
    console.log(numOfCustomers + " customers successfuly entered and sit in table number " + nextFreeTableNunber);
    currentAvailableNumberOfTables--;
}
function hundleCus(numOfCustomers) {
    if (numOfCustomers <= muxCusInATable) {
        if (currentAvailableNumberOfTables > 0) {
            sitNewCus(numOfCustomers);
        }
        else {
            console.log("dont have available table, we will try to create");
            if (currentNumOfTablesInRes < maxNumOfTables) {
                createTable();
                sitNewCus(numOfCustomers);
            }
            else
                console.log("sorry we already have the max number of tables in the res");
        }
    }

    else
        console.log("sorry, the number of customers " + numOfCustomers + " is larger than table can hold");
}

hundleCus(2);
hundleCus(5);
hundleCus(3);
hundleCus(2);
hundleCus(6);
hundleCus(1);
hundleCus(4);
hundleCus(4);
// 2 customers successfuly entered and sit in table number 1
// the number of customers 5 is larger than table can hold
// 3 customers successfuly entered and sit in table number 2
// 2 customers successfuly entered and sit in table number 3
// the number of customers 6 is larger than table can hold
// dont have available table, we will try to create
// new table number 4 was created
// dont have available table, we will try to create
// new table number 5 was created
// 4 customers successfuly entered and sit in table number 5
// PS D:\ecom\benn_less11> node class_ex_if2_21.03.22.js
// 2 customers successfuly entered and sit in table number 1
// sorry, the number of customers 5 is larger than table can hold
// 3 customers successfuly entered and sit in table number 2
// 2 customers successfuly entered and sit in table number 3
// sorry, the number of customers 6 is larger than table can hold
// dont have available table, we will try to create
// new table number 4 was created
// 1 customers successfuly entered and sit in table number 4
// dont have available table, we will try to create
// new table number 5 was created
// 4 customers successfuly entered and sit in table number 5
// dont have available table, we will try to create
// sorry we already have the max number of tables in the res