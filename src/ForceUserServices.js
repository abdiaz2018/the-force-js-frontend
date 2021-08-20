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

    createUser() {
        const userForm = document.getElementById('force-user-form')
        const nameInput = document.getElementById('name')
        const teamInput = document.getElementById('team')
        const genderInput = document.getElementById('gender')
        const raceInput = document.getElementsById('race')
        const ability = document.getElementById('ability-select')

        const formData = {
            name: nameInput.value,
            team: teamInput.value,
            gender: genderInput.value,
            race: raceInput.value,
            ability_id: ability.value 
        }
        const config = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        };

        fetch(baseURL, config)
        .then(resp => resp.json())
        .then(user => {
            renderForceUser(user);
            userForm.requestFullscreen();
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