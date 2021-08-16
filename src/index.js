const forceUsers = new ForceUserServices('http://localhost:3000/force_users')
const forceAbility = new ForceAbilityServices('http://localhost:3000/force_abilities')

document.addEventListener('DOMContentLoaded', () => {
    forceUsers.getForceUsers();
    forceAbility.getForceAbilities();
});