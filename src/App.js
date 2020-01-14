import React, { Component } from 'react';
import Axios from 'axios';
import UserCard from './components/UserCard';
// style imports
import './App.css';


class App extends Component {
  state = {
    users: [],
    followers: []
  }

  componentDidMount() {
    Axios
    .get('https://api.github.com/users/michesi')
    .then(res => {
      console.log(res.data)
      this.setState({
        users: [res.data]
      })
    })
    .catch(err => {
      console.log('There is an error', err)
    })
    Axios
    .get('https://api.github.com/users/michesi/followers')
    .then(res => {
      console.log(res.data)
      this.setState({
        followers: res.data
      })
    })
    .catch(err => {
      console.log('There is an error', err)
    })
  }
  

  render () {
    return (
      <div className="App">
        <h1>React Github User App</h1>
        <div className='usercard'>
          {this.state.users.map(user => (
            <UserCard
              key={user.id}
              name={user.name}
              avatar_url={user.avatar_url}
              login={user.login}
              public_repos={user.public_repos}
              followers={user.followers}
              />
          ))}
          <h3>Username of followers:</h3>
          {this.state.followers.map(follower => (
            <ul>
              <li>{follower.login}</li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
