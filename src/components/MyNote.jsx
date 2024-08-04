import { useContextNotes } from "../context/Notes";
import "../styles/MyNote.css";
import { NewNote } from "./NewNote";
import { NoteSelect } from "./NoteSelect";

export function MyNote({ isNewNote, cancel}) {
  const {addNewNota,noteSelect} = useContextNotes();
  return (
    <>
      {
        isNewNote ? 
          <NewNote cancel={cancel} addNewNota={addNewNota} /> : 
          noteSelect.id &&<NoteSelect note={noteSelect} />
      }
    </>
  );
}
