import './App.css';
import { Component } from 'react';
import ListItem from './ListItem.js';
// import List from './List.js';
// import Header from './Header.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            value: "",
            filterSelect: "",
            todoItemsArr: [
                {
                    ID: Date.now(),
                    itemName: "Example Task",
                    checked: false,
                    deleted: false
                }
            ],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.markComplete = this.markComplete.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
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
            todoItemsArr: [...this.state.todoItemsArr, {
                ID: Date.now(),
                itemName: todoItem,
                checked: false,
                deleted: false,
            }]
        });
    }

    markComplete(todoID) {
        this.setState(prevState => {
            let foundIndex = prevState.todoItemsArr.findIndex(item => item.ID === todoID);

            const newArr = [...prevState.todoItemsArr];

            newArr[foundIndex] = {
                ...prevState.todoItemsArr[foundIndex],
                checked: !prevState.todoItemsArr[foundIndex].checked
            }

            return {
                todoItemsArr: newArr
            }
        })
    }

    deleteItem(todoID) {
        this.setState(prevState => {
            let foundIndex = prevState.todoItemsArr.findIndex(item => item.ID === todoID);

            const newArr = [...prevState.todoItemsArr];

            newArr[foundIndex] = {
                ...prevState.todoItemsArr[foundIndex],
                deleted: true,
            }

            return {
                todoItemsArr: newArr
            }
        })
    }

    componentDidMount() {
        console.log(this.state.todoItemsArr);
    }

    componentDidUpdate() {
        console.log(this.state.value);
        console.log(this.state.todoItemsArr);
    }

    render() {
        return (
            <div className="col-8 offset-2">
                <div className="row mt-5 text-center">
                    <h1>To-Do App</h1>
                </div>
                <div className="row border">
                    <div className="input-group px-0">
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
                            className="form-control border-0 ps-1"
                            placeholder="What needs to be done?"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                {this.state.todoItemsArr.map(todoItemsObj => (
                    <ListItem key={todoItemsObj.ID} todoItemsObj={todoItemsObj} markComplete={this.markComplete} deleteItem={this.deleteItem} />
                ))}
                {this.state.todoItemsArr.length > 0 &&
                    <div className="row">
                        <div className="col-3">
                            <p className="fw-light text-muted">{this.state.todoItemsArr.length} items left</p>
                        </div>
                        <div className="col-6 text-center">
                            <div className="btn-group" role="group">
                                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                                <label class="btn btn-outline-secondary" for="btnradio1">Radio 1</label>
                                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                                <label class="btn btn-outline-secondary" for="btnradio2">Radio 2</label>
                                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                                <label class="btn btn-outline-secondary" for="btnradio3">Radio 3</label>
                            </div>
                        </div>
                                    <div className="col-3 pe-0">
                                        <button type="button" className="btn btn-link float-end pe-0">Clear Completed</button>
                                    </div>
                    </div>
                }
            </div>
        );
    }
}

export default App;
