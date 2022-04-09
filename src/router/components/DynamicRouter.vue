<template>
  <div>
    <h1>普京死妈</h1>
  </div>
</template>

<script>
import {getCmpTree} from "@/api/cmpTree";

export default {
  name: "Father",
  mounted() {
    getCmpTree().then(res => console.log(res))
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
