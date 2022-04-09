<template>
  <div id="app">
<!--    <VehicleTrack></VehicleTrack>-->
<!--    <PathSimplifier></PathSimplifier>-->
<!--    <StudyVuex></StudyVuex>-->
<!--    <FileUpload></FileUpload>-->
    <StudyVueRouter></StudyVueRouter>
<!--    <StudyVue></StudyVue>-->
  </div>
</template>

<script>
import VehicleTrack from "./components/Polyline";
import PathSimplifier from "@/components/PathSimplifier";
import StudyVuex from "@/components/StudyVuex";
import FileUpload from "@/components/FileUpload";
import StudyVueRouter from "@/components/StudyVueRouter";
import StudyVue from "@/components/StudyVue";

export default {
  name: 'App',
  components: {
    StudyVue,
    StudyVueRouter,
    FileUpload,
    StudyVuex,
    PathSimplifier,
    VehicleTrack,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
