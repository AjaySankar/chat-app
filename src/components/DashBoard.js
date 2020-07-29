import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import { Paper, Typography, List, ListItem, ListItemText, Chip, Button, TextField } from '@material-ui/core';
import { CTX } from './Store';

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
    const {allChats, sendChatAction, user} = useContext(CTX)
    window.console.log(useContext(CTX))
    const topics = Object.keys(allChats)
    const [activteTopic, changeActiveTopic] = useState(topics[0])
    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h4" component="h4">
                    Chat App
                </Typography>
                <Typography variant="h5" component="h5">
                    {activteTopic}
                </Typography>
                <div className={classes.flex}>
                    <div className={classes.topicsWindow}>
                        <List>
                            {
                                topics.map(topic => (
                                    <ListItem onClick={e => changeActiveTopic(e.target.innerText)} key={topic} button>
                                        <ListItemText primary={topic}/>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </div>
                    <div className={classes.chatWindow}>
                        {
                            allChats[activteTopic].map((chat, index) => (
                                <div className={classes.flex} key={index}>
                                    <Chip label={chat.from} className={classes.chip}/>
                                    <Typography variant='body1' gutterBottom> {chat.msg}</Typography> 
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={classes.flex}>
                    <TextField label="Send a chat" className={classes.chatBox} value={textValue} onChange={(e) => changeTextValue(e.target.value)}/>
                    <Button 
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        value={textValue}
                        onClick={() => {
                            sendChatAction({from: user, msg: textValue, topic: activteTopic});
                            changeTextValue('')
                        }}
                    >
                        SEND
                    </Button>
                </div>
            </Paper>
        </div>
    );
}

export default DashBoard;