import React from "react";
import { Route } from "react-router-dom";
import { shallow } from "enzyme";

import App from "./App";
import HomePage from "./pages/homepage/homepage.component";

let wrapper;

describe("<App />", () => {
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("renders App component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("renders correct routes", () => {
    const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});

    expect(pathMap["/"]).toBe(HomePage);
  });
});
