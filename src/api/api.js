import axios from 'axios'

const urlBase = 'https://c11a-85-159-27-200.in.ngrok.io'

// Users related api calls
export const userLogin = async (email, password) => {
    let result = await axios.post(`${urlBase}/api/v1/users/auth/`, {
            username: email,
            password
        })
    return result
}

export const userRegistration = async (email, firstName, secondName, password) => {
    let result = await axios.post(`${urlBase}/api/v1/users/register/`, {
        username: email,
        first_name: firstName,
        last_name: secondName,
        password: password
    })
    return result
}


// Items related api calls
export const itemsRetrieval = async () => {
    let result = await axios.post(`${urlBase}/api/v1/merchants/products/`,{}, {
        headers: {
            'Authorization': `Token ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    })
    return result
}