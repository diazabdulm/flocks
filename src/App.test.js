import React from "react";
import { mount } from "enzyme";

import App from "./App";

let wrapper;

describe("<App />", () => {
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it("renders App component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
