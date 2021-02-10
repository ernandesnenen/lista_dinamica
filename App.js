import React, {useState}  from 'react';
import { v1 as uuidv1 } from 'uuid';

import NewNote from './NewNote';
import NoteList from './NoteList';


const App = () => {
    const  [notes, setNotes] = useState([{id:1, text:"A"},  {id:2, text:"B"}, {id:3, text:"C"}])

// -----------------------------------------------------------------------------------------
       function handleAddNote (text)  {       
        setNotes(notes.concat({id: uuidv1() , text}));
    }
// ---------------------------------------------------------------------------------
    function handleMove  (direction, index) { 
           
        const newNotes = Array.from(notes)
        // removeItemNode recebe o retorno do metodo splice que é um array com os elementos removidos  
        const removeItemNode = newNotes.splice(index, 1)[0];       
        if(direction === "up"){
          newNotes.splice(index -1, 0, removeItemNode);  
        }else{
            newNotes.splice(index +1, 0, removeItemNode);   
        }         
        setNotes(newNotes)
    }

// ----------------------------------------------------------------------------------
    function handleDelete(id) {        
            const newNotes = Array.from(notes);
            const index = newNotes.findIndex(note => note.id === id);
            newNotes.splice(index, 1);       
            setNotes(newNotes)
        }

    // ----------------------------------------------------------------------------
    function handleEdit  (id, text){        
            const newNotes = notes.slice();
            const index = newNotes.findIndex(note => note.id === id);
            newNotes[index].text = text;    
            setNotes(newNotes)           
        }
    // --------------------------------------------------------------------------------------  
        return(
            <div className="container">
                <NewNote onAddNote = {handleAddNote}/>
                <NoteList
                notes={notes}
                onMove={handleMove}
                onDelete={handleDelete}
                onEdit={handleEdit}
                />
            </div>
        )
  
}  

 export default App;