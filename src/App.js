import React, { Component } from 'react';
import Axios from 'axios';
import UserCard from './components/UserCard';
// style imports
import './App.css';
import FollowersList from './components/FollowersList';
import SearchForm from './components/SearchForm';


class App extends Component {
  state = {
    user: [],
    followers: [],
    searchText: ''
  }

  componentDidMount() {
    Axios
    .get('https://api.github.com/users/michesi')
    .then(res => {
      // console.log(res.data)
      this.setState({
        user: res.data
      })
    })
    .catch(err => {
      console.log('There is an error', err)
    })
    Axios
    .get('https://api.github.com/users/michesi/followers')
    .then(res => {
      // console.log(res.data)
      this.setState({
        followers: res.data
      })
    })
    .catch(err => {
      console.log('There is an error', err)
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchText !== prevState.searchText)
    Axios
    .get(`https://api.github.com/users/${this.state.searchText}`)
    .then(res => {
      console.log(res);
      this.setState({
        user: res.data
      })
      console.log(res)
    })
    .catch(err => {
      console.log('You have an error', err)
    })
  }

  changeUser = newUser => {
    this.setState({
      searchText: newUser
    })
    Axios
    .get(`https://api.github.com/users/${this.state.searchText}`)
    .then(res => {
      console.log(res);
      this.setState({
        user: res.data
      })
    })
    .catch(err => {
      console.log('You have an error', err)
    })
  }
  

  render () {
    return (
      <div className="App">
        <h1>React Github User Card</h1>
        <SearchForm changeUser={this.changeUser}/>
        <div className='usercard'>
          
            <UserCard
              user={this.state.user}
              />
          
          </div>
          <div className="followersList">
            <h3>List of Followers:</h3>
            {this.state.followers.map(follower => (
              <FollowersList
              key={follower.id}
              login={follower.login}
              avatar_url={follower.avatar_url}
              url={follower.html_url}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default App;
