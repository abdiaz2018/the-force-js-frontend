class ForceUser {
    constructor({id, name, team, gender, race, force_ability}){
        this.id = id;
        this.name = name;
        this.team = team;
        this.gender = gender; 
        this.race = race
        this.force_ability = force_ability
    };

    renderForceUser() {
        const forceUserList = document.getElementById('force-user-list');
        const forceUserCard = document.createElement('div');
        forceUserCard.classList.add('force-user-card');
    };

    renderForceUserInfo() {
        const forceUserData = document.createElement('div');

        forceUserData.innerHTML = `
        <h3>Name: ${this.name}</h3>
        <p>Allegiance: ${this.team}</p>
        <p>Gender: ${this.gender}</p>
        <p>Race: ${this.race}</p>
        <p>Force Ability: </p>
        `;
        return forceUserData;
    }
};