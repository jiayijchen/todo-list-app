import React from 'react'

export default function Header() {
    return (
        <div>
            <div className="row">
                <h1>To-Do App</h1>
            </div>
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="input-group mb-3 border">
                        <button className="btn" type="button" id="button-addon1"><i class="bi-plus-lg"></i></button>
                        <input type="text" class="form-control border-0" placeholder="Enter an item.."></input>
                    </div>
                </div>
            </div>
        </div>
    )
}
