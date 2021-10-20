import React from 'react'

export default function List(props) {
    return (
        <div className="row">
            <div className="col-8 offset-2">
                {props.itemList.map(item => (
                    <div className="row border">
                        <div className="col-2 px-0">
                            <button className="btn" type="button">
                                <i className="bi-circle" />
                            </button>
                        </div>
                        <div className="col-8 text-start align-self-center">
                            <h5 key={item.ID}>{item.itemName}</h5>
                        </div>
                        <div className="col-2 text-end px-0">
                            <button className="btn" type="button">
                                <i className="bi-x-lg" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
