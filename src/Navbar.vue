<template>
  <div>
    <button @click="$emit('gohome')" >home</button>
    <upload @uploaded="$emit('uploaded', $event)"/>
  </div>
</template>

<script>
import Upload from "./Upload";
export default {
  name: "Navbar",
  components: {
    upload: Upload,
  },
  methods: {
    consule: function(e) {
      console.log(e);
    },
  },
};
</script>

<style>
</style>
