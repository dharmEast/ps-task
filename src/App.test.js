import { mount, configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });
const AppWrapper = mount(<App/>);
describe('CreateMove Snapshot', () => {
  it('to match Snapshot', () => {
    expect(AppWrapper).toMatchSnapshot();
  });
});
