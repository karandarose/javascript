// const currentLight = "green";

// if (currentLight === "red") {
//   console.log("Stop");
// }
// if (currentLight === "yellow") {
//   console.log("Proceed with caution");
// }
// if (currentLight === "green") {
//   console.log("Go");
// }

// const username = "admin";
// const password = "secrett";

// if (username === "admin" && password === "secret") {
//   console.log("Login successful. Welcome admin");
// } else if (username === "admin" && password !== "secret") {
//   console.log("Password incorrect");
// } else {
//   console.log("Login failed. Incorrect credentials.");
// }

userRole = " ";

const userAuth =
  userRole === "admin"
    ? "Full access granted. Welcome, Admin!"
    : userRole === "user"
    ? "Limited access granted. Welcome, User"
    : "Access denied. Unknown user role.";
console.log(userAuth);
