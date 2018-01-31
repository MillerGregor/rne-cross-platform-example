import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import renderer from "react-test-renderer";
import App from "./App";

it("renders without crashing", () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

it("matches a snapshot", () => {
  const component = shallow(<App />);

  expect(component.length).toBe(1);
  expect(toJson(component)).toMatchSnapshot();
});
