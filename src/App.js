import './App.css';
import { Component } from 'react';
// import Header from './Header.js';

class App extends Component {
    constructor() {
        super()
        this.state = {
            value: "",
            todoItems: [],
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

        this.setState( {
            value: "",
        });
    }

    addItem(todoItem) {
        this.setState({
            todoItems: this.state.todoItems.concat( {
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
            <div className="App">
                <div className="row">
                    <h1>To-Do App</h1>
                </div>
                <div className="row">
                    <div className="col-6 offset-3">
                        <div className="input-group mb-3 border">
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
            </div>
        );
    }
}

export default App;
