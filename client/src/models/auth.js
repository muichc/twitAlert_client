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

    static editProfile = (data) => {
        return fetch(`${url}/auth/user`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${ localStorage.uid }`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({payload: data})
        })
    }

    static deleteProfile = (data) => {
        return fetch (`${url}/user`, {
            method:"DELETE",
            headers: {
                authorization: `Bearer ${ localStorage.uid }`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((response) => {
            return response.json()
        })
    }


    static verify = () => {
        return fetch(`${url}/auth/verify`, {
            headers: { authorization: `Bearer ${ localStorage.uid }`}
        }).then((response) => {
            return response.json()
        })
    }

}

export default AuthModel