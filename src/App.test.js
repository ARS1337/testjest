import App from "./App";
import React from "react";
import { mount, shallow,  } from "enzyme";
import Login from "./Login.jsx";
import renderer from "react-test-renderer";

describe("testing all ", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
});
