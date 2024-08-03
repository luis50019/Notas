import "../styles/Seeker.css"
import { FaSearch } from "react-icons/fa";
export function Seeker() {
  return (
    <div className="all-notes-seeker">
      <form className="seeker-form">
        <input className="seeker-form-input"
          placeholder="note 1, note 2 ..."/>
        <button className="seeker-form-button">
        <FaSearch color="rgb(255,91,15)"/>
        </button>
      </form>
      <span className="seeker-mensage-error">
       
      </span>
    </div>
  )
}