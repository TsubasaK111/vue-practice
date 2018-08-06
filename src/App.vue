<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <navbar @gohome="gohome" />
    <all_photos :photos="photos"/>
    <single_photo />
  </div>
</template>

<script>
import Navbar from "./Navbar";
import AllPhotos from "./AllPhotos";
import SinglePhoto from "./SinglePhoto";

const mockPhoto = {
  url: "https://images.gr-assets.com/books/1175087974l/476454.jpg",
  name: "whats michael drowning",
  alt: "its michael",
  photoKey: "michael1",
};

export default {
  name: "App",
  components: {
    navbar: Navbar,
    all_photos: AllPhotos,
    single_photo: SinglePhoto,
  },
  data: () => ({
    title: "Photo Upload App",
    photos: [mockPhoto],
    currentView: "AllPhotos",
    selectedPhoto: null,
  }),
  methods: {
    gohome: function() {
      console.log("AllPhotos!");
      this.currentView = "AllPhotos";
    },
  },
  // created(){
  //   this.
  // }
};
</script>

<style>
#app {
  text-align: center;
}
</style>
