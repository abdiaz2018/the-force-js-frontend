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
            });
        })
    };

    deleteUser(id) {
        const config = {
            method: 'DELETE'
        };

        fetch(`${this.baseURL}/${id}`, config)
        .then(resp => resp.json())
        .then(data => console.log(data.message))
    };
    
};