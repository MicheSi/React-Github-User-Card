import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
    maxWidth: 345,
    },
});

const UserCard = props => {

const classes = useStyles();


    return (
        <Card className={classes.card}>
            <CardActionArea>
            <CardMedia
            component="img"
            alt="profile picture"
            height="300"
            image={props.user.avatar_url}
            title={props.user.name}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {props.user.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Username: {props.user.login}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Number of Repos: {props.user.public_repos}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Number of Followers{props.user.followers}
            </Typography>
        </CardContent>
        </CardActionArea>
        <CardActions>
        <a href={props.user.html_url} target='_blank' rel='noopener noreferrer'><Button size="small" color="blueGrey" type="submit">
           Profile
        </Button></a>
        </CardActions>
    </Card>
    )
}

export default UserCard;