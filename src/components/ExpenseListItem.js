import React, {Component} from 'react';

class ExpenseListItem extends Component {

  render() {
    console.log(this.props.listItem);
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        { this.props.listItem.title }
        <span className="badge badge-primary badge-pill">{ this.props.listItem.amount }</span>
        { this.props.listItem.counter }
      </li>
    )
  }
}

export default ExpenseListItem;