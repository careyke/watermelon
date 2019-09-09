import React from "react";
import { render, mount, shallow } from "enzyme";
import { Button } from "../Button";


describe("Button test", () => {
  it("renders correctly", () => {
    const wrapper = render(<Button>Default</Button>);
    expect(wrapper).toMatchSnapshot();
    const wrapper1 = render(<Button icon='search'>Search</Button>);
    expect(wrapper1).toMatchSnapshot();
    const wrapper2 = render(<Button type='success' icon='search'>Search</Button>);
    expect(wrapper2).toMatchSnapshot();
    const wrapper3 = render(<Button type='success' icon='search' shape='circle'>Search</Button>);
    expect(wrapper3).toMatchSnapshot();
    const wrapper4 = render(<Button type='success' icon='search' direction='col'>Search</Button>);
    expect(wrapper4).toMatchSnapshot();
  });
  it('has correct type className', () => {
    const getType = () => {
      const typeArr = ['default', 'danger', 'primary', 'warning', 'link'];
      const num = ~~(Math.random() * typeArr.length);
      return typeArr[num];
    }
    const type = getType();
    const wrapper = shallow(<Button type={type}>Default</Button>);
    expect(wrapper.hasClass(`btn${type}`)).toEqual(true);
  });
  it('has correct shape className', () => {
    const getShape = () => {
      const arr = ['round', 'circle'];
      const num = ~~(Math.random() * arr.length);
      return arr[num];
    }
    const shape = getShape();
    const wrapper = shallow(<Button shape={shape}>Default</Button>);
    expect(wrapper.hasClass(`btn${shape}`)).toEqual(true);
  });
  it('has correct direction className',()=>{
    const getDirection = () => {
      const arr = ['row', 'col'];
      const num = ~~(Math.random() * arr.length);
      return arr[num];
    }
    const direction = getDirection();
    const wrapper = shallow(<Button icon='search' direction={direction}>Default</Button>);
    expect(wrapper.hasClass(`btn${direction}`)).toEqual(true);
  });
  it('render children count correctly', () => {
    const wrapper1 = shallow(<Button icon='search'>Default</Button>);
    expect(wrapper1.children().length).toEqual(2);
    const wrapper2 = shallow(<Button>Default</Button>);
    expect(wrapper2.children().length).toEqual(1);
    const wrapper3 = shallow(<Button shape='circle' icon='search'>Default</Button>);
    expect(wrapper3.children().length).toEqual(1);
  });
  it('render icon order correctly', () => {
    const wrapper1 = shallow(<Button icon='search'>Search</Button>);
    expect(wrapper1.childAt(0).hasClass('icon')).toEqual(true);
    const wrapper2 = shallow(<Button buttonStyle='text-icon' icon='search'>Search</Button>);
    expect(wrapper2.children().last().hasClass('icon')).toEqual(true);
  });
  it('trigger click correctly', () => {
    const handleClick = jest.fn(); //Returns a new, unused mock function,expect() expect it;
    const wrapper = mount(<Button onClick={handleClick}>Click</Button>);
    wrapper.simulate('click');
    expect(handleClick).toHaveBeenCalled();
  });
  it("render className props correctly", () => {
    const wrapper = shallow(<Button className='testClassName' />);
    expect(wrapper.hasClass('testClassName')).toEqual(true);
  });
});
