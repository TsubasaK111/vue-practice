import { shallow } from "@vue/test-utils";
import App from "../src/App.vue";
import Navbar from "../src/Navbar.vue";
import AllPhotos from "../src/AllPhotos";
// import { expect } from "chai";

describe("App.vue", () => {
  it("has a title that comes from the data", () => {
    const wrapper = shallow(App, {
      data: {
        title: "Photo Upload App",
      },
    });
    expect(wrapper.find("h1").text()).toEqual("Photo Upload App");
  });

  it("App.data should be a function", () => {
    expect(typeof App.data).toBe("function");
  });

  it("currentView should be initialized as 'AllPhotos'", () => {
    const defaultData = App.data();
    expect(defaultData.currentView).toBe("AllPhotos");
  });

  it("photos should be initialized as []", () => {
    const defaultData = App.data();
    expect(defaultData.photos).toEqual([]);
  });

  it("selectedPhoto should be initialized as null", () => {
    const defaultData = App.data();
    expect(defaultData.selectedPhoto).toEqual(null);
  });

  it("has currentView set to 'AllPhotos' by default", () => {
    const wrapper = shallow(App);
    expect(wrapper.vm.currentView).toBe("AllPhotos");
  });

  it("should change currentView to 'AllPhotos' when 'gohome' method is invoked.", () => {
    const wrapper = shallow(App, {
      data: {
        currentView: "SinglePhoto",
      },
    });
    expect(typeof App.methods.gohome).toBe("function");
    wrapper.vm.gohome();
    expect(wrapper.vm.currentView).toBe("AllPhotos");
  });
});
