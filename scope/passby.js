const user1 = {
  firstName: "Alice",
  id: 1,
};

function modifyUser(userObj) {
  userObj.firstName = "Bob";
}

modifyUser(user1);

console.log(user1.firstName);
