<template>
  <div>
    <div>count:{{ count }}</div>
    <div>myNum:{{ myNum }}</div>
    <div>doneTodos:{{ doneTodos }}</div>
    <div>doneTodoCount:{{ doneTodoCount }}</div>
    <el-button type="primary" @click="increment">凌华小乌龟</el-button>
    <div>原石数：{{ primogem }} 搬砖内容：{{ jobContent }}</div>
    <el-button type="primary" @click="moveBrick">搬砖</el-button>
    <el-button type="primary" @click="moveBrick2">原神搬砖</el-button>
    <div>DNF成套史诗件数：{{ epicNum }}</div>
    <el-button type="primary" @click="playDNF">dnf坐牢</el-button>
    <div>炉石金币数：{{ goldCoin }}</div>
    <div>小凌华命座数：{{ classNum }}</div>
    <div>5星观赏美人鱼：{{ fishName }}</div>
<!--    <el-button type="primary" @click="registerDM">小心海</el-button>-->
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'


export default {
  name: "StudyVuex",
  //动态添加vuex模块。如果要在生命周期函数中执行此操作，则必须在mounted之前，
  //即只能在beforeMount、created、beforeCreated函数中执行动态路由注册。
  beforeMount() {
    this.$store.registerModule('dynamicModule', {
      namespaced: true,
      //如果我们使用一个纯对象来声明模块的状态，那么这个状态对象会通过引用被共享，
      //导致状态对象被修改时 store 或模块间数据互相污染的问题。
      //实际上这和 vue 组件内的 data 是同样的问题。因此解决办法也是相同的——使用一个函数来声明模块状态
      state: ()=>({
        fishName: '珊瑚宫小心海8822252'
      }),
      getters: {
        fishName(state) {
          return state.fishName
        }
      }
    })
  },
  data() {
    return {
      // fishName: ''
    }
  },
  computed: {
    count() {
      return this.$store.state.count
    },
    ...mapState(['myNum', 'jobContent', 'primogem', 'epicNum']),
    ...mapGetters(['doneTodos', 'doneTodoCount', 'goldCoin']),

    // 当使用 mapState、mapGetters、mapActions 和 mapMutations 这些函数来绑定带命名空间的模块时，
    // 你可以将模块的空间名称字符串作为第一个参数传递给上述函数，这样所有绑定都会自动将该模块作为上下文。
    // ...mapGetters('subStore', {
    //       classNum: 'classNum'
    //     }
    // ),

    // 访问子模块，方法二
    classNum() {
      return this.$store.getters["subStore/classNum"]
    },
    fishName() {
      return this.$store.getters["dynamicModule/fishName"];
    }
  },
  methods: {
    moveBrick() {
      //你不能直接调用一个 mutation 处理函数。这个选项更像是事件注册：
      // “当触发一个类型为 increment 的 mutation 时，调用此函数。
      // ”要唤醒一个 mutation 处理函数，你需要以相应的 type 调用 store.commit 方法
      this.$store.commit('moveBrick', 150)
    },
    moveBrick2() {
      // this.$store.commit('moveBrick2',{
      //   amount: 220,
      //   jobContent: '每日+活动'
      // })
      this.$store.commit({
        type: "moveBrick2",
        amount: 220,
        jobContent: '4每日 + 1期活动'
      })
    },
    ...mapMutations({
      increment: 'increment'
    }),
    ...mapActions({
      playDNF: 'playDNF'
    }),
    // registerDM() {
    //   this.fishName = this.$store.getters["dynamicModule/fishName"]
    // }
  }
}
</script>

<style scoped>

</style>
