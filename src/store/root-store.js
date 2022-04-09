import Vue from "vue";
import Vuex from "vuex";
import {MOVE_BRICK} from './mutation-types'
import {subStore} from "@/store/sub-store";

Vue.use(Vuex)

const RootStore = new Vuex.Store({

    state: {
        count: 0,
        myNum: 4399,
        todos: [
            {id: 4397, text: '打炉石', done: true},
            {id: 2800, text: '打DNF', done: true},
            {id: 443, text: '过海灯节', done: false},
        ],
        primogem: 0,
        jobContent: '',
        epicNum: 10,
        goldCoin: 1105
    },
    mutations: {
        increment(state) {
            console.log(subStore.getters.epicNum(null,this.getters,state))
            state.count++
        },
        moveBrick(state, num) {
            // state.primogem += num
            state.primogem += num
        },
        //在大多数情况下，载荷应该是一个对象，这样可以包含多个字段并且记录的 mutation 会更易读
        moveBrick2(state, payload) {
            state.primogem += payload.amount
            state.jobContent = payload.jobContent
        },
        // 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
        // 用不用常量取决于你——在需要多人协作的大型项目中，这会很有帮助。但如果你不喜欢，你完全可以不这样做。
        [MOVE_BRICK](state, payload) {
            state.primogem += payload.amount
            state.jobContent = payload.jobContent
        },
        playDNF(state) {
            state.epicNum++
        }
    },
    actions: {
        //Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，
        // 因此你可以调用 context.commit 提交一个 mutation，
        // 或者通过 context.state 和 context.getters 来获取 state 和 getters。
        // 当我们在之后介绍到 Modules 时，你就知道 context 对象为什么不是 store 实例本身了。
        // playDNF(context) {
        //     context.commit('playDNF')
        // }

        //实践中，我们会经常用到 ES2015 的参数解构来简化代码（特别是我们需要调用 commit 很多次的时候）
        playDNF({commit}) {
            setTimeout(() => {
                commit('playDNF')
            }, 1000)
        }
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        },
        doneTodoCount: (state, getters) => {
            return getters.doneTodos.length
        },
        goldCoin: state => {
            // return subStore.state.goldCoin

            //调用子模块getter时，记得传第三个参数（root state）
            return subStore.getters.goldCoin(null,null,state)
        }
    },
    modules: {
        subStore
    }

})

export const store = RootStore
