class ForceAbility {
    constructor({id, name}) {
        this.id = id;
        this.name = name;
    };
    createAbilityOption() {
        const collection = document.getElementById('ability-select');
        const abiltyOption = document.createElement('option');
        abiltyOption.value = this.id
        abiltyOption.innerHTML = this.name
        collection.appendChild(abiltyOption);
    };
    
};