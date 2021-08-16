class ForceAbilityServices {
    constructor(baseURL){
        this.baseURL = baseURL;
    };

    getForceAbilities(){
        fetch(this.baseURL)
        .then(resp => resp.json())
        .then(forceabilities => {
            console.log(forceabilities)
            forceabilities.forEach(ability => {
                const newAbility = new ForceAbility(ability)
                newAbility.renderAbilityData();
            })
        })
    };
}