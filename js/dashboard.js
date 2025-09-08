function loadDash() { // Simply the function to load the dashboard, it checks the isMod variable to determine which dashboard to load. (isMod is located in app.js)
    if (usersData[loggedUser].Mod == true) { // If the user is a moderator, redirect to the mod dashboard.
        redirectTo('modDashboard.html') // The mod dashboard is located in html/modDashboard.html.
    } else { // If the user is not a moderator, redirect to the student dashboard.
        redirectTo('studentDashboard.html') // The student dashboard is located in html/studentDashboard.html.
    }
}

window.addEventListener('load', loadDash()); // This event listener will call the loadDash function when the page is loaded, redirecting the user to the appropriate dashboard based on their role.
