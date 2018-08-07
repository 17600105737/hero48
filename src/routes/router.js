// 导入vue-router模块
import VueRouter from 'vue-router';
import Vue from 'vue';

// 导入列表组件
import HeroList from '../views/hero/List.vue';
import WeaponList from '../views/weapon/List.vue';
import EquipList from '../views/equip/List.vue';
// 挂载路由
Vue.use(VueRouter);

// 创建路由实例
var router = new VueRouter({
    linkActiveClass:'active',
    // 定义路由规则
    routes: [
        {path:'/',redirect:'/hero'},
        { name: 'hero', path: '/hero', component: HeroList },
        { name: 'weapon', path: '/weapon', component: WeaponList },
        { name: 'equip', path: '/equip', component: EquipList }
    ]
})

// 导出路由模块
export default router;