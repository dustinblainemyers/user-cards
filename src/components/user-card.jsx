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
        let firstName, lastName, address, password;
        data.results.map(entry =>  {
          firstName = entry.name.first
          lastName = entry.name.last

        })  
        console.log("first name", firstName);
        console.log("last name", lastName)
        
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
     
        <p> test {this.firstName}</p>
      </div>
    );
  }
}

export default UserCard;