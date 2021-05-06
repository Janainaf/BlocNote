import ReactMarkdown from "react-markdown";
import Showdown from "showdown";
const converter = new Showdown.Converter();

function MarkdownInput({ activeNote }) {
  return (
    <div className="app-main-note-preview">
      <h1 className="preview-title"> {activeNote.title}</h1>
      {/* <div className="markdown-preview">
        {converter.makeHtml(activeNote.body)}
      </div> */}
      <ReactMarkdown className="markdown-preview">
        {activeNote.body}
      </ReactMarkdown>
    </div>
  );
}
export default MarkdownInput;
