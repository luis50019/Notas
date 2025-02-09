import "../styles/SelectOption.css"
export function SelectOption({changeCategory, isNewNote = false}) {
  
  const handleChange=(e)=>{
    const category = e.target.value;
    changeCategory(category);
  }
  return (
    <select className="container-select" onChange={handleChange}>
      {isNewNote?"":<option className="select-option" value={"All"}>All</option>}
      <option className="select-option" value={"Normal"}>Normal</option>
      <option className="select-option" value={"Personal"}>Personal</option>
      <option className="select-option" value={"study"}>study</option>
    </select>
  )
}