import Vue from 'vue';
import Router from 'vue-router';
const _import = require('./_import_' + process.env.NODE_ENV);
// in development env not use Lazy Loading,because Lazy Loading large page will cause webpack hot update too slow.so only in production use Lazy Loading

// navigation
import navigation from '../views/navigation/navigation';

/* layout */
import Layout from '../views/layout/Layout';

/* login */
import Login from '../views/login/';
const authRedirect = _import('login/authredirect');
const sendPWD = _import('login/sendpwd');
const reset = _import('login/reset');

/* Introduction */
const Introduction = _import('introduction/index');

/* compony */
const BaseInfo = _import('compony/base-info');
const ComponyTrading = _import('compony/compony-trading');
const DocumentsInfo = _import('compony/documents-info');
const documentResult = _import('compony/documents-result');

/* trading */
const IndustryTrading = _import('trading/industry-trading');
const GoodsTrading = _import('trading/goods-trading');
const InfoTrading = _import('trading/info-trading');

/* error page */
const Err404 = _import('error/404');
const Err401 = _import('error/401');

/* error log */
const ErrorLog = _import('errlog/index');

Vue.use(Router);

/**
 * icon : the icon show in the sidebar
 * hidden : if hidden:true will not show in the sidebar
 * redirect : if redirect:noredirect will not redirct in the levelbar
 * noDropdown : if noDropdown:true will not has submenu
 * meta : { role: ['admin'] }  will control the page role
 **/

export const constantRouterMap = [
  { path: '/login', component: Login, hidden: true },
  { path: '/authredirect', component: authRedirect, hidden: true },
  { path: '/sendpwd', component: sendPWD, hidden: true },
  { path: '/reset', component: reset, hidden: true },
  { path: '/404', component: Err404, hidden: true },
  { path: '/401', component: Err401, hidden: true },
  {
    path: '/dashboard',
    component: Layout,
    // redirect: '/dashboard',
    name: '信息',
    hidden: true,
    // children: [{ path: 'dashboard', component: dashboard }]
  },
  {
    path: '/',
    component: navigation,
    name: '首页',
    hidden: true
    // children: [{ path: '/', component: navigation }]
    // redirect: '/navigation/navigation'
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});

export const asyncRouterMap = [
  {
    path: '/compony',
    component: Layout,
    redirect: '/compony/base-info',
    name: '企业信息查询',
    icon: 'fangzi',
    // noDropdown: true,
    children: [
      {
        path: 'base-info',
        component: BaseInfo,
        name: '企业基本信息查询'
      },
      {
        path: 'documents-info',
        component: DocumentsInfo,
        name: '单据查询'
      },
      {
        path: 'compony-trading',
        component: ComponyTrading,
        name: '企业贸易信息'
      },
      {
        path: 'documents-result',
        component: documentResult,
        hidden: true,
        name: '单据结果页'
      }
    ]
  },
  {
    path: '/trading',
    component: Layout,
    redirect: '/trading/industry-trading',
    name: '贸易查询',
    icon: 'jiaoyi',
    // noDropdown: true,
    children: [
      {
        path: 'industry-trading',
        component: IndustryTrading,
        name: '行业下贸易信息'
      },
      {
        path: 'goods-trading',
        component: GoodsTrading,
        name: '商品下贸易信息'
      },
      {
        path: 'info-trading',
        component: InfoTrading,
        name: '贸易资讯信息'
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
];
