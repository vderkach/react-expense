import React, {Component} from 'react';
import ExpenseListItem from './ExpenseListItem';

class ExpenseList extends Component {

  render() {
    return (
      <ul className='list-group'>
        { this.props.listItems.map((listItem) =>
          <ExpenseListItem listItem={ listItem } key={ listItem.id } />
        )}     
      </ul>
    )
  }
}

export default ExpenseList;