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

const printUsers = (selector, arrData) => {
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

document.getElementById('getusers').addEventListener('click', function(){
    getData('https://jsonplaceholder.typicode.com/users', printUsers, '.list__users')
})

document.getElementById('getposts').addEventListener('click', function(){
    getData('https://jsonplaceholder.typicode.com/posts', printPosts, '.list__posts')
})

console.log("El search es: "+ window.location.search);