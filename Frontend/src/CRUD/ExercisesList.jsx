import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import './Style.css';

const Exercise = props => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0, 10)}</td>
        <td>
            <button><Link to={"/edit/" + props.exercise._id} style={{ backgroundColor: "lightgray", color: "black", fontSize: 15 }}>Edit</Link></button> | <button style={{ backgroundColor: "lightgrey" }} onClick={() => { props.deleteExercise(props.exercise._id) }}>Delete</button>
        </td>
    </tr>
)

class ExercisesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exercises: []
        }

        this.deleteExercise = this.deleteExercise.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:6655/exercises/')
            .then(res => {
                this.setState({ exercises: res.data })
            })
            .catch(error => console.log(error));
    }

    deleteExercise(id) {
        axios.delete('http://localhost:6655/exercises/' + id)
            .then(res => console.log(res.data));

        this.setState({ exercises: this.state.exercises.filter(el => el._id !== id) })
    }

    exercisesList() {
        return this.state.exercises.map(currentexercise => {
            return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />
        })
    }

    render() {
        return (
            <div className="styled-table">
                <h2 style={{ padding: "10px 10px" }}>You can see and edit your exercise here </h2>
                <h3 style={{ padding: "10px 10px" }}>Logged Exercises</h3>,
                <table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exercisesList()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ExercisesList;