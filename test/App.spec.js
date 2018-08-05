import { shallow } from "@vue/test-utils";
import App from "../src/App.vue";

describe("App.vue", () => {
  it("has a title that comes from the data", () => {
    const wrapper = shallow(App, {
      data: {
        title: "Photo Upload App",
      },
    });
    expect(wrapper.find("h1").text()).toEqual("Photo Upload App");
  });
});
