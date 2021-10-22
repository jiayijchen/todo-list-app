import React from 'react'

export default function ListItem(props) {

    return (
        <div className="row border">
            <div className="col-auto px-0">
                <button 
                    className="btn" 
                    type="button" 
                    onClick={() => props.markComplete(props.todoItemsObj.ID)} 
                >
                    <i className={props.todoItemsObj.checked ? "bi-check-circle" : "bi-circle"} />
                </button>
            </div>
            <div className="col-8 col-sm text-start align-items-center pt-2 ps-1">
                <div style={props.todoItemsObj.checked ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>{props.todoItemsObj.itemName}</div>
            </div>
            <div className="col-2 col-sm text-end px-0">
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