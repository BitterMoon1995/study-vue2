export const subStore = {
    /*
    父子模块共享命名空间，所有 getter、action 及 mutation 都不能重名，
    不然mapXXX会显示duplicate key。
    如果就要重名（使子模块具有更高的封装度和复用性），需要在【子模块】添加namespaced: true。
    【注意】：在父模块添加此配置【无效】，因为【子模块继承父模块的命名空间】。
     */
    namespaced: true,
    state: {
        goldCoin: 995
    },
    getters: {
        epicNum(state, getters, rootState) {
            return rootState.epicNum
        },
        goldCoin(state, getters, rootState) {
            return rootState.goldCoin
        },
        classNum() {
            return 2
        }
    }
}
