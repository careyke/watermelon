import React from "react";
import renderer from "react-test-renderer";
import { render, mount, shallow } from "enzyme";
import Button from "../Button";
import btnStyles from "../button.less";
import { ButtonType } from "../type";

describe("Button test", () => {
  it("renders correctly", () => {
    const wrapper = render(<Button>Default</Button>);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders correctly with icon left", () => {
    const wrapper = render(
      <Button icon="search" showStyle="icon-text">
        Default
      </Button>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("render correctly with icon right", () => {
    const wrapper = render(
      <Button icon="search" showStyle="text-icon">
        Default
      </Button>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("render correctly without text", () => {
    const wrapper = render(
      <Button icon="search" shape="circle">
        Default
      </Button>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("mount correctly", () => {
    const wrapper = mount(<Button>Default</Button>);
    expect(() => wrapper).not.toThrow();
  });
  it("render with correctly class", () => {
    const typeKeys = Object.keys(ButtonType);
    const len = typeKeys.length;
    const getRandType = () => {
      let index = ~~(Math.random() * len);
      return ButtonType[typeKeys[index]];
    };
    const currentType = getRandType();
    const wrapper = shallow(<Button type={currentType} shape={'circle'} >Default</Button>);
    expect(wrapper.find(".btn-base").hasClass(`btn-${currentType}`)).toBe(true);
    expect(wrapper.find(".btn-base").hasClass('btn-circle')).toBe(true);
  });
});
