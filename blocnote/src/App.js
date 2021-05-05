import "./App.css";
import Sidebar from "./Sidebar";
import NoteDisplay from "./NoteDisplay";
import MarkdownInput from "./MarkdownInput";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <NoteDisplay />
      <MarkdownInput />
    </div>
  );
}

export default App;
