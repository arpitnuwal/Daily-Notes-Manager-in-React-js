import React, { useState } from "react";
import { FaTrash, FaPlus } from "react-icons/fa";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const addNote = () => {
    if (!title || !desc) return;

    const newNote = {
      id: Date.now(),
      title,
      desc,
      date: new Date().toLocaleString(),
    };

    setNotes([newNote, ...notes]);
    setTitle("");
    setDesc("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">📝 My Notes</h1>

      {/* Add Note */}
      <div className="card p-3 shadow mb-4">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="form-control mb-2"
          placeholder="Write your note..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>

        <button className="btn btn-primary" onClick={addNote}>
          <FaPlus /> Add Note
        </button>
      </div>

      {/* Notes List */}
      <div className="row">
        {notes.map((note) => (
          <div className="col-md-4 mb-3" key={note.id}>
            <div className="card note-card shadow-sm">
              <div className="card-body">
                <h5>{note.title}</h5>
                <p>{note.desc}</p>
                <small className="text-muted">{note.date}</small>
                <br />
                <button
                  className="btn btn-danger btn-sm mt-2"
                  onClick={() => deleteNote(note.id)}
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;