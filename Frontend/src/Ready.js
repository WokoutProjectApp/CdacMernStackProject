import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './Ready.css'
import ExercisesList from './ExercisesPages/exerciseslist';

import video from '../src/component/videos/Sahil.mp4'

export default class Ready extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeActivity = this.onChangeActivity.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            activity: '',
            duration: "",
            date: new Date(),
            users: []
        }
    }

    componentDidMount() {

        axios.get('http://localhost:6655/User/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        users: response.data.map(user => user.username),
                        username: response.data[0].username
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangeActivity(e) {
        this.setState({
            Activity: e.target.value
        })
    }

    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        })
    }

    onChangeDate(date) {
        this.setState({
            date: date
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            Activity: this.state.Activity,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(exercise);

        axios.post('http://localhost:6655/User/add', exercise)
            .then((result) => {
                console.log(result)
            }).catch((err) => {
                console.log(err)
            })

        // const handleClick = () => {
        //     console.log('this is:', this);
        // }

    }
    render() {
        return (
            <>
                <div className="rightdiv1">
                    <div className="innerdiv">
                        <h3 style={{ textAlign: "center", padding: "10px 20px" }}>RECORD WORKOUT ACTIVITY</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="username">
                                <label style={{}}>Username: </label>
                                <input type="text"
                                    required
                                    className="userStyle"
                                    value={this.state.username}
                                    onChange={this.onChangeUsername}
                                />
                            </div><br></br>
                            <div>
                                <label>Enter the activity name: </label>
                                <input type="text"
                                    required
                                    value={this.state.Activity}
                                    onChange={this.onChangeActivity}
                                />
                            </div><br></br>
                            <div>
                                <label>Duration (in minutes): </label>
                                <input
                                    type="text"
                                    value={this.state.duration}
                                    onChange={this.onChangeDuration}
                                />
                            </div><br></br>
                            <div>
                                <label>Date: </label>
                                <div>
                                    <DatePicker
                                        selected={this.state.date}
                                        onChange={this.onChangeDate}
                                    />
                                </div>
                            </div>
                            <br></br>
                            <div>
                                {/* <input type="submit" value="ADD" /> */}
                                <button
                                    style={{ width: "100%", height: "7vh", fontSize: 18, borderRadius: 10, backgroundColor: "white", marginTop: "13px" }}
                                    type="submit">
                                    SUBMIT
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div style={{ height: "88vh", width: "45%", float: "left" }}>
                    <div className="hero">
                        <video className="video1" src={video} autoPlay loop />
                    </div>
                </div>
            </>
        )
    }
}
