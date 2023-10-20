import React from "react"
import "./style.css"

export default function Note(props) {

    const [isDone, setIsDone] = React.useState(false)

    function toggle() {
        setIsDone(prev => !prev)
    }

    return(
        <div className="list_item">
            <input type="checkbox" className="ui-checkbox" onClick={toggle}></input>
            { !isDone
                ? <p className="note_text">{props.text}</p>
                : <p className="note_text_done">{props.text}</p>
            }
            {/* <button className="delete_item_button" onClick={props.deleteNote}>Delete</button> */}
            <i class="gg-trash" onClick={props.deleteNote}></i>
        </div>
    )
}