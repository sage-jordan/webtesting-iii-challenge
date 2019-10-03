// Test away!
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