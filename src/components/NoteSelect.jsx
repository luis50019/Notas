export function NoteSelect({note}) {
  return (
    <>
      <div className="my-notes-header">
        <textarea
          className={`my-notes-header-name active`}
          rows={2}
          cols={50}
          value={note.title}
        />
        <div className="my-notes-header-info">
          <span>{`Category: ${note.category}`}</span>
          <span>{`Date: ${note.date}`}</span>
        </div>
      </div>
      <hr className="separator-line" />
      <div className="my-notes-main">
        <h2 className="my-notes-main-title">NOTE: </h2>
        <textarea
          className={`my-notes-main-text active`}
          value={note.text}
        >
        </textarea>
      </div>
    </>
  )
}