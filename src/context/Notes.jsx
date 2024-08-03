import { createContext, useContext, useState } from "react";
import ResNotes from "../data/notes.json"

const ContextNotes = createContext('');
export function useContextNotes(){
  const context = useContext(ContextNotes);
  if(!context) return null
  return context
}

export function Notes({children}){
  const [Notes,setNotes] = useState([]);

  const getAllNotes =()=>{
    setNotes(ResNotes);
    return ;
  }

  const getNotesCategory = (category)=>{
    if(category === "All"){
      getAllNotes()
      return
    }
    setNotes(ResNotes.filter(note => note.category === category));
    return ;
  }

  const newNote = (note)=>{
    note.id = ResNotes.length;
    setNotes([note,...ResNotes]);
  }

  const deleteNote =(id)=>{
    setNotes(ResNotes.filter(note => note.id !== id));
  }

  return(
    <ContextNotes.Provider value={{
      getAllNotes,
      getNotesCategory,
      newNote,
      deleteNote,
      Notes
    }}>
      {children}
    </ContextNotes.Provider>
  )
}