// Classes
class Suggestion {
    constructor(Title, Text, Public, Response, Creator) { 
        this.title = Title;
        this.text = Text;
        this.public = Public;
        this.response = Response;
        this.creator = Creator;
    }
}

class UserAccount {
    constructor(Username, password, Mod, Suggestion) {
        this.Username = Username;
        this.password = password;
        this.Mod = Mod; 
        this.Suggestion = Suggestion;
    }
}

// Arrays
var loggedUser = localStorage.getItem("loggedInUser"); // Gets the current logged in user from local storage
var usersData = [
    new UserAccount("Mod", "mod", true, [])
] 

if (JSON.parse(localStorage.getItem("User")).length <= 1) {

} else {
    usersData = JSON.parse(localStorage.getItem("User")); // Gets the user data from local storage
}

var suggestions = [
    new Suggestion("Hiroki Tunn", "Please remove Hiroki Tunn From The Premises, He keeps creeping around the toilets!", true, "Hiroki Tunn will be removed."),
    new Suggestion("School Lunches", "The school lunches are terrible, please improve them!", true, "The school lunches will be improved."),
    new Suggestion("Toilets", "The toilets are filthy!", false, "They will be cleaned"),
    new Suggestion("More Sports", "Can we have more sports activities?", true, "More sports activities will be added."),
    new Suggestion("Longer Breaks", "Can we have longer breaks?", false, "Breaks will be extended by 5 minutes."),
    new Suggestion("More Clubs", "Can we have more clubs?", true, "More clubs will be added."),
    new Suggestion("Better Teachers", "Can we have better teachers?", false, "We will hire better teachers."),
    new Suggestion("More Homework", "Can we have more homework?", true, "More homework will be assigned."),
    new Suggestion("Less Homework", "Can we have less homework?", false, "Less homework will be assigned."),
    new Suggestion("Longer Holidays", "Can we have longer holidays?", true, "Holidays will be extended by 2 days."),
    new Suggestion("Shorter Holidays", "Can we have shorter holidays?", false, "Holidays will be shortened by 2 days."),
    new Suggestion("More Field Trips", "Can we have more field trips?", true, "More field trips will be organized."),
    new Suggestion("Better Facilities", "Can we have better facilities?", false, "Facilities will be improved."),
    new Suggestion("More Extracurriculars", "Can we have more extracurricular activities?", true, "More extracurricular activities will be added.")
]

if (download() != null) {
    suggestions = download(); // If there are suggestions in local storage, get them.
}

upload()

// Functions
function redirectTo(location) { // Function to redirect to a specific location.
    window.location.href = location; // Changes the current page to the specified location. Format is redirectTo('location.html'). If you want to redirect to a page outside of the current folder, it would look like this: redirectTo('../location.html').
}

function upload(suggestions) {
    localStorage.setItem("suggestions", JSON.stringify(suggestions)); // Uploads the suggestions array to local storage
}

function download() {
    const suggestions = JSON.parse(localStorage.getItem("suggestions")); // Downloads the suggestions array from local storage
    return suggestions; // Returns the suggestions array
}


console.log("a")
