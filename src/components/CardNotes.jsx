import "../styles/CardNote.css"
import { MdDelete } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";

export function CardNote({note,select}){

  return(
    <div className="card-note" onClick={()=>select(note)}>
      <div className="card-note-info">
        <p className="card-note-info-name">
          {note.title}
          </p>
        <span className="card-note-info-date">creation:{note.date}</span>
        <span className="card-note-info-category"> category: {note.category}</span>
      </div>
      <div className="card-note-option">
        <button className="card-note-option-edit">
          <RiEdit2Fill className="icon-option-edit"/>
        </button>
      
        <button className="card-note-option-delet">
          <MdDelete className="icon-option-delet"/>
        </button>
      </div>
    </div>
  )
}