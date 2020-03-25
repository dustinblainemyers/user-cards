import React, { Component } from "react";

class UserCard extends Component {
  state = {
    userData: 'Getting user card'
  };
    async componentDidMount() {
       try {
        const response = await fetch('https://randomuser.me/api/?results=1');
        const data = await response.json();
        console.log("data is ", data)
        
        this.setState({
          userData: data
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