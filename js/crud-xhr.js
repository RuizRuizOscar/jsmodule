// GET

const getData = (url,funcionALlamar, selector, method = 'GET') => {
    const request = new XMLHttpRequest()
    // console.log(request);
    request.addEventListener('readystatechange', () => {
        // const response = request //.responseText
        if(request.readyState != 4) return
        else{
            if(request.status >= 200 && request.status <= 299){
                const response = request;
                const objectResponse = JSON.parse(response.responseText)

                funcionALlamar(selector,objectResponse)
            }else{
                console.log('No se pudo ejecutar');
            }
        }
    })
    request.open(method,url) //'https://jsonplaceholder.typicode.com/users'
    request.send()
}

const printUsers2 = (selector, arrData) => {
    console.log(arrData);
    let listData = ''
    arrData.forEach(user =>{
        listData += `<li>   Name :${user.name} 
                            Username: ${user.username} 
                            Email: ${user.email}
                            Address 
                            Street: ${user.address.street} 
                            Suite: ${user.address.suite}
                            City: ${user.address.city}
                            Zipcode: ${user.address.zipcode}
                            Geo
                            Lat: ${user.address.geo.lat}
                            Lng: ${user.address.geo.lng}
                            Phone: ${user.phone} 
                            <a href="${user.website}">Ir a sitio web</a>
                            Company
                            Company Name: ${user.company.name}
                            Company catchPhrase: ${user.company.catchPhrase}
                            Company bs: ${user.company.bs}
                            </li>`
    });
    document.querySelector(selector).innerHTML = listData;    
}

// loadUsers()

// document.getElementById('getusers').addEventListener('click', function(){
//     getData('https://jsonplaceholder.typicode.com/users', printUsers, '.list__users')
// })

// document.getElementById('getposts').addEventListener('click', function(){
//     getData('https://jsonplaceholder.typicode.com/posts', printPosts, '.list__posts')
// })

console.log("El search es: "+ window.location.search);
///////////////////////////////////////////////////////////////////////////////
// Create user
const createUser  = () => {
    // https://koders1gpython-default-rtdb.firebaseio.com/jorge
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(JSON.parse(this.response))
        } else if (this.readyState === 4 && this.status === 404) {
            console.error(JSON.parse(this.response))
            return false
        }
    }
    xhttp.open('POST', 'https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/.json')
    xhttp.send(
        JSON.stringify({
            id: 1,
            name: "Jorge",
            lastname: "Camarillo",
            urlPhoto: "https://loremflickr.com/320/240/person"
        })
    )
}
// Read user
const    readUser  = () => {
    // https://koders1gpython-default-rtdb.firebaseio.com/jorge
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(JSON.parse(this.response))
        } else if (this.readyState === 4 && this.status === 404) {
            console.error(JSON.parse(this.response))
            return false
        }
    }
    xhttp.open('GET', 'https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/.json')
    // xhttp.open('GET', 'https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/-MQnTbsClYPUsYDcBS-R.json')
    xhttp.send()
}
// Update and replace
const updateAndReplaceUser  = (idUser) => {
    // https://koders1gpython-default-rtdb.firebaseio.com/jorge
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log(JSON.parse(this.response))
      } else if (this.readyState === 4 && this.status === 404) {
        console.error(JSON.parse(this.response))
        return false
      }
    }
    xhttp.open('PUT', `https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/${idUser}.json`)
    xhttp.send(
      JSON.stringify({
        id: 1,
        name: "Jorge",
        lastname: "Camarillo",
        urlPhoto: "https://loremflickr.com/320/240/person"
      })
    )
}
// Update and modify 
const updateAndModifyUser  = (idUser) => {
    // https://koders1gpython-default-rtdb.firebaseio.com/jorge
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log(JSON.parse(this.response))
      } else if (this.readyState === 4 && this.status === 404) {
        console.error(JSON.parse(this.response))
        return false
      }
    }
    xhttp.open('PATCH', `https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/${idUser}.json`)
    xhttp.send(
      JSON.stringify({
        name: "Jorge Luis"
      })
    )
}
// Delete 
const deleteUser  = (idUser) => {
    // https://koders1gpython-default-rtdb.firebaseio.com/jorge
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
        console.log(JSON.parse(this.response))
        } else if (this.readyState === 4 && this.status === 404) {
        console.error(JSON.parse(this.response))
        return false
        }
    }
    xhttp.open('DELETE', `https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/${idUser}.json`)
    xhttp.send()
}

////////////////////////////////////////////////////////////////////////////////

// function request all methods
const requestAjax = (url, callback, method = 'GET', data = {}) => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            callback(JSON.parse(this.response))
            return true
        } else if (this.readyState === 4 && this.status === 404) {
            console.error(JSON.parse(this.response))
            return false
        }
    }
    xhttp.open(method, url)
    if (method === 'GET' || method === 'DELETE') {
        xhttp.send()
    } else {
        // put, patch, post
        xhttp.send(JSON.stringify(data))
    }
}
// put y post
const showResponse = (response) => {
    console.log(response)
}

// requestAjax(
//     'https://koders1gpython-default-rtdb.firebaseio.com/oscar/users/.json', //https://koders1gpython-default-rtdb.firebaseio.com/.json
//     showResponse,
//     'POST', 
//     {
//         lastname: "Vega",
//         name: "Gus",
//         urlPhoto: "https://loremflickr.com/320/240/person"
//     }
// )

document.getElementById('guardar').addEventListener('click', function(){
    console.log('guardar');
    console.log(document.getElementById("lastname"));
    // getData('https://jsonplaceholder.typicode.com/users', printUsers, '.list__users')
    let temp = {
        lastname: document.querySelector("#lastname").value,
        name: document.querySelector("#name").value,
        urlPhoto: document.querySelector("#url_photo").value
    }
    requestAjax('https://koders1gpython-default-rtdb.firebaseio.com/oscar/users/.json',showResponse,'POST',temp)
    
})