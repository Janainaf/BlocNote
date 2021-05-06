import { useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Sidebar from "./Sidebar";
import NoteDisplay from "./NoteDisplay";
import MarkdownInput from "./MarkdownInput";

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);
  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "The title",
      body: "what",
      lastModified: Date.now(),
    };
    setNotes([newNote, ...notes]);
  };

  const onEditNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onEditNote={onEditNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <NoteDisplay activeNote={getActiveNote()} />
    </div>
  );
}

export default App;
