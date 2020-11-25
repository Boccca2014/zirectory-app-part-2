import { Component } from "react";
import ListMeetings from "./ListMeetings.js";
import { Route, Switch } from "react-router";
import CreateMeeting from "./CreateMeeting.js";

class App extends Component {
  state = {
    meetings: [
      {
        _id: "5faf5ab7043e87536e31e54e",
        course: "EN.601.226 Data Structure",
        instructor: "Ali Madooei",
        time: "MWF 12:00 - 1:15 PM",
        link: "https://wse.zoom.us/j/91907049828",
      },
      {
        _id: "5faf5ab7043e87536e31e54f",
        course: "EN.601.226 Data Structure",
        instructor: "Ali Madooei",
        time: "MWF 1:30 - 2:45 PM",
        link: "https://wse.zoom.us/j/99066784665",
      },
      {
        _id: "5faf5ab7043e87536e31e550",
        course: "EN.601.280 Full-Stack JavaScript",
        instructor: "Ali Madooei",
        time: "TuTh 12:00 - 1:15 PM",
        link: "https://wse.zoom.us/j/93926139464",
      },
      {
        _id: "5faf5ab7043e87536e31e551",
        course: "EN.601.280 Full-Stack JavaScript",
        instructor: "Ali Madooei",
        time: "TuTh 1:30 - 2:45 PM",
        link: "https://wse.zoom.us/j/91022779135",
      },
    ],
  };

  removeMeeting = (meeting) => {
    this.setState((state) => {
      return {
        meetings: state.meetings.filter((m) => m._id !== meeting._id),
      };
    });
  };

  addMeeting = (meeting) => {
    this.setState({
      meetings: this.state.meetings.concat(meeting),
    });
  };

  render() {
    return (
      <Switch>
        <Route exact path="/">
          <ListMeetings
            meetings={this.state.meetings}
            onDeleteMeeting={this.removeMeeting}
          />
        </Route>
        <Route path="/create">
          <CreateMeeting onCreateMeeting={this.addMeeting} />
        </Route>
      </Switch>
    );
  }
}

export default App;
