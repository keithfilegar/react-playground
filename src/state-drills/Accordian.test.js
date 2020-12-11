import React from 'react'
import ReactDOM from 'react-dom'
import Accordian from './Accordian'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('Accordian Component', () => {
    const sections = [
        {
          title: 'Section 1',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          title: 'Section 2',
          content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
        },
        {
          title: 'Section 3',
          content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
        },
    ]

    it('renders without errors', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Accordian />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders empty given no props', () => {
        const wrapper = shallow(<Accordian />);
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it('renders list items without displaying text', () => {
        const wrapper = shallow(<Accordian sections={sections} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it('opens content when button is clicked', () => {
        const wrapper = shallow(<Accordian sections={sections} />);
        wrapper.find('button').at(1).simulate('click');
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it('only displays content for the clicked button', () => {
        const wrapper = shallow(<Accordian sections={sections} />);
        wrapper.find('button').at(1).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})