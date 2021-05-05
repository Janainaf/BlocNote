import MarkdownInput from "./MarkdownInput";

function NoteDisplay() {
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input type="text" id="title" autoFocus />
        <textarea id="body" placeholder="write your note here..." />
      </div>
      <MarkdownInput />
    </div>
  );
}
export default NoteDisplay;
