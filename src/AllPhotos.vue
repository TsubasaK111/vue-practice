<template>
  <div>
    <div v-for="photo in photos" :key="photoKey">
      <img :src="photo.url" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AllPhotos",
  props: ["photos"],
};
</script>

<style>
</style>
