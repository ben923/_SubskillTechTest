import Axios from 'axios'

export default class FacebookFeedService{
    static get(){
        return new Promise((resolve, reject) => {
            Axios.get("/feed")
            .then(res => resolve(res.data))
            .catch(err => reject(err))
        })
    }
}