const url = 'http://localhost:5000'

class TweetModel {
    static all = () => {
        console.log(`HIII, ${localStorage.uid}`)
        return fetch(`${url}/user/tweets`, {
            headers: { authorization: `Bearer ${ localStorage.uid }`}
        }).then(res => res.json())
    }

}

export default TweetModel