import React, {Component} from 'react'
import ArticleService from '../services/ArticleService'
import ArticlesList from './Articles/ArticlesList'
import FacebookFeedService from '../services/FacebookFeedService'
import FacebookFeed from './Facebook/FacebookFeed'
import {Grid, Typography, FormControl, Select, MenuItem} from '@material-ui/core';

export default class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            articles: [],
            tri: "tous",
            categories: [],
            feed: {}
        }
    }
    componentDidMount(){
        this.getAllArticles()
        ArticleService.getCategories()
        .then(res => this.setCategories(res))
        FacebookFeedService.get()
        .then(res => this.setFeed(res))

    }
    setFeed(feed){
        this.setState({
            feed: feed
        })
    }
    getAllArticles = () => {
        ArticleService.getAll()
        .then(res => {this.setArticles(res.data)})
        .catch(err => console.log(err))
    }
    setArticles = (art) => {
        this.setState({
            articles: art
        })
    }
    setCategories = (cat) => {
        this.setState({
            categories: cat
        })
    }
    handleCategory = (event) => {
        this.setState({
            tri: event.target.value
        })
        if(event.target.value !== "tous"){
            ArticleService.getByCategory(event.target.value)
            .then(res => this.setArticles(res))
        } else {
            this.getAllArticles()
        }
    }
    render(){
        return (
            <Grid justify="center" style={{margin: 15}}container spacing={3}>
                <Grid item xs={12}>
                    <Typography style={{margin: 50}} variant="h2" align="center" color="secondary" component="h2">welcome to YeahMorningNews</Typography>
                </Grid>
                <Grid item container xs={6} spacing={3}>
                    <Grid item xs={12}>
                        <FormControl>
                            <Select
                                value={this.state.tri}
                                onChange={this.handleCategory}
                                inputProps={{
                                  name: 'categorie',
                                  id: 'selectCategorie',
                                }}
                            >
                                <MenuItem value="tous">Toutes les categories</MenuItem>
                                {this.state.categories.map((cat, i) => {
                                    return <MenuItem key={i} value={cat.id}>{cat.name}</MenuItem>
                                })}
                            </Select>
                        </FormControl>
                    </Grid>
                    <ArticlesList articles={this.state.articles}/>
                </Grid>
                <Grid item xs={4}>
                    <FacebookFeed feed={this.state.feed} />
                </Grid>
            </Grid>
        )
    }
}