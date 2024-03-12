export const loginGoogle = async () => {

    let response = await fetch('http://localhost:8080/api/v1/hello/secureUser', {
        method: 'GET',
        // mode: 'no-cors',
        credentials: "include",
        cache: 'no-cache',
        headers: {
        'Content-type': 'application/json',
        }
    }).catch((error) => {
        console.log("Error: " + error)
    })
    return response.json();

}

export const logoutGoogle = async () => {

    let response = await fetch('http://localhost:8080/api/v1/auth/logout', {
        method: 'GET',
        // mode: 'no-cors',
        credentials: "include",
        cache: 'no-cache',
        headers: {
        'Content-type': 'application/json',
        }
    })
    return response.json();

}

// export const postLogin = async (token) => {

//     const body = {
//         email: "carlos@gmail.com",
//         password: "Abcdef123@"
//     }


//     let response = await fetch('http://127.0.0.1:8080/api/v1/auth/login', {
//         method: 'POST',
//         headers: {
//         'Content-type': 'application/json'
//         },
//         body: JSON.stringify(body),
//     });
//     return response.json();
// }


// export const getClientById = async (id) => {

//     let credentials = btoa(process.env.REACT_APP_USER + ':' + process.env.REACT_APP_PASS);

//     let response = await fetch(process.env.REACT_APP_APIREST + 'client/list/id/' + id,
//         {headers: {Authorization: 'Basic ' + credentials}},{mode: "no-cors"});

//     return response.json();
// }


// export const getInputById = async (id) => {

//     let credentials = btoa(process.env.REACT_APP_USER + ':' + process.env.REACT_APP_PASS);

//     let response = await fetch(process.env.REACT_APP_APIREST + 'input/list/' + id,
//         {headers: {Authorization: 'Basic ' + credentials,}},{mode: "no-cors"});

//     return response.json();
// }