var user = {};

user.name = "John";
user.surname = "Mike";
user.name = "Peter";
delete user.name;

console.log(user);

var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};
// write your code here...
var totalFruits = 0;
for (key in fruit){
    totalFruits = totalFruits + fruit[key];
}

console.log(totalFruits);