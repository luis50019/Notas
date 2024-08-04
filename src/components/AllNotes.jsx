import { SelectOption } from "./SelectOption"
import { IoMdAddCircle } from "react-icons/io";
import { CardNote } from "./CardNotes";
import "../styles/AllNotes.css"
import { useContextNotes } from "../context/Notes";
import { useEffect } from "react";

export function AllNotes({ isNewNote }) {
  const {getAllNotes,getNotesCategory,Notes,selectNote} = useContextNotes();
  useEffect(()=>{
    getAllNotes()
  },[])
  return (
    <>
      <div className="contaier-all-notes-list">
        <div className="all-notes-list-header">
          <p className="all-notes-list-header-title">
            All Notes
          </p>
          <div className="all-notes-list-header-options">
            <IoMdAddCircle className="btn-add-note"
              onClick={()=> isNewNote()} />
            <SelectOption changeCategory={getNotesCategory}/>
          </div>
        </div>
        <div className="all-notes-list">
          {
            Notes.map(note =>(
              <CardNote note={note} key={note.id} select={selectNote}/>
            ))
          }
        </div>
      </div>
    </>
  )
}
