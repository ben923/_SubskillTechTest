import Axios from 'axios'

export default class ArticleService{
    static getAll(){
        return new Promise((resolve, reject) => {
            Axios.get("/articles")
            .then(res => resolve(res.data))
            .catch(err => reject(err))
        })
    }
    static getOne(id){
        return new Promise((resolve, reject) => {
            Axios.get(`/articles/${id}`)
            .then(res => resolve(res.data))
            .catch(err => reject(err))
        })
    }
    static getByCategory(id){
        return new Promise((resolve, reject) => {
            Axios.get(`/categories/${id}`)
            .then(res => resolve(res.data))
            .catch(err => reject(err))
        })
    }
    static getCategories(){
        return new Promise((resolve, reject) => {
            Axios.get(`/categories`)
            .then(res => resolve(res.data))
            .catch(err => reject(err))
        })
    }
}