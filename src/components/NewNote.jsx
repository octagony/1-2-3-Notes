import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

const NewNote = ({ addNote }) => {
  const [textNote, setTextNote] = useState("");
  const remainingText = 150;

  const handleChange = (event) => {
    if(remainingText - event.target.value.length >=0){
      setTextNote(event.target.value)
    }
  };

  const saveNote = (event) => {
    if(textNote.trim().length > 0){
      addNote(textNote);
      setTextNote('')
    }
  };

  return (
    <div className="bg-emerald-500 rounded-xl p-4 min-h-[170px] flex flex-col justify-between">
      <textarea
        cols="10"
        rows="8"
        placeholder="Just start type..."
        value={textNote}
        onChange={handleChange}
      ></textarea>
      <div className="flex justify-between items-center">
        <p>Remaining:{remainingText - textNote.length}</p>
        <button className="p-2 bg-transparent border-2 border-lime-200 rounded-2xl shadow-lg transition hover:bg-lime-500" onClick={saveNote}>Save</button>
      </div>
    </div>
  );
};

export default NewNote;
