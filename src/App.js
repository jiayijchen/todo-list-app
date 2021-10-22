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
            filterSelect: "all",
            todoItemsArr: [
                // {
                //     ID: Date.now(),
                //     itemName: "Example Task",
                //     checked: false,
                //     deleted: false
                // }
            ],
        };

        this.clearCompleted = this.clearCompleted.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.markComplete = this.markComplete.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.enterKey = this.enterKey.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit() {
        if (this.state.value !== "" && !this.state.value.toLowerCase().includes("design")) {
            this.addItem(this.state.value);
        }

        this.setState({
            value: "",
        });
    }

    addItem(todoItem) {
        const id = Date.now();
        const todoItemObj = {
            ID: id,
            itemName: todoItem,
            checked: false,
            deleted: false
        };

        this.setState({
            todoItemsArr: [...this.state.todoItemsArr, todoItemObj]
        });

        localStorage.setItem(id, todoItemObj);
    }

    enterKey(event) {
        if (event.key === "Enter") {
            this.handleSubmit();
        }
    }

    markComplete(todoID) {
        this.setState(prevState => {
            let foundIndex = prevState.todoItemsArr.findIndex(item => item.ID === todoID);

            const newArr = [...prevState.todoItemsArr];

            const newTodoObj = {
                ...prevState.todoItemsArr[foundIndex],
                checked: !prevState.todoItemsArr[foundIndex].checked
            }

            newArr[foundIndex] = newTodoObj;

            localStorage.setItem(todoID, newTodoObj);

            return { todoItemsArr: newArr }
        })
    }

    deleteItem(todoID) {
        this.setState(prevState => {
            let foundIndex = prevState.todoItemsArr.findIndex(item => item.ID === todoID);

            const newArr = [...prevState.todoItemsArr];

            const newTodoObj = {
                ...prevState.todoItemsArr[foundIndex],
                deleted: true
            }

            newArr[foundIndex] = newTodoObj;

            // localStorage.setItem(todoID, newTodoObj);

            localStorage.removeItem(todoID);

            return { todoItemsArr: newArr }
        })
    }

    clearCompleted() {
        this.setState(prevState => {
            const newArr = prevState.todoItemsArr.map(item => {
                if (!item.deleted && item.checked) {
                    item.deleted = true;
                }
                return item;
            });

            return { todoItemsArr: newArr }
        })

        // localStorage.clear();
    }

    // componentDidMount() {
    //     console.log(this.state.todoItemsArr);
    // }

    // componentDidUpdate() {
    //     console.log(this.state.value);
    //     console.log(this.state.todoItemsArr);
    // }

    render() {
        let numOfItems = this.state.todoItemsArr.filter(item => !item.deleted).length;

        let filteredItemsArr = [];

        if (this.state.filterSelect === "all") {
            filteredItemsArr = this.state.todoItemsArr.filter(item => !item.deleted);
        } else if (this.state.filterSelect === "active") {
            filteredItemsArr = this.state.todoItemsArr.filter(item => !item.deleted && !item.checked);
        } else if (this.state.filterSelect === "completed") {
            filteredItemsArr = this.state.todoItemsArr.filter(item => !item.deleted && item.checked);
        }

        return (
            <div className="col-8 offset-2">
                <div className="row mt-5 mb-2 text-center">
                    <div className="h1 d-inline-block" id="title">Tod<i className="h4 bi-check2-circle" /><strong>App</strong></div>
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
                            onKeyPress={this.enterKey}
                        />
                    </div>
                </div>
                {filteredItemsArr.length > 0 &&
                    filteredItemsArr.map(todoItemsObj => (
                        <ListItem key={todoItemsObj.ID} todoItemsObj={todoItemsObj} markComplete={this.markComplete} deleteItem={this.deleteItem} />
                    ))}
                {numOfItems > 0 &&
                    <div className="row border">
                        <div className="col-3 pt-1">
                            <p className="fw-light text-muted my-0">{numOfItems} items left</p>
                        </div>
                        <div className="col-6 text-center py-1">
                            <div className="btn-toolbar ps-3">
                                <input
                                    type="radio"
                                    className="btn-check"
                                    name="btnradio" id="btn-all"
                                    autoComplete="off"
                                    onClick={() => this.setState({ filterSelect: "all" })}
                                    defaultChecked
                                />
                                <label className="btn btn-outline-secondary mx-1 py-0" htmlFor="btn-all">All</label>
                                <input
                                    type="radio"
                                    className="btn-check"
                                    name="btnradio"
                                    id="btn-active"
                                    autoComplete="off"
                                    onClick={() => this.setState({ filterSelect: "active" })}
                                />
                                <label className="btn btn-outline-secondary mx-1 py-0" htmlFor="btn-active">Active</label>
                                <input
                                    type="radio"
                                    className="btn-check"
                                    name="btnradio"
                                    id="btn-complete"
                                    autoComplete="off"
                                    onClick={() => this.setState({ filterSelect: "completed" })}
                                />
                                <label className="btn btn-outline-secondary mx-1 py-0" htmlFor="btn-complete">Completed</label>
                            </div>
                        </div>
                        <div className="col-3 pe-0">
                            {this.state.todoItemsArr.filter(item => !item.deleted && item.checked).length > 0 &&
                                <button
                                    type="button"
                                    className="btn btn-link float-end pe-1 pt-1 pb-0 text-muted"
                                    onClick={() => this.clearCompleted()}
                                >
                                    clear completed
                            </button>}
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default App;
