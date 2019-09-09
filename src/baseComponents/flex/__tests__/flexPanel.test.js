import React from "react";
import { render, shallow } from "enzyme";
import { FlexPanel } from "../FlexPanel";

describe("test flexPanel", () => {
  it("renders correctly", () => {
    const wrapper = render(<FlexPanel></FlexPanel>);
    expect(wrapper).toMatchSnapshot();
  });
  it("render direction correctly", () => {
    const getDirection = () => {
      const arr = ['row', 'col'];
      const num = ~~(Math.random() * arr.length);
      return arr[num];
    }
    const direction = getDirection();
    const wrapper = shallow(<FlexPanel direction={direction}></FlexPanel>);
    expect(wrapper.hasClass(`flex${direction}`)).toEqual(true);
  });
  it("render className props correctly", () => {
    const wrapper = shallow(<FlexPanel className='testClassName' />);
    expect(wrapper.hasClass('testClassName')).toEqual(true);
  });
});
