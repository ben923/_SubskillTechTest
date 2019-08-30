import axios from 'axios'

export default class ContactService{
    static sendMail($credentials){
        return new Promise((resolve, reject) => {
            axios.post("/contact", $credentials)
            .then(res => resolve(res.data))
        })
    }
}