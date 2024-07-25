import React, { useState } from "react";

const Notes = () => {
  const [notes, setNotes] = useState(["MERN", "Java", "Python"]);
  const [text, setText] = useState("");

  function deleteNote(index) {
    setNotes(notes.filter((element, i) => i != index));
  }

  function addNotes(event){
    event.preventDefault();
    if(text.trim()!=""){
        setNotes([...notes,text])
    }
    else{
        alert("Please enter a string")
    }
    setText('')
  }

  return (
    <div className="w-1/4 p-3">
      <form className="flex space-x-2">
        <input
          type="text"
          placeholder="Enter your note"
          className="outline-none border"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="border px-2" onClick={addNotes}>Add</button>
      </form>
      {notes.map((item, index) => (
        <div className="flex justify-between my-2">
          <h1>{item}</h1>
          <button className="border text-sm" onClick={() => deleteNote(index)}>
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Notes;
