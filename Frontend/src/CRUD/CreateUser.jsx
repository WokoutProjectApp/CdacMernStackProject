import React, { Component } from 'react';
import axios from "axios";
import './User.css';

class CreateUser extends Component {
    constructor(props) {
        super();
        this.state = {
            username: ""
        }
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeUsername(e) {
        this.setState({ username: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.username,
        }

        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));

        this.setState({
            username: ''
        })
    }

    render() {
        return (
            <div style={{ backgroundColor: "white" }}>

                <h2 style={{ textAlign: "center", padding: "25px" }}>Only Login User can genrate their Username</h2>
                <h3 style={{ textAlign: "center", padding: "25px" }}>Generate Your  Username</h3>
                <form onSubmit={this.onSubmit}>
                    <div style={{ width: "30%", margin: "auto" }}>

                        <label style={{ fontSize: 25 }}>Username: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div style={{ margin: "auto" }}>
                        <input type="submit" value="Create User" style={{ backgroundColor: "white", width: "30%", textAlign: "center", marginLeft: "28.5rem" }} />
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateUser;