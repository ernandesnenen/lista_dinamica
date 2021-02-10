import React,{useState, useRef} from 'react';
import classNames from "classnames";


const Note = ({note, onDelete, onMove, index, total, onEdit}) => {
    const [isEdit, setisEdit] = useState(false)
    const c = useRef()

    function handleEdit(){
        setisEdit(true)
    }


    function handleCancel(){
        setisEdit(false)
    }
    function handleSave () {
        onEdit(note.id, c.current.value);
        setisEdit(false)
    }    
    return (
        <div  className={"item"}>
         {isEdit ?(
         <input type="text" 
         className="edit_note"
         defaultValue={note.text} 
         ref={c}
         />):(
         <span className="note_text">{note.text}</span>
) } 

{/* ----------------------------------------------------- */}
{isEdit && (
<React.Fragment>
<button 
className="note_button"
onClick={handleCancel}
>
<i className="material-icons note_button_red">
    cancel
</i>
</button>
{/* ------------------------------------------------------------------- */}
<button 
className="note_button note_button_green"
onClick={handleSave}
>
<i className="material-icons">
    done_outline
</i>
</button>
</React.Fragment>
        )}  

{/* -------------------------------------------------------------- */}

<button 
disabled={isEdit}
    className="note_button"
    onClick={() => { 
        handleEdit();
     }}
    >
    <i className="material-icons">
        edit
    </i>
    </button>
{/* ---------------------------------------------------------------------------- */}
    <button 
    disabled= {isEdit}
    className="note_button"
    onClick={() => { onDelete(note.id) }}
    >
    <i className="material-icons">
        delete
    </i>
    </button>
{/* ------------------------------------------------------------------------------------- */}
    <button 
    className={classNames("note_button", {"note_button--hidden":index === 0} )}
    onClick={() => { onMove("up", index)}}
    >
    <i className="material-icons">
        keyboard_arrow_up
    </i>
    </button>
    {/* ----------------------------------------------------------------------------------------------- */}
    <button   className={classNames("note_button",{"note_button--hidden":index === total -1} )}
    onClick={() => { onMove("dow", index)}}
    >
    <i className="material-icons">
    keyboard_arrow_down
    </i>
    </button>     
    </div>     
     );
    
}
export default Note;