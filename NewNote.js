
import React, {useState} from 'react';

const NewNote = ({onAddNote}) => {
   const [text, setText] = useState('')
     return (
            <div className="caixaNote">
            <input type="text" className="note"
             placeholder="digite sua nota"
             value ={text}
             onChange={ event => {
                setText(
                      event.target.value
                 )
             }}
             onKeyPress = { event => {
                if(event.key === "Enter"){
                    onAddNote(event.target.value);
                    setText('')
                }
            }}
            />
        </div>
        )
    
}
 
export default NewNote;
