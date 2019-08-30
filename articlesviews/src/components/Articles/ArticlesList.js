import React from 'react'
import {
    Grid,
    makeStyles,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography
} from '@material-ui/core'

const ArticlesList = (props) => {
    const Style = Styles()
    return (
        props.articles.map((article, i) => {
            let photos = JSON.parse(article.IMG)
            let date = new Date(article.created_at).toDateString()
            return (
                <Grid key={i} item xs={4}>
                    <Card>
                        <CardActionArea onClick={() => window.location.href = "/article/"+article.id}>
                            <CardMedia
                                className={Style.media}
                                image={"http://127.0.0.1:8000/"+photos[0]}
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {article.title}
                            </Typography>
                            <Typography component="p">
                                {article.descript.substr(0, 250)}
                            </Typography>
                            <Typography variant="body2" component="p" color="textSecondary">{date}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            )
        })
    )
}
const Styles = makeStyles({
    media: {
        height: 150
    }
})
export default ArticlesList