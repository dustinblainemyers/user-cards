import React, { Component } from "react";

class UserCard extends Component {


    state = {
        imgURL: " ", 
        firstname: " ",
        lastname: " ", 
        location: " ",
        username: " ", 
        email: " "
    }

    async componentDidMount(){
        try{
            const response = await fetch('https://randomuser.me/api/')
            const data = await response.json();
            console.log(data)
            this.setState({
                imgURL: data.results[0].picture.large,
                firstname: data.results[0].name.first, 
                lastname: data.results[0].name.last,
                location: data.results[0].location.street.number + " " + data.results[0].location.street.name + " " + data.results[0].location.city + ", " + data.results[0].location.state + " " + data.results[0].location.country,
                username: data.results[0].login.username, 
                email: data.results[0].email

              })
        } catch (error){
            return error 
        }
    }

    render(){
        const { imgURL } = this.state;
        const { firstname } = this.state; 
        const { lastname } = this.state;
        const { location } = this.state;
        const { username } = this.state;
        const { email} = this.state; 
       return (
        <div className='usercard'> 
            <img src={imgURL}/>
            <p> {firstname} {lastname} </p>
            <p> {location} </p>
            <p> {username} </p>
            <p> {email} </p>
       </div>
       )
    }
}


export default UserCard;