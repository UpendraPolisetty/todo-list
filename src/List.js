import React from 'react'
import "./App.css"

const List = ({Todos,Delete}) => {
    return (
        <div>
            {Todos.map((todo,index)=>
                <div key={index}>
                    <h2>{todo} &nbsp; <button onClick={()=>Delete(index)}>Delete</button></h2>
                </div>
            )}
        </div>
    )
}

export default List
