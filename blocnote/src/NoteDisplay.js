import MarkdownInput from "./MarkdownInput";

function NoteDisplay({ activeNote }) {
  if (!activeNote)
    return <div className="no-active-note"> No note selected</div>;

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input type="text" id="title" value={activeNote.title} autoFocus />
        <textarea id="body" placeholder="write your note here..." />
      </div>

      <MarkdownInput activeNote={activeNote} />
    </div>
  );
}
export default NoteDisplay;
