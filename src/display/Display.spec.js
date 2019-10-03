// Test: 
// - displays if gate is open/closed and if it is locked/unlocked
// - displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
// - displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise
// - when `locked` or `closed` use the `red-led` class
// - when `unlocked` or `open` use the `green-led` class
import * as rtl from 'react-testing-library';
import React from 'react';
import 'jest-dom/extend-expect';
import Display from './Display';


describe('Display', () => {
    it("should render display component", () => {
        const wrapper = rtl.render(<Display />);
        expect(wrapper.getByTestId(/display/i));
    });
})