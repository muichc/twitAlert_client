const url = 'http://localhost:5000'

class AuthModel {
    static register = (data) => {
        return fetch(`${url}/auth/register`, {
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
        return fetch(`${url}/auth/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response) => {
            return response.json()
        })
    }
    static verify = () => {
        console.log(`>>> ${localStorage.uid}`)
        return fetch(`${url}/auth/profile`, {
            headers: { authorization: `Bearer ${ localStorage.uid }`}
        }).then((response) => {
            return response.json()
        })
    }

}

export default AuthModel