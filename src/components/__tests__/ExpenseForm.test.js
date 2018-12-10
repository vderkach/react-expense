import React from 'react';
import { shallow } from 'enzyme';

import ExpenseForm from '../ExpenseForm';
import ExpenseList from '../ExpenseList';

var wrapper;

beforeEach(() => {
  wrapper = shallow(<ExpenseForm/>);
});

it('renders <ExpenseList /> component', () => {
	expect(wrapper.find(ExpenseList).length).toEqual(1);
});

it('contains \'title\' and \'amount\' inputs', () => {
	expect(wrapper.find('[name=\'title\']').length).toEqual(1);
	expect(wrapper.find('[name=\'amount\']').length).toEqual(1);
});

it('clears input fields on submit', () => {
	//expect(wrapper.find(ExpenseListItem).length).toEqual(0);
	wrapper.find('form').first().simulate('submit', {
    preventDefault: () => {
    },
    target: [
    	{
    		amount: '111', 
    		title: 'qqq', 
    		list: {
    			id: 0, 
    			amount: "555", 
    			title: "ttt"
    		}
    	}
    ]
  });
  console.log(wrapper.find('[name=\'amount\']').first().props().value);
	expect(wrapper.find('[name=\'amount\']').first().props().value.to.equal(''));
	expect(wrapper.find('[name=\'title\']').first().props().value.to.equal(''));
});