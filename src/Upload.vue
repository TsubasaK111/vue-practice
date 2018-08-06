<template>
  <div>
    <input id="file" type="file" @change="$emit('uploaded', $event)"/>
    <button @click="$emit('uploaded')" >Upload!</button>
  </div>
</template>

<script>
export default {
  name: "Upload",
};
</script>

<style>
</style>
