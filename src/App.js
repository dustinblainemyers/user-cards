import React, { Component } from 'react';

import './App.css';
import UserCardList from './components/user-list';

class App extends Component {
  state = {
    userData: []
  }
  
  async componentDidMount() {
    const userData = await this.getRandomUsers();

    this.setState({
      userData: userData
    });
  }

  getRandomUsers = async () => {
    const response = await fetch('https://randomuser.me/api/?results=10');
    const data = await response.json();
    return data.results;
  };

  render() {
      const {userData} = this.state;
    return (
      <div className="App">
      
      <h1> Just Busted </h1>
      <UserCardList userData={userData}/>
    </div>

    )
  }
   
 
}

export default App;
