import Vue from "vue";

export const Home = {
    template: `<h1>等绫人</h1>`
}
export const DNF = {
    template: `<h1>地下城与马化疼</h1>`,
    beforeRouteLeave(to, from, next) {
        console.log('组件内守卫：beforeRouteLeave')
        next()
    }
}
export const Genshin = {
    template: `<h1>崩妈米哈游</h1>`
}
export const Error = {
    template: `<h1>服务器开小差了~</h1>`,
    mounted() {
        //当使用一个通配符时，$route.params 内会自动添加一个名为 pathMatch 参数。它包含了 URL 通过通配符被匹配的部分
        console.log(this.$route.params.pathMatch)
    }
}
export const User = {
    // 当使用路由参数时，例如从 /user/foo 导航到 /user/bar，原来的组件实例会被复用。
    // 因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。
    // 不过，这也意味着组件的生命周期钩子不会再被调用。
    template: `<h1>{{ $route.params.userId }}的用户中心，密码为：{{ $route.params.pwd }}</h1>`,
    // 路由参数变化时，不会被调用
    mounted() {
        //一个 key/value 对象，包含了动态片段和全匹配片段，如果没有路由参数，就是一个空对象。
        console.log(this.$route.params)
    },
    //复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch (监测变化) $route 对象：
    watch: {
        $route(to, from) {
            // console.log('路由参数已变更！')
            // console.log('to:',to)
            // console.log('from:',from)
        }
    },
    //或者使用 2.2 中引入的 beforeRouteUpdate 导航守卫：
    // beforeRouteUpdate(to, from, next) {
    //     console.log('beforeRouteUpdate触发')
    // }
}
export const TrashLife = {
    template: `
    <div>
    <h1>垃圾人生：</h1>
    <h1 style="font-family: Forte,serif;color: #d74096">之</h1> 
    <router-view></router-view>
    </div>`
}
export const TieBa = {
    template: `<h1>上班逛贴吧，不工作</h1>`
}
export const NGA = {
    template: `<h1>上班逛NGA，不学习</h1>`
}
export const KillRussian = {
    template: `<h1>狂屠死妈俄畜</h1>`,
    mounted() {
        console.log('params:', this.$route.params)
        console.log('query:', this.$route.query)
    }
}
export const Default = {
    template: `<h1>命名视图：默认视图</h1>`
}
export const Main = {
    template: `<h1>命名视图：主体内容</h1>`
}
export const Sidebar = {
    template: `<h1>命名视图：侧边导航</h1>`
}
export const Settings = {
    template: `
    <div>
        <h1>命名嵌套视图：设置中心</h1>
        <div>
            <Navbar></Navbar>
            <router-view></router-view>
            <router-view name="edit"></router-view>
        </div>
    </div>
    `,
}
export const Navbar = {
    template: `<div style="position: absolute">
    <div style="position: relative;left: 500px;top: 0">
    <h1>导航栏</h1>
    <router-link to="/settings/emails">邮件</router-link><br>
    <router-link to="/settings/profile">用户资料</router-link>
    </div>
    </div>`,
}
Vue.component('Navbar', Navbar)

export const UserEmailsSubscriptions = {
    template: `<h1>用户邮件订阅管理</h1>`
}
export const UserProfile = {
    template: `<h1>用户资料</h1>`
}
export const UserProfileEdit = {
    template: `<h1>用户资料修改</h1>`
}
export const Ayaka = {
    template: `<h1>小乌龟</h1>`
}
export const Ganyu = {
    template: `<h1>小椰羊</h1>`
}
export const Klee = {
    props: {id: String},
    //不再从$route获取
    template: `<h1>{{ id }}</h1>`
}
export const RedDead = {
    template: `<h1>荒野大表哥</h1>`
}
export const EldenRing = {
    template: `<h1 style="color: cadetblue">艾尔登老头：{{$route.params.str}}</h1>`,
    // 调用时机：全局前置守卫和路由独享守卫之后
    beforeRouteEnter(to, from, next) {
        console.log('组件内守卫：beforeRouteEnter')
        // console.log(this) 错误，此时组件还未被创建
        // 不过，你可以通过传一个回调给 next来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数。
        next((vue) => {
            console.log(vue)
        })
    },
    // 在当前路由改变，但是该组件被复用时调用，比如动态路由参数匹配时
    beforeRouteUpdate(to, from, next) {
        console.log('组件内守卫：beforeRouteUpdate')
        // console.log(this)
        next()
    },
    // 这个离开守卫通常用来禁止用户在还未保存修改前突然离开。该导航可以通过 next(false) 来取消。
    // 注意：同组件复用不触发
    beforeRouteLeave(to, from, next) {
        console.log('组件内守卫：beforeRouteLeave')
        const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
        if (answer) {
            next()
        } else {
            next(false)
        }
    }
}

export const Hearthstone = {
    template: `
    <div>
    <h1>炉石传说之：</h1>
    <router-view></router-view>
    </div>
    `,
}
export const Dryad = {
    template: '<h1 style="color: red">德鲁伊死妈</h1>',
}
