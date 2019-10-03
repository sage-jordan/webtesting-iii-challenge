// Test: shows the controls and display
import React from 'react';
import * as rtl from 'react-testing-library';
import Dashboard from './Dashboard';

describe('Dashboard', () => {
    it("should render display and controls", () => {
        const wrapper = rtl.render(<Dashboard />);
        expect(wrapper.getByTestId(/controls/i));
        expect(wrapper.getByTestId(/display/i));        
    });
})