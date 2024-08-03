import { AllNotes } from "./components/AllNotes"
import { Seeker } from "./components/Seeker"
import { MyNote } from "./components/MyNote"
import { useState } from "react"

export default function App() {
  const [newNote,setNewNote] = useState(false);
  const isNewNote =()=>{
    setNewNote(true)
  }
  return (
    <>
      <div className="container-all-notes">
        <h1 className="all-notes-name">
          MY NOTES
        </h1>
        <Seeker/>
        <AllNotes isNewNote={isNewNote} />
      </div>
      <form className="container-my-notes">
        <MyNote isNewNote={newNote}/>
      </form>
    </>
  )
}