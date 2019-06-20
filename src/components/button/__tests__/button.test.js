import React from "react";
import renderer from "react-test-renderer";
import { render, mount } from "enzyme";
import Button from "../Button";

describe("Button test", () => {
  it("renders correctly", () => {
    const wrapper = render(<Button>{"Default"}</Button>);
    expect(wrapper).toMatchSnapshot();
  });
});
