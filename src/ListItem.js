import React from 'react'

export default function ListItem(props) {

    return (
        <div className="row border">
            <div className="col-2 col-sm-1 px-0">
                <button 
                    className="btn" 
                    type="button" 
                    onClick={() => props.markComplete(props.todoItemsObj.ID)} 
                >
                    <i className="bi-circle" />
                </button>
            </div>
            <div className="col-8 col-sm-10 text-start align-self-center ps-0">
                <h5 style={props.todoItemsObj.checked ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>{props.todoItemsObj.itemName}</h5>
            </div>
            <div className="col-2 col-sm-1 text-end px-0">
                <button 
                    className="btn" 
                    type="button"
                    onClick={() => props.deleteItem(props.todoItemsObj.ID)}
                >
                    <i className="bi-x-lg" />
                </button>
            </div>
        </div>
    )
}