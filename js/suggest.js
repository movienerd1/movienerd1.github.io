var n = 0;
var createdSuggestions = [];
var title;
var sugg;
var vis;

window.addEventListener('load', () => {
    title = document.getElementById("name");
    sugg = document.getElementById("suggestion");
    vis = document.getElementById("visibility");
    console.log(vis)
    
})

function Suggest()
{
    createdSuggestions[n] = new Suggestion();
    createdSuggestions[n].creator = usersData[loggedUser].Username
    createdSuggestions[n].title = title.value;
    createdSuggestions[n].text = sugg.value;

    if (vis.value == "public")
    {
        createdSuggestions[n].public = true;
    }
    else
    {
        createdSuggestions[n].public = false;
    }

    createdSuggestions[n].respone = "Not yet responded to";

    n++; // does the same as n = n + 1 but shorter

    console.log("TEST")

    upload(suggestions.concat(createdSuggestions));
}