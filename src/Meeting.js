import "./Meeting.css";
import QRCode from "qrcode.react";

function Meeting(props) {
  const { meeting } = props;
  return (
    <li className="meeting-list-item">
      <div>
        <QRCode value={meeting.link} />
      </div>
      <div className="meeting-details">
        <p className="title">{meeting.course}</p>
        <p>{meeting.instructor}</p>
        <p>{meeting.time}</p>
        <p>
          <a href={meeting.link}>{meeting.link}</a>
        </p>
      </div>
      <button
        className="meeting-remove"
        onClick={() => props.onDeleteMeeting(meeting)}
      ></button>
    </li>
  );
}

export default Meeting;
