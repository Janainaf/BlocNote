import MarkdownInput from "./MarkdownInput";

function NoteDisplay({ activeNote, onUpdateNote }) {
  const onEditField = (key, value) => {
    onUpdateNote({
      id: activeNote.id,
      [key]: value,
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
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />
        <textarea
          id="body"
          placeholder="write your note here..."
          value={activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)}
        />
      </div>

      <MarkdownInput activeNote={activeNote} />
    </div>
  );
}
export default NoteDisplay;
