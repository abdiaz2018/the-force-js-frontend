class ForceUser {
    constructor({id, name, team, gender, race, force_ability_id}){
        this.id = id;
        this.name = name;
        this.team = team;
        this.gender = gender; 
        this.race = race
        this.force_ability_id = force_ability_id
    };

    renderForceUser() {
        const forceUserList = document.getElementById('force-user-list');
        const forceUserCard = document.createElement('div');
        const deleteBtn = document.createElement('button');
        forceUserCard.classList.add('force-user-card');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerText = 'Delete Force User'

        const forceUserInfo = this.renderForceUserInfo();

        forceUserCard.appendChild(forceUserInfo);
        //ability code here
        forceUserCard.appendChild(deleteBtn);
        forceUserList.appendChild(forceUserCard);
    };

    renderForceUserInfo() {
        const forceUserData = document.createElement('div');

        forceUserData.innerHTML = `
        <h3>Name: ${this.name}</h3>
        <p>Allegiance: ${this.team}</p>
        <p>Gender: ${this.gender}</p>
        <p>Race: ${this.race}</p>
        `;
        return forceUserData;
    }
};