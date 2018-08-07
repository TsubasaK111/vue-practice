<template>
  <div>
    <input id="file" ref="uploadInput" type="file" @change="$emit('uploaded', $event)"/>
    <button @click="$refs.uploadInput.click()" >Upload!</button>
  </div>
</template>

<script>
export default {
  name: "Upload",
};
</script>

<style>
</style>
