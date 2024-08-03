import "../styles/MyNote.css"

export function MyNote({isNewNote}) {
  return (
    <>
      <div className="my-notes-header">
        <textarea className={`my-notes-header-name ${!isNewNote ? "":"active"}`}
          rows={2} cols={50}
          value={"My note"} 
          disabled = {!isNewNote? true:false}>
        </textarea>
        <div className="my-notes-header-info">
          <span>Category: normal </span>
          <span>Date: 12/05/24 </span>
        </div>
      </div>
      <hr className="separator-line"/>
      <div className="my-notes-main">
        <h2 className="my-notes-main-title">NOTE: </h2>
        <textarea className={`my-notes-main-text ${!isNewNote?"":"active"}`} 
          disabled = {!isNewNote? true: false}>
          Lorem ipsum dolor sit amet consectetur, 
          adipisicing elit. Velit repudiandae natus
          delectus, magni doloribus incidunt fugit
          quisquam officiis facilis blanditiis quasi 
          sunt possimus? Tempora id vel tenetur saepe
          itaque obcaecati.
        </textarea>
      </div>
    </>
  )
}