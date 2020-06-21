// Test: 
// - displays if gate is open/closed and if it is locked/unlocked
// - displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
// - displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise
// - when `locked` or `closed` use the `red-led` class
// - when `unlocked` or `open` use the `green-led` class
import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Display from './Display';
import 'jest-dom/extend-expect';

describe('<Display />', ()=>{
    it('matches snapshot', () => {
        const tree = renderer.create(<Display />); 
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('should display red-led while locked', () => {
        const component = render(<Display closed={true} locked={true}/>)
        const display = component.getByText('Locked')
        expect(display).toHaveClass('red-led')
    });

    it('should display green-led while unlocked', () => {
        const component = render(<Display closed={true} locked={false}/>)
        const displaygreen = component.getByText('Unlocked')
        expect(displaygreen).toHaveClass('green-led')
    });

    it('should display locked while locked', () => {
        const component = render(<Display closed={true} locked={true}/>)
        component.getByText('Locked')
    });

    it('should display unlocked while unlocked', () => {
        const component = render(<Display closed={true} locked={false}/>)
        component.getByText('Unlocked')
    });

    it('should display red-led when closed', () => {
        const component = render(<Display closed={true} locked={false}/>)
        const displayclosed = component.getByText('Closed')
        expect(displayclosed).toHaveClass('red-led')
    });

    it('should display green-led while open', () => {
        const component = render(<Display closed={false} locked={false}/>)
        const displayopen = component.getByText('Open')
        expect(displayopen).toHaveClass('green-led')
    });
});