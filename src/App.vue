<template>
  <div id="app">
    <h1>{{ $store.state.title }}</h1>
    <navbar
      @gohome="$store.commit('gohome')"
      @uploaded="uploaded($event)"
    />
    <all_photos id="allPhotos"
      :photos="photos"
      v-if="$store.state.currentView==='AllPhotos'"
      @selectPhoto="selectPhoto($event)"
    />
    <single_photo v-else :selectedPhoto="$store.state.selectedPhoto"/>
  </div>
</template>

<script>
import { saveObject, listObjects } from "../utils";
import Navbar from "./Navbar";
import AllPhotos from "./AllPhotos";
import SinglePhoto from "./SinglePhoto";

export default {
  name: "App",
  components: {
    navbar: Navbar,
    all_photos: AllPhotos,
    single_photo: SinglePhoto,
  },
  data: () => ({
    photos: [],
  }),
  methods: {
    uploaded: function(event) {
      const file = event.target.files[0];
      saveObject(file).then((result) => {
        //TODO force list objects to run
      });
    },
    selectPhoto: function(event) {
      this.$store.commit("singlePhoto", event.target.src);
    },
  },
  created() {
    listObjects()
      .then((results) => {
        return results.map(
          (image) => "http://react.sprint.s3.amazonaws.com/" + image.Key
        );
      })
      .then((results) => (this.photos = results));
  },
};
</script>

<style>
#app {
  text-align: center;
}
</style>
