const userApi = new ForceUserServices('http://localhost:3000/force_users');
class ForceUser {
    constructor({id, name, team, gender, race, force_ability}){
        this.id = id;
        this.name = name;
        this.team = team;
        this.gender = gender; 
        this.race = race
        this.force_ability = force_ability
    };

    renderForceUsers() {
        const forceUserList = document.getElementById('force-user-list');
        const forceUserCard = document.createElement('div');
        const deleteBtn = document.createElement('button');
        forceUserCard.classList.add('force-user-card');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerText = 'Delete Force User'

        deleteBtn.addEventListener('click', () => {
            userApi.deleteUser(this.id);
            forceUserCard.remove();
        });

        const forceUserInfo = this.renderForceUserInfo();


        forceUserCard.appendChild(forceUserInfo);
        forceUserCard.appendChild(deleteBtn);
        forceUserList.appendChild(forceUserCard);
    };

    renderForceUser() {

    }

    render() {
        const forceUserData = document.createElement('div');

        forceUserData.innerHTML = `
        <h3>Name: ${this.name}</h3>
        <p>Allegiance: ${this.team}</p>
        <p>Gender: ${this.gender}</p>
        <p>Race: ${this.race}</p>
        <p>Force Ability: ${this.force_ability.name}</p>
        `;
        return forceUserData;
    };


};