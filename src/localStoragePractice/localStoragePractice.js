import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const LocalStoragePractice = () => {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const myNotes = localStorage.getItem("notes"); // To get the notes array from local Storage
    if (myNotes) setNotes(JSON.parse(myNotes));
  }, []);

  function deleteNote(index) {
    const updatedNotes = notes.filter((_, i) => i != index);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes)); // To delete the notes from the local Storage
  }

  function addNotes(event) {
    event.preventDefault();
    if (text.trim() != "") {
      const updatedNotes = [...notes, text];
      setNotes(updatedNotes);
      localStorage.setItem("notes", JSON.stringify(updatedNotes)); // To add the note in local Storage
      toast.success("Note added successfully!");
    } else {
      toast.error("Please write something");
    }
    setText("");
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
        <button className="border px-2" onClick={addNotes}>
          Add
        </button>
      </form>
      {notes.map((item, index) => (
        <div className="flex justify-between my-2" key={index}>
          <h1>{item}</h1>
          <button className="border text-sm" onClick={() => deleteNote(index)}>
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default LocalStoragePractice;
