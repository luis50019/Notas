import { SelectOption } from "./SelectOption"
export function NewNote({cancel, addNewNota}) {
  
  const handleSubmit =(event)=>{
    event.preventDefault();

  }

  return (
    <form name="form">
      <div className="my-notes-header">
        <textarea
          className={`my-notes-header-name active`}
          rows={2}
          cols={50}
          autoFocus
          placeholder="title"
        />
        <div className="my-notes-header-buttons">
          <button type="submit" className="btn-save" onClick={handleSubmit}>Save</button>
          <button type="button" className="btn-cancel" onClick={() => cancel()}>
            Cancel
          </button>
        </div>
        <div className="my-notes-header-info">
          <span>Category: <SelectOption isNewNote={true}/></span>
          <span>Date: 12/05/24 </span>
        </div>
      </div>
      <hr className="separator-line" />
      <div className="my-notes-main">
          <h2 className="my-notes-main-title">NOTE: </h2>
          <textarea
            className={`my-notes-main-text active`}
            placeholder="write you note"
          ></textarea>
        </div>
    </form>
  )
}