let user = {};
user.name = "John";
user.surname = "Smith";

user["name"] = "Pete";
user.name = "Hercules";
delete user.name;
console.log(user.name, user.surname);
