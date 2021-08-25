import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import Note from './components/Note';
import './App.scss';

function App() {
  const [notes, setNotes] = useState([]);

  const addNewNote = () => {
    setNotes([...notes, { id: notes.length + 1, text: '' }]);
  };

  return (
    <div className="App">
      <button type="button" className="add" onClick={addNewNote}>
        <FaPlus /> Add note
      </button>
      {notes.length > 0 &&
        notes.map((note) => (
          <Note key={note.id} note={note} notes={notes} setNotes={setNotes} />
        ))}
    </div>
  );
}

export default App;
