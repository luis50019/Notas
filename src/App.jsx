import { AllNotes } from "./components/AllNotes"
import { Seeker } from "./components/Seeker"
import { MyNote } from "./components/MyNote"
import { useState } from "react"



function useNewNote(){
  const [newNote,setNewNote] = useState(false);
  const isNewNote =()=>{
    setNewNote(true)
  }
  const cancelNewNote =()=>{
    setNewNote(false)
  }
  return {newNote,isNewNote,cancelNewNote}
}

export default function App() {
  const {newNote,isNewNote,cancelNewNote} = useNewNote();
  
  return (
    <>
      <div className="container-all-notes">
        <h1 className="all-notes-name">
          MY NOTES
        </h1>
        <Seeker/>
        <AllNotes isNewNote={isNewNote}/>
      </div>
      <form className="container-my-notes">
        <MyNote isNewNote={newNote} cancel={cancelNewNote}/>
      </form>
    </>
  )
}