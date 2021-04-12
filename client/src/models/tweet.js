import { useRecoilValue } from 'recoil'
import{ loggedInState } from '../recoil/selectors'

const url = 'https://localhost:5000'

class TweetModel {
    static all = () => {
        return fetch(`${url}/user/tweets`).then(res => res.json())
    }

}

export default TweetModel