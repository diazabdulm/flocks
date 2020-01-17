import React from "react";
import { shallow } from "enzyme";

import HomePage from "./homepage.component";

let wrapper;

describe("<HomePage />", () => {
  beforeEach(() => {
    wrapper = shallow(<HomePage />);
  });

  it("renders HomePage component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
