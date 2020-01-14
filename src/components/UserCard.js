import React from 'react';

const UserCard = props => {
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.avatar_url} alt={props.name}/>
            <h4>Username: {props.login}</h4>
            <p>Number of Repos: {props.public_repos}</p>
            <p>Number of Followers: {props.followers}</p>
        </div>

    )
}

export default UserCard;