const forceUsers = new ForceUserServices('http://localhost:3000/force_users')
const forceAbility = new ForceAbilityServices('http://localhost:3000/force_abilities')

document.addEventListener('DOMContentLoaded', () => {
    forceUsers.getForceUsers();
    forceAbility.getForceAbilities();
});

var modal = document.getElementById("modal");
var btn = document.getElementById("button")
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}