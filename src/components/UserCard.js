import React from 'react';

const UserCard = props => {
    return (
        <div>
            <h3>{props.name}</h3>
            <img src={props.avatar_url}/>
            <p>Username: {props.login}</p>
        </div>

    )
}

export default UserCard;