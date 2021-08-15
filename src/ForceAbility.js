class ForceAbility {
    constructor({id, name}) {
        this.id = id;
        this.name = name;
    };

    renderAbility() {
        const li = document.createElement('li');
        
        li.innerText = this.name 
        
    }
}