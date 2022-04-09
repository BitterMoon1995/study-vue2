import Vue from "vue";
import VueRouter from "vue-router";
import * as jsk from "@/router/components/jsk";
import * as lolita from "@/vue/lolita"
// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 vue.use(VueRouter)
Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来


// 2. 定义路由
// 每个路由应该映射一个组件。
const routes = [
    {path: '/', component: jsk.Home},
    {path: '/dnf', component: jsk.DNF},
    {path: '/genshin', component: jsk.Genshin},
    // 动态路径参数 以冒号开头。你可以在一个路由中设置多段“路径参数”，对应的值都会设置到 $route.params 中
    {path: '/user/center/:userId/:pwd', component: jsk.User},
    // 匹配任意路径。当使用通配符路由时，请确保路由的顺序是正确的，也就是说含有通配符的路由应该放在最后。
    // 路由 { path: '*' } 通常用于客户端 404 错误。
    {path: '*', component: jsk.Error},
    {
        path: '/trashLife/:name',
        component: jsk.TrashLife,
        // 嵌套路由配置
        children: [
            {path: 'tieba', component: jsk.TieBa},
            {path: 'nga', component: jsk.NGA}
        ]
    },
    {path: '/killRussian', component: jsk.KillRussian, name: 'killRussian'},
    {
        path: '/NamedView', components: {
            default: jsk.Default,
            main: jsk.Main,
            sidebar: jsk.Sidebar
        }
    },
    {
        path: '/settings', component: jsk.Settings,
        children: [
            {path: 'emails', component: jsk.UserEmailsSubscriptions},
            {
                path: 'profile', components: {
                    default: jsk.UserProfile,
                    edit: jsk.UserProfileEdit
                }
            }
        ]
    },
    {path: '/ayaka', component: jsk.Ayaka, name: 'little turtle'},
    //  /a 的别名是 /b，意味着，当用户访问 /b 时，URL 会保持为 /b，但是路由匹配则为 /a，就像用户访问 /a 一样
    {path: '/ganyu', component: jsk.Ganyu, alias: '/alias'},
    {
        //“重定向”的意思是，当用户访问 /a时，URL 将会被替换成 /b，然后匹配路由为 /b
        // path: '/redirect', redirect: '/ayaka',
        // path: '/redirect', redirect: {name: 'little turtle'},
        path: '/redirect', redirect: () => {
            return {
                name: 'little turtle',
                path: '/ayaka'
            }
        }
    },
    //如果 props 被设置为 true，route.params 将会被设置为组件属性。
    {path: '/klee/:id', component: jsk.Klee, props: true},
    {path: '/klee/:id', component: jsk.Klee, props: true},
    {
        path: '/redDead', component: jsk.RedDead,
        // 导航守卫：路由独享守卫   调用时机：全局前置守卫之后，组件内前置守卫之前
        beforeEnter: (to, from, next) => {
            console.log('路由独享守卫')
            next()
        }
    },
    {
        path: '/eldenRing/:str', component: jsk.EldenRing,
        beforeEnter: (to, from, next) => {
            console.log('路由独享守卫')
            next()
        }
    },
    {
        path: '/hearthstone',
        component: jsk.Hearthstone,
        children: [
            {
                path: 'dryad', component: jsk.Dryad,
                //路由元信息
                meta: {isDryad: true}
            }
        ]
    },
    {
        path: '/father',
        component: () => import('@/router/components/DynamicRouter')
    },
    {path: '/dynamicComponent', component: lolita.DynamicCmp},
    {path: '/asyncCmp', component: (resolve) => require(['@/vue/AsyncCmp'], resolve)},
    {
        // 关键字import可以像调用函数一样来动态地导入模块。以这种方式调用，将返回一个 promise。
        // path: '/asyncCmp2', component: () => import('@/vue/AsyncCpm2')
        path: '/asyncCmp2', component: async () => await import('@/vue/AsyncCpm2')
    },
    {path: '/mixin', component: lolita.Mixin1}
]

// 3. 创建 router 实例，然后传 `routes` 配置
export const router = new VueRouter({
    routes
})

//导航守卫：全局前置守卫   调用时机：最开先第一个  组件复用时，仍然触发
//所有导航守卫，无论如何都必须调用且仅调用一次next()
router.beforeEach((to, from, next) => {
    // console.log('全局前置守卫')

    // if (to.path === '/genshin')
    //     next('/dnf')
    // else next()

    // next()

    // 首先，我们称呼 routes 配置中的每个路由对象为 路由记录。
    // 路由记录可以是嵌套的，因此，当一个路由匹配成功后，他可能匹配多个路由记录
    // 例如，根据上面的路由配置，/hearthstone/dryad 这个 URL 将会匹配父路由记录以及子路由记录。
    // 一个路由匹配到的所有路由记录会暴露为 $route 对象 (还有在导航守卫中的路由对象) 的 $route.matched 数组。
    // 因此，我们需要遍历 $route.matched 来检查路由记录中的 meta 字段。
    to.matched.forEach(one => {
        if (one.meta.hasOwnProperty('isDryad')) {
            if (one.meta.isDryad === true) {
                console.log('德鲁伊死妈！')
            }
        }
    })
    next()
})

//导航守卫：全局解析守卫   调用时机：全局前置守卫、路由独享守卫、组件内前置守卫之后
router.beforeResolve((to, from, next) => {
    // console.log('全局解析守卫')
    next()
})

//全局后置钩子    调用时机：所有守卫（带next函数的就是守卫）之后
router.afterEach((to, from) => {
    // console.log('全局后置钩子')
})
