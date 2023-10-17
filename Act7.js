// prompt for user input
var inputpass = prompt("enter password");
//variable for password & store "p@ssw0rd@2023"
const password = "p@ssw0rd@2023";

//If password length is greater or equal to 8 and password includes "p@ssword2023"
if (inputpass.length >= 8 || inputpass.includes("p@ssw0rd@2023")) {

  console.log("Valid password");

} 

else {

  console.log("Invalid password");
}