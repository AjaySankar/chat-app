import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Paper, Typography, List, ListItem, ListItemText, Chip, Button, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '50px',
        padding: theme.spacing(3, 2)
    },
    flex: {
        display: 'flex',
        alignItems: 'center'
    },
    topicsWindow: {
        width: '30%',
        height: '300px',
        borderRight: '1px solid grey'
    },
    chatWindow: {
        width: '30%',
        height: '300px',
        padding: '20px'
    },
    chatBox: {
        width: '85%'
    },
    button: {
        width: '15%'
    }
}))

function DashBoard(props) {
    const classes = useStyles()
    const [textValue, changeTextValue] = useState('')
    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h4" component="h4">
                    Chat App
                </Typography>
                <Typography variant="h5" component="h5">
                    Topic Placeholder
                </Typography>
                <div className={classes.flex}>
                    <div className={classes.topicsWindow}>
                        <List>
                            {
                                ['topic1', 'topic1', 'topic1'].map(topic => (
                                    <ListItem key={topic} button>
                                        <ListItemText primary={topic}/>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </div>
                    <div className={classes.chatWindow}>
                        {
                            [{from: 'user', msg: 'hello'}].map((chat, index) => (
                                <div className={classes.flex} key={index}>
                                    <Chip label={chat.from} className={classes.chip}/>
                                    <Typography variant='p'> {chat.msg}</Typography> 
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={classes.flex}>
                    <TextField label="Send a chat" className={classes.chatBox} value={textValue} onChange={(e) => changeTextValue(e.target.value)}/>
                    <Button variant="contained" color="primary">
                        SEND
                    </Button>
                </div>
            </Paper>
        </div>
    );
}

export default DashBoard;