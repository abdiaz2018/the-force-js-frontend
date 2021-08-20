class ForceAbilityServices {
    constructor(baseURL){
        this.baseURL = baseURL;
    };

    getForceAbilities(){
        fetch(this.baseURL)
        .then(resp => resp.json())
        .then(forceabilities => {
            forceabilities.forEach(ability => {
                const newAbility = new ForceAbility(ability)
                newAbility.createAbilityOption();
            })
        })
    };
}