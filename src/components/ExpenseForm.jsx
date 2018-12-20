import React, { Component } from "react";
import ExpenseList from "./ExpenseList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: "",
      title: "",
      list: [],
      counter: 0
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    var newItems = [...this.state.list];
    var length = newItems.length;
    newItems[length] = {};
    newItems[length].id = this.state.counter + 1;
    newItems[length].amount = this.state.amount;
    newItems[length].title = this.state.title;

    this.setState({ list: newItems });
    this.setState({ amount: "", title: "" });
  }

  render() {
    return (
      <div className="container app-container">
        <form onSubmit={e => this.onSubmit(e)}>
          <h4>Tracker</h4>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Title: </span>
            </div>
            <input
              type="text"
              onChange={this.onChange}
              name="title"
              value={this.state.title}
              className="form-control"
              placeholder="title"
              aria-label="Title"
              aria-describedby="Title"
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Amount: </span>
            </div>
            <input
              type="text"
              onChange={this.onChange}
              name="amount"
              value={this.state.amount}
              className="form-control"
              placeholder="amount"
              aria-label="Amount"
              aria-describedby="Amount"
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="submit"
              name="submit"
              value="Add"
              className="btn btn-success"
            />
          </div>
        </form>

        <ExpenseList listItems={this.state.list} />
      </div>
    );
  }
}

export default App;
