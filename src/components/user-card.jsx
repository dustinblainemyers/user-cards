import React, { Component } from "react";

class UserCard extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      firstName: '',
      lastName: '',
      picture: '',
      email: '' ,
      phone: '' ,
      password: '' ,
      birthday: '' ,
      address: '' 
      
    }
  };
  
    
  
    async componentDidMount() {
       try {
        const response = await fetch('https://randomuser.me/api/?results=1');
        const data = await response.json();
        console.log("user data", data)
        
        data.results.forEach(entry =>  {
          this.setState( {

            firstName : entry.name.first,
            lastName : entry.name.last,
            picture : entry.picture.medium,
          })
          

        })  
        
        
       


      } catch (error) {
          this.setState({
            error: error.message
          })

      }
        
    }
  render() {
      
    return (
      <div>
        
     
        <p> {this.state.firstName}</p>
        <img src={this.state.picture} alt="A random user"/>
      </div>
    );
  }
}


export default UserCard;