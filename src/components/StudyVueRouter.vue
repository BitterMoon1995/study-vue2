<template>
  <div>
    <router-link to="/dnf">地下城</router-link><br>
    <router-link to="/genshin">原神</router-link><br>
    <router-link to="/user/center/简自狗/死妈肥糖猪">洗澡狗用户中心</router-link>&nbsp;&nbsp;
    <router-link to="/user/center/肉鸡/IG-rookie">rookie用户中心</router-link><br>
    <router-link to="/twitter">推特</router-link><br>
    <router-link to="/trashLife/周神/tieba">嵌套路由：贴吧</router-link>&nbsp;
    <router-link to="/trashLife/周神/nga">嵌套路由：NGA</router-link><br>
    <el-button type="primary" @click="pmRoute">编程式导航</el-button>&nbsp;
    <el-button type="primary" @click="BHALike">效仿 Browser History APIs</el-button><br>
    <router-link :to="{name: 'killRussian'}">命名路由</router-link><br>
    <router-link to="/namedView">命名视图</router-link><br>
    <router-view name="main"></router-view>
    <router-view name="sidebar"></router-view>
    <router-link to="settings">嵌套命名视图</router-link><br>
    <router-link to="/redirect">重定向</router-link>&nbsp;&nbsp;
    <router-link to="/alias">别名</router-link><br>
    <router-link to="/klee/可莉宝宝">路由组件传参</router-link><br>
    <router-link to="/redDead">路由独享守卫</router-link><br>
    <router-link to="/eldenRing/不如原神">组件内守卫</router-link>&nbsp;&nbsp;
    <router-link to="/eldenRing/抄袭塞尔达">组件内守卫2</router-link><br>
    <router-link to="/hearthstone/dryad">路由元信息</router-link><br>
    <router-link to="/asyncCmp">异步组件</router-link><br>
    <router-link to="/father">Vue学最高成就：动态路由</router-link><br>
    <br>
    <el-button type="primary" @click="goBack">go back</el-button>
    <el-button type="primary" @click="home">主页</el-button>
    <br><br>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "StudyVueRouter",
  mounted() {
    // console.log(this.$router)
  },
  computed: {},
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/")
    },
    home() {
      if (this.$route.path !== '/') {
        this.$router.push("/")
      }
    },
    pmRoute() {
      // this.$router.push('killRussian')

      // this.$router.push({
      //   path: '/killRussian'
      // })

      // this.$router.push({
      //   name: 'killRussian',
      //   params: {
      //     animalName: '普畜'
      //   }
      // })

      // this.$router.push({
      //   path: '/killRussian',
      //   query: {
      //     truth: '斯拉夫贱畜死爹妈'
      //   }
      // })

      //如果提供了 path，params 会被忽略。path只能和name搭配
      this.$router.push({
        path: '/killRussian',
        params: {
          slogan: '黄俄孝子死全家'
        }
      },()=>{
        console.log('确实俄罗斯贱畜死妈啊')
      })
    },
    BHALike() {
      //跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。
      // this.$router.replace('/dnf')
      // this.$router.go(2)
      // this.$router.go(-2)
    }
  }
}
</script>

<style scoped>

</style>
