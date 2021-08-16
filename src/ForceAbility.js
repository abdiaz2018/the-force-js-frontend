class ForceAbility {
    constructor({id, name}) {
        this.id = id;
        this.name = name;
    };

    renderAbility() {
        const li = document.createElement('li');
        
        li.innerText = this.name 
        
    }

    renderAbilityData() {
        const forceAbilityData = document.createElement('div');

        forceAbilityData.innerHTML = `
        <p>Force Ability: ${this.name}</p>
        `;
        return forceAbilityData;
    }
};