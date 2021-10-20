import './App.css';
import { Component } from 'react';
import List from './List.js';
// import Header from './Header.js';

class App extends Component {
    constructor() {
        super()
        this.state = {
            value: "",
            todoItems: [
                {
                    ID: Date.now(),
                    itemName: "todo thing",
                    checked: false,
                    deleted: false
                }
            ],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit() {
        this.addItem(this.state.value);

        this.setState({
            value: "",
        });
    }

    addItem(todoItem) {
        this.setState({
            todoItems: this.state.todoItems.concat({
                ID: Date.now(),
                itemName: todoItem,
                checked: false,
                deleted: false,
            })
        });
    }

    componentDidUpdate() {
        console.log(this.state.value);
        console.log(this.state.todoItems);
    }

    render() {
        return (
            <div>
                <div className="row mt-5 text-center">
                    <h1>To-Do App</h1>
                </div>
                <div className="row">
                    <div className="col-8 offset-2 px-0 border">
                        <div className="input-group">
                            <button
                                className="btn"
                                type="button"
                                id="button-addon1"
                                onClick={this.handleSubmit}
                            >
                                <i className="bi-plus-lg" />
                            </button>
                            <input
                                type="text"
                                className="form-control border-0"
                                placeholder="What needs to be done?"
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                </div>
                <List itemList={this.state.todoItems} />
            </div>
        );
    }
}

export default App;
