import React from "react";
import { shallow } from "enzyme";

import App from "../App";
import ExpenseForm from "../ExpenseForm";

var wrapper;

beforeEach(() => {
	wrapper = shallow(<App />);
});

it("renders <ExpenseForm /> component", () => {
	expect(wrapper.find(ExpenseForm).length).toEqual(1);
});
