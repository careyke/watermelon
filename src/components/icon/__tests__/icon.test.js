import React from "react";
import { render, shallow } from "enzyme";
import { Icon } from "../Icon";
import styles from '../icon.less';

describe('test icon',()=>{
  it('render icon correctly',()=>{
    const wrapper = render(<Icon type='search'></Icon>);
    expect(wrapper).toMatchSnapshot();
  });
  it('render correct type',()=>{
    const type = 'search';
    const wrapper=shallow(<Icon type={type}></Icon>);
    expect(wrapper.hasClass(`icon-${type}`)).toEqual(true);
  });
  it('render no child',()=>{
    const wrapper = shallow(<Icon type='search'><span></span></Icon>);
    expect(wrapper.children().length).toEqual(0);
  });
  it('render click correctly',()=>{
    const wrapper1 = shallow(<Icon type='search'></Icon>);
    expect(wrapper1.hasClass(styles.iconClick)).toEqual(false);
    const handleClick = jest.fn();
    const wrapper2 = shallow(<Icon type='search' onClick={handleClick}></Icon>);
    expect(wrapper2.hasClass(styles.iconClick)).toEqual(true);
    wrapper2.simulate('click');
    expect(handleClick).toHaveBeenCalled();
  });
});