<template>
  <div>
    <span v-for="photo in photos" :key="photo">
      <img class="photo" :src="photo" @click="$emit('selectPhoto', $event)"/>
    </span>
  </div>
</template>

<script>
export default {
  name: "AllPhotos",
  props: ["photos"],
};
</script>

<style>
.photo {
  width: 100px;
  height: 100px;
}
</style>
