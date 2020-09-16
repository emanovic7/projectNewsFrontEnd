import React from 'react';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

// enzyme's react adapter setup
Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
  Factory function to create a shallowWrapper for the App component
  *@function testSetup 
  *@returns { ShallowWrapper }
*/
const testSetup = () => shallow(<App />);

const findByAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
}

//tests 
test('renders without error', () => {
  const wrapper = testSetup();
  const appComponent = findByAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('renders heading', () => {
  const wrapper = testSetup();
  const header = findByAttr(wrapper, 'title-header');
  expect(header.length).toBe(1);
})
