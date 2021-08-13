const forceAPI = new ForceUserServices('http://localhost:3000/force_users')

document.addEventListener('DOMContentLoaded', () => {
    forceAPI.getForceUsers();
});