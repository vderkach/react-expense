import React, { Component } from "react";
import PropTypes from "prop-types";

class ExpenseListItem extends Component {
  render() {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {this.props.listItem.title}
        <span className="badge badge-primary badge-pill">
          {this.props.listItem.amount}
        </span>
        {this.props.listItem.counter}
      </li>
    );
  }
}

ExpenseListItem.propTypes = {
  listItem: PropTypes.object
};

export default ExpenseListItem;
