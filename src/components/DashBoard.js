import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '50px',
        padding: theme.spacing(3, 2)
    },
    flex: {
        display: 'flex'
    },
    topicsWindow: {
        width: '30%',
        height: '300px',
        borderRight: '1px solid grey'
    },
    chatWindow: {
        width: '30%',
        height: '300px'
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
                        
                    </div>
                </div>
                <div className={classes.flex}>

                </div>
            </Paper>
        </div>
    );
}

export default DashBoard;