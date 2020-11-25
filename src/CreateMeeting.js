import { Component } from "react";
import "./CreateMeeting.css";

class CreateMeeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: "",
      instructor: "",
      time: "",
      link: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <a href="/" className="close-create-meeting">
          Close
        </a>
        <form className="create-meeting-form">
          <div className="create-meeting-details">
            <input
              type="text"
              name="course"
              placeholder="Course"
              value={this.state.course}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="instructor"
              placeholder="Instructor"
              value={this.state.instructor}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="time"
              placeholder="Meeting Times"
              value={this.state.time}
              onChange={this.handleChange}
            />
            <input
              type="url"
              name="link"
              placeholder="Meeting Link"
              value={this.state.link}
              onChange={this.handleChange}
            />
            <button>Add Meeting</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateMeeting;
