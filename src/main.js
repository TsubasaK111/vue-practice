import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    title: "photo viewer 2000",
    photos: [],
    currentView: "AllPhotos",
    selectedPhoto: null,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    gohome(state) {
      console.log("vuex gohome");
      state.currentView = "AllPhotos";
    },
    singlePhoto(state, photo) {
      state.currentView = "SinglePhoto";
      state.selectedPhoto = photo;
    },
  },
});

new Vue({
  el: "#app",
  store,
  render: (h) => h(App),
});
