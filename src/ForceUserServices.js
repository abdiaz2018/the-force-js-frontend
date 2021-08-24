class ForceUserServices {
    constructor(baseURL){
        this.baseURL = baseURL;
    };

    getForceUsers(){
        fetch(this.baseURL)
        .then(resp => resp.json())
        .then(forceusers => {
            forceusers.forEach(user => {
                const newUser = new ForceUser(user)
                newUser.renderForceUser();
            });
        })
    };

    createUser() {
        event.preventDefault();
        const nameInput = document.getElementById('name')
        const teamInput = document.getElementById('team')
        const genderInput = document.getElementById('gender')
        const raceInput = document.getElementById('race')
        const ability = document.getElementById('ability-select')

        const formData = {
            name: nameInput.value,
            team: teamInput.value,
            gender: genderInput.value,
            race: raceInput.value,
            force_ability_id: ability.value
        }
        debugger
        const config = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        };

        fetch(this.baseURL, config)
        .then(resp => resp.json())
        .then(user => {
            const newUser = new ForceUser(user)
            newUser.renderForceUser();
            userForm.reset();
        });
    }

    deleteUser(id) {
        const config = {
            method: 'DELETE'
        };

        fetch(`${this.baseURL}/${id}`, config)
        .then(resp => resp.json())
        .then(data => console.log(data.message))
    };
    
};