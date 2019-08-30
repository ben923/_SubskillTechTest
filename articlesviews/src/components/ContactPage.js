import React, {useState} from 'react'
import { TextField, Grid, Typography, FormControl, Button } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import ContactService from '../services/ContactService'

const ContactPage = (props) => {
    const [state, setstate] = useState({
        mail: "",
        subject: "",
        fullName: "",
        content: "",
    });
    const [waiter, setwaiter] = useState(false)
    const [errors, seterrors] = useState({
        mail: undefined,
        subject: undefined,
        fullName: undefined,
        content: undefined
    });
    const handleChange = name => event => {
        setstate({...state, [name]: event.target.value})
        seterrors({...errors, [name]: undefined})
    }
    const sendMail = () => {
        setwaiter(true)
        ContactService.sendMail(state)
        .then(res => {
            if(res.errors){
                console.log(res)
                seterrors({
                    ...errors,
                    ...res.errors
                })
                setwaiter(false)
            } else {
                setwaiter(false)
                setstate({...state, sended: "sended"})
            }
        })
    }
    return(
        <Grid style={{margin: 50}} container justify="center" spacing={3}>
            <Grid item xs={10}>
                <Typography align="center" variant="h2" color="secondary">Send a mail to the dev</Typography>
            </Grid>
            <Grid item xs={6}>
                <form style={{margin: 50}}>
                    <Grid item xs={12}>
                        <FormControl style={{margin: 5}}>
                            <TextField
                                error={(errors.fullName)? true: false}
                                label="Your full name"
                                value={state.fullName}
                                onChange={handleChange('fullName')}
                            />
                        </FormControl>
                    </Grid>
                    <FormControl style={{margin: 5,width: "48%"}}>
                        <TextField
                            error={(errors.mail)? true: false}
                            label="Your email"
                            value={state.email}
                            onChange={handleChange('mail')}
                        />
                    </FormControl>
                    <FormControl style={{margin: 5,width: "48%"}}>
                        <TextField
                            error={(errors.subject)? true: false}
                            label="the subject of your mail"
                            value={state.subject}
                            onChange={handleChange('subject')}
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            style={{margin: 5}}
                            error={(errors.content)? true: false}
                            multiline
                            label="what you want to say me"
                            value={state.content}
                            onChange={handleChange('content')}
                        />
                    </FormControl>
                    <Button onClick={sendMail} style={{marginTop: 15, marginLeft: 5}}variant="contained" color="secondary">
                      Send!
                    </Button>
                    {(waiter === true)? <CircularProgress color="secondary" />: ""}
                    {(state.sended === "sended")? <Typography>Email sended</Typography>: ""}
                </form>
            </Grid>
        </Grid>
    )
}

export default ContactPage