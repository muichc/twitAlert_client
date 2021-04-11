const url = 'https://localhost:5000'

class AuthModel {
    static register = (data) => {
        return fetch(`${URL}/auth/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response) => {
            return response.json()
        })
    }

    static login = (data) => {
        return fetch(`${URL}/auth/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response) => {
            return response.json()
        })
    }

}

export default AuthModel