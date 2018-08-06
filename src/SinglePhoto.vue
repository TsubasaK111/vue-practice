<template>
  <div>
    <img class="selectedPhoto" :src="selectedPhoto" />
  </div>
</template>

<script>
export default {
  name: "SinglePhoto",
  props: ["selectedPhoto"],
};
</script>

<style>
.selectedPhoto {
  width: 100%;
  height: auto;
}
</style>
