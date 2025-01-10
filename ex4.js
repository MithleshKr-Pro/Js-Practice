// write a javaScript Program to get the Current date.
// Expectd Output :
// mm-dd-yyyy or mm/dd/yyyy or dd-mm-yyyy or dd/mm/yyyy
var currDate = new Date();
var year = currDate.getFullYear();
var month = currDate.getMonth() + 1;
var date = currDate.getDate();
console.log(`${year}-${month}-${date}`);
console.log(`${year}/${month}/${date}`);
console.log(`${month}-${date}-${year}`);
console.log(`${month}/${date}/${year}`);


//Another Method
var currDate=new Date;
var date=currDate.toISOString().split('T')[0];           
//new Date() creates a Date object with the current date and time.
// toISOString() converts the date to an ISO-formatted string.
// split('T') separates the date and time parts of the string.
// [0] extracts just the date portion.
var Time=currDate.toISOString().split()[1];
console.log(currDate);
console.log(date);
console.log(Time);  