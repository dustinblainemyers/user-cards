import React, { Component } from "react";

class UserCard extends Component {


   

    

    render(){
        
        console.log(this.props)
       return (
        <div className='usercard'> 
           
            <p>  {this.props.user.name.first} {this.props.user.name.last}  </p>
            <img src={this.props.user.picture.thumbnail} alt="a random person"/>
       </div>
       )
    }
}


export default UserCard;