import React from 'react'
import { Card, CardHeader, Avatar, Typography, CardContent } from '@material-ui/core';

const FacebookFeed = (props) => {
    if(props.feed.feed !== undefined){
        console.log(props.feed)
        return (
            <>
            <Card>
                <CardHeader
                    avatar={<Avatar
                        src={props.feed.infos.cover.source}
                        style={{margin:10}}
                    />}
                    title={props.feed.infos.name}
                >
                </CardHeader>
                <CardContent>
                    <Typography variant="body2" color="secondary" component="p">
                        Une page cool crée pour ce test technique par Benjamin Rouge !
                    </Typography>
                </CardContent>
            </Card>
            <p>Posts: </p>
            {props.feed.feed.data.map((post, i) => {
                return(
                <Card key={i} style={{margin:5}}>
                    <CardHeader
                        title={(post.story !== undefined)? post.story: post.message}
                        subheader={new Date(post.created_time).toDateString()}
                    />
                </Card>)
            })}
            </>
        )
    } else {
        return <p>Wait</p>
    }
}
export default FacebookFeed