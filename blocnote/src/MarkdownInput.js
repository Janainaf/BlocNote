function MarkdownInput({ activeNote }) {
  return (
    <div className="app-main-note-preview">
      <h1 className="preview-title"> {activeNote.title}</h1>
      <div className="markdown-preview"> {activeNote.body}</div>
    </div>
  );
}
export default MarkdownInput;
