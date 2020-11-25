import "./CreateMeeting.css";

function CreateMeeting() {
  return (
    <div>
      <a href="/" className="close-create-meeting">Close</a>
      <form className="create-meeting-form">
        <div className="create-meeting-details">
          <input type="text" name="course" placeholder="Course" />
          <input type="text" name="instructor" placeholder="Instructor" />
          <input type="text" name="time" placeholder="Meeting Times" />
          <input type="url" name="link" placeholder="Meeting Link" />
          <button>Add Meeting</button>
        </div>
      </form>
    </div>
  );
}

export default CreateMeeting;
