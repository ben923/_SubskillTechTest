import React, {Component} from 'react'
import {
    Grid, Card, CardMedia, CardHeader, CardContent, Typography, CircularProgress
} from '@material-ui/core'
import ArticleService from '../../services/ArticleService'

export default class ArticleDetails extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    componentDidMount(){
        ArticleService.getOne(this.props.match.params.id)
        .then(res => this.setArticle(res))
    }
    setArticle(art){
        this.setState({
            article: art
        })
    }
    render(){
        if(undefined !== this.state.article){
            let image = this.state.article.IMG
            let date = new Date(this.state.article.created_at).toDateString()
            return (
                <Grid style={{margin: 30}} justify="center" container spacing={3}>
                    <Grid item xs={6}>
                        <Card >
                            <CardHeader
                                title={this.state.article.title}
                                subheader={this.state.article.category.name}
                            />
                            <CardMedia
                                style={{height: 500}}
                                image={(image !== undefined)? "http://127.0.0.1:8000/"+image : ""}
                            />
                            <CardContent>
                                <Typography>{this.state.article.descript}</Typography>
                                <Typography variant="body2" color="secondary">{date}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            )
        } else {
            return <CircularProgress/>
        }
    }
}