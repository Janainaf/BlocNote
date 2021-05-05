function Sidebar({ notes, onAddNote, onEditNote }) {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1> Notes </h1>
        <button onClick={onAddNote}> Add </button>
      </div>
      <div className="app-sidebar-notes">
        {notes.map((note) => (
          <div className="app-sidebar-note">
            <div className="sidebar-note-title">
              <strong> {note.title} </strong>
              <button> Edit </button>
            </div>
            <p> {note.body && note.body.substr(0, 80) + "..."} </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Sidebar;
