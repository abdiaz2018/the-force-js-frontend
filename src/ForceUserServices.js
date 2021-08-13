class ForceUserServices {
    constructor(baseURL){
        this.baseURL = baseURL;
    };

    getForceUsers(){
        fetch(this.baseURL)
        .then(resp => resp.json())
        .then(forceusers => {
            console.log(forceusers)
            forceusers.forEach(user => {
                const newUser = new ForceUser(user)
                newUser.renderForceUser();
            })
        })
    };
}