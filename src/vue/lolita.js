import Vue from "vue";

export const TikTok = {
    name: 'tiktok',
    template: `<div><h1>抖阴：记录GG生活</h1></div>`
}
export const Tieba = {
    name: 'tieba',
    template: `
      <div><h1>贴吧：啃老网畜乐园</h1>
      <button @click="count--">浅屠一只</button>
      <h1>网畜数量：{{ count }}</h1></div>`,
    data: function () {
        return {
            count: 9999
        }
    }
}
export const NGA = {
    name: 'nga',
    template: `<div><h1>NGA：精英论坛</h1></div>`
}
export const DynamicCmp = {
    template: `
      <div>
      <button v-for="tabName in tabNames"
              style="width: 200px;height: 80px;font-size: 20px"
              v-on:click="currentTab = tabName">
        {{ tabName }}
      </button>
      <br><br>
      <!--      第四内置组件。 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。-->
      <keep-alive include="tieba">
        <!--      第一内置组件。 渲染一个“元组件”为动态组件。依 is 的值，来决定哪个组件被渲染。-->
        <component :is="currentTab"></component>
      </keep-alive>
      </div>
    `,
    data: function () {
        return {
            currentTab: 'tiktok',
            tabNames: ['tiktok', 'tieba', 'nga']
        }
    },
    methods: {},
    components: {
        'tiktok': TikTok,
        'tieba': Tieba,
        'nga': NGA
    },
    style: {}
}
export const AsyncCmp1 = {
    template: `
    <div>
        <h1>嘻嘻</h1>
    </div>`
}
export const AsyncCmp = Vue.component('asyncCmp', function (resolve, reject) {
    resolve({
        template: `
        <div>
            <h1>嘻嘻</h1>
        </div>`
    })
})
const BeMixed = {
    template: `
    <div>
        <h1>嘻嘻</h1>
    </div>`,
    methods: {
        hello() {
            console.log('hello from the other side~~~')
        }
    }
}
export const Mixin1 = {
    template: `
    <div>
        <h1>使用混入对象的组件</h1>
    </div>`,
    mixins: [BeMixed],
    created() {
        this.hello()
    }
}
