// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import './ExerciseStyle.css';

// const Exercise = props => (
//   <tr>
//     <td>{props.exercise.username}</td>

//     <td>{props.exercise.Activity}</td>

//     <td>{props.exercise.duration}</td>

//     <td>{props.exercise.date.substring(0, 10)}</td>
//     <td>
//       <Link to={"/update/" + props.exercise._id}>update</Link> | <a href="/exercise" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
//     </td>
//   </tr>
// )

// export default class ExercisesList extends Component {
//   constructor(props) {
//     super(props);

//     this.deleteExercise = this.deleteExercise.bind(this)

//     this.state = { exercises: [] };
//   }

//   componentDidMount() {

//     axios.get('http://localhost:6655/User')

//       .then(response => {
//         this.setState({ exercises: response.data })
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//   }

//   deleteExercise(id) {
//     axios.delete('http://localhost:6655/User/' + id)
//       .then(response => { console.log(response.data) });

//     this.setState({
//       exercises: this.state.exercises.filter(el => el._id !== id)
//     })
//   }

//   exerciseList() {
//     return this.state.exercises.map(currentexercise => {
//       return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />;
//     })
//   }

//   render() {
//     return (
//       <div style={{ width: "100%", height: "auto" }}>
//         <h1 style={{ padding: "15px 15px" }}>Track Your Activity</h1>
//         <table className="styled-table">
//           <thead>
//             <tr>
//               <th>Username</th>
//               <th>Activity</th>
//               <th>Duration</th>
//               <th>Date</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.exerciseList()}
//           </tbody>
//         </table>
//       </div>
//     )
//   }
// }