import { useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Sidebar from "./Sidebar";
import NoteDisplay from "./NoteDisplay";

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);
  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "what",
      lastModified: Date.now(),
    };
    setNotes([newNote, ...notes]);
  };

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <NoteDisplay />
    </div>
  );
}

export default App;
