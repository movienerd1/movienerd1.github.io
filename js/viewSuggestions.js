const publicSuggestions = [];
const privateSuggestions = [];
var displayArea;
var deleteButton;

window.addEventListener('load', () => {
    displayArea = document.getElementById("displayArea");
    deleteButton = document.getElementById("deleteButton");
    if (usersData[loggedUser].mod == true) {
        deleteButton.style.visibility = 'hidden';
    } else {
        deleteButton.style.visibility = 'visible';
    }
    sortSuggestions();
    viewSuggestions("public");
});


function sortSuggestions() {
    for(var n = 0;n < suggestions.length;n++) {
        if (suggestions[n].public == true) {
            publicSuggestions.push(suggestions[n])
        } else {
            privateSuggestions.push(suggestions[n])
        }
    }
}

function viewSuggestions(visiblility) {
    var public;
    var text = "";
    if (visiblility == "public") {
        public = true;
    } else if (visiblility == "private") {
        public = false;
    }
    if(public == true) {
        for(var n = 0;n < publicSuggestions.length;n++) {
            text += (n + 1) + ". " + publicSuggestions[n].title + " - " + publicSuggestions[n].text + " - " + publicSuggestions[n].response + "<br>";
        }
    } else {
        for(var n = 0;n < privateSuggestions.length;n++) {
            text += (n + 1) + ". " + privateSuggestions[n].title + " - " + privateSuggestions[n].text + privateSuggestions[n].response + "<br>";
        }
    }
    displayArea.innerHTML = text;
} // This part to be replaced with HTML code to display the suggestions, just using console.log for now since its quick.

function deleteSuggestions() {
    var choice = prompt("Would you like to delete public or private suggestions? (Enter 'public' or 'private')");
    var public;
    if (choice.toLowerCase() == "public") {
        public = true;
    } else if (choice.toLowerCase() == "private") {
        public = false;
    } else {
        alert("Invalid choice, please enter 'public' or 'private'");
        return;
    }

    var suggestionChoice = prompt("Which suggestion would you like to delete? (Enter the number)");
    if (suggestionChoice > 0 && suggestionChoice <= (public ? publicSuggestions.length : privateSuggestions.length)) {
        suggestionChoice = parseInt(suggestionChoice);
    } else {
        alert("Invalid choice, please enter a valid number");
        return;
    }
    var suggestionChoice = suggestionChoice - 1; // Adjust for zero-based index

    if (public) {
        publicSuggestions.splice(suggestionChoice, 1);
        alert("Public suggestion deleted!");
    } else {
        privateSuggestions.splice(suggestionChoice, 1);
        alert("Private suggestion deleted!");
    }
    viewSuggestions(choice);
    upload(privateSuggestions.concat(publicSuggestions)); // Uploads the updated suggestions array to local storage

}





