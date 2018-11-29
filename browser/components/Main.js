import React, { Component } from "react";
import axios from "axios";

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/student')
      this.setState({
        students: res.data
      })
    }
    catch (err) {
      console.log(err)
    }
  }

  render() {
    const { students } = this.state
    return (
      <div>
        <h1>Students</h1>
        <h4>Name</h4>
        {students.map(student => {
          return <p key={student.key}> {student.fullName} </p>
        })}
      </div>
    )
  }
}