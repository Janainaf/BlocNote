import MarkdownInput from "./MarkdownInput";

function NoteDisplay({ activeNote, onUpdateNote }) {
  const onEditField = (value, bodyvalue) => {
    onUpdateNote({
      title: value,
      id: activeNote.id,
      body: bodyvalue,
    });
  };
  const onEditFieldBody = (value, titlevalue) => {
    onUpdateNote({
      body: value,
      id: activeNote.id,
      title: titlevalue,
    });
  };
  if (!activeNote)
    return <div className="no-active-note"> No note selected</div>;

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          value={activeNote.title}
          onChange={(e) => onEditField(e.target.value, activeNote.body)}
          autoFocus
        />
        <textarea
          id="body"
          placeholder="write your note here..."
          value={activeNote.body}
          onChange={(e) => onEditFieldBody(e.target.value, activeNote.title)}
        />
      </div>

      <MarkdownInput activeNote={activeNote} />
    </div>
  );
}
export default NoteDisplay;
