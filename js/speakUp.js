var User = []; // Array to hold all user accounts
var current;
var sav;

function Authentication(){
  var logreg;
  var button = document.createElement("button");
  var button2 = document.createElement("button");
  var message = document.getElementById("message");
  if (localStorage.getItem("User") == null)
// Checks if there is any saved data for the Users array, if not, it will create a new moderator account with the username "Mod" and the password "mod"
{ 
    //Creates a new array with the length of one.
    
} else
{
    User = usersData;
    // if there is saved data for Users, then it will get the item from local storage
}
  // Removes existing buttons when the user returns to the Authentication prompt to ensure there are not more buttons than necessary
  while (document.getElementById("button-container").firstChild){
    document.getElementById("button-container").removeChild(document.getElementById("button-container").firstChild);
  }
    while (document.getElementById("button-two").firstChild){
    document.getElementById("button-two").removeChild(document.getElementById("button-two").firstChild);
  }
  message.textContent = "";
  // Keep asking until user inputs "login" or "register"
  while (logreg != "login" && logreg != "register" && logreg != "log in" && logreg != "create account" && logreg != "create"){
    logreg = prompt("Log in or Register?");
    if (logreg) {
      logreg = logreg.toLowerCase();
    }
  }
  // Sets up button 2 to act as the back button if the user wants to return to the authentication module
  button2.textContent = "Back";
  button2.addEventListener("click", Authentication);
  document.getElementById("button-two").appendChild(button2);
  // Sets button one to call either the login or register functions depending on what the user input
  if (logreg == "login" || logreg == "log in"){
    button.textContent = "Log in";
    button.addEventListener("click", logIn);
    document.getElementById("button-container").appendChild(button);
  } else if (logreg == "register" || logreg == "create account" || logreg == "create"){
    button.textContent = "Register";
    button.addEventListener("click", register);
    document.getElementById("button-container").appendChild(button);
  }
}
function redirectTo(location){
  window.location.href = location;
}

// Register function used for creating new accounts. Runs when the user clicks the Register button
function register() {
  // Gets the values which the user input in the username and password boxes.
  var username = document.getElementById("usernameInput").value.toLowerCase();
  var password = document.getElementById("passwordInput").value;
  var message = document.getElementById("message");
  // valid variable used to check if the user input correct information. If valid is equal to 0, the code to create an account will not be run.
  var valid = 1;
  // Ensures user input both a password and username
  if (username === "" || password === "") {
    message.style.color = "red";
    message.textContent = "Please enter username and password";
  // Ensures the username and password are longer than 3 characters
  }else if (username.length < 3 || password.length < 3) {
    message.style.color = "red";
    message.textContent = "Username and password must be greater than 3 characters";
  }else{    
    // Loops through every object in the User array to check if the username has already been taken.
    for (var i = 0; i < User.length; i++) {
      if (User[i].Username === username) {
        message.style.color = "red";
        message.textContent = "Username Already in use!";
        valid = 0;
      }
    }
    //If the entered username was not taken then it will run this code to create the account  
    if (valid == 1){
      // Inserts the new account into the last position in the User array. Mod variable is used to check if the user is a moderator, and suggestions is used to contain this user's suggestions
      User.push(new UserAccount(username, password, false, []));
      localStorage.setItem("User", JSON.stringify(User)); // Saves the User array to local storage
      // Alerts the user that the account was created
      message.style.color = "green";
      message.textContent = "Account created successfully!";
      alert("Account Created"); 
      // Sets current variable to the user's position in the array
      current = User.length-1;
      localStorage.setItem("loggedInUser", parseInt(current)); // Saves the current user to local storage
      location.reload();
    }
  }
}

// Log in function used for logging into existing accounts. Runs when user clicks log in button
function logIn() {
  // gets the input password username and finds the message
  var username = document.getElementById("usernameInput").value;
  var password = document.getElementById("passwordInput").value;
  var message = document.getElementById("message");
  // Sets the valid variable to 0. This variable is used to check if the user was able to log in and avoid displaying the incorrect username or password message when returning to this function.
  var valid = 0;
  // Loops through all the user objects in the user array
  for (var i = 0; i < User.length; i++) {
    // Compares the saved username and password in the user object to the input strings
    if (User[i].Username === username && User[i].password === password) {
      alert("Login successful!");
      //Sets current to the user objects position in the user array and sets valid to 0 so the incorrect username or password message will not be displayed when returning to the function later
      current = i;
      valid = 1;
      localStorage.setItem("loggedInUser", parseInt(current)); // Saves the current user to local storage
      redirectTo("dashboard.html"); // Redirects the user to the dashboard page
    }
  }
  // Checks to see if no users objects were found with the same username and password as the one input by the user
  if (valid == '0') {
    message.style.color = "red";
    message.textContent = "Incorrect username or password.";
  }
}

Authentication();