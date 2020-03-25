import React, { Component } from "react";

class UserCard extends Component {
  state = {
    userData: 'Getting user card'
  };
    async componentDidMount() {
       try {
        const response = await fetch('https://randomuser.me/api/?results=1');
        const data = await response.json();
        console.log("user data", data)
        data.results.map(entry => 
          console.log("first name" ,entry.name.first)
          )  
        
        this.setState({
          userData: data.results.name
        })
        


      } catch (error) {
          this.setState({
            userData: error.message
          })

      }
        
    }
  render() {
      const {userData} = this.state;
    return (
      <div>
        <p>user data is ...</p>
        <p> {userData}</p>
      </div>
    );
  }
}

export default UserCard;