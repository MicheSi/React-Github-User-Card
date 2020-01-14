import React, { Component } from 'react';
import Axios from 'axios';

// style imports
import './App.css';


class App extends Component {
  state = {
    users: []
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
  }

  render () {
    return (
      <div className="App">
        <h1>React Github User App</h1>
        {/* <div className='usercard'>
          {this.state.users.map(user => {
            <p>{user.name}</p>
          })}

        </div> */}
      </div>
    );
  }
}

export default App;
