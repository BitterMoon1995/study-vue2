<template>
  <div>
    <router-link to="/dynamicComponent">动态组件</router-link><br>
    <router-link to="/asyncCmp">异步组件：通过require导入</router-link>&nbsp;&nbsp;
    <router-link to="/asyncCmp2">异步组件：通过import导入</router-link><br>
    <router-link to="/mixin">混入：基础</router-link>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "StudyVue"
}
</script>

<style scoped>

</style>
