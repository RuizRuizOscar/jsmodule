const updateUserFetch = (data) => {
    // create
    fetch(`https://koders1gpython-default-rtdb.firebaseio.com/oscar/users/.json`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        return response.json()
    })
    .then(newUser => {
        console.log(newUser)
    })
}

let btn_actualizar = document.querySelector('.button_actualizar')
if(btn_actualizar){
    btn_actualizar.addEventListener('click', event =>{
        console.log('quiero actualizar');  
        let name = document.querySelector('#name').value
        let lastName = document.querySelector('#lastname').value
        let url = document.querySelector('#url_photo').value

        if(name === '' || lastName === '' || url_photo === ''){
            console.log('Todos los datos son obligatorios');
            alert('Todos los datos son obligatorios');
        }else{
            let userToUpdate = {
                lastname: lastName,
                urlPhoto: url,
                name: name
            }
            console.log(userToUpdate);
            createUserFetch(userToUpdate)
        }
    })
}