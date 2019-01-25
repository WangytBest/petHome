/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
Vue.use(Router);
const Index = r => require.ensure([], () => r(require('@/pages/index')), 'Index');
const listCard = r => require.ensure([], () => r(require('@/pages/listCard')), 'listCard');
const fileDetails = r => require.ensure([], () => r(require('@/pages/fileDetails')), 'fileDetails');
const complete = r => require.ensure([], () => r(require('@/pages/complete')), 'complete');
const shareCard = r => require.ensure([], () => r(require('@/pages/shareCard')), 'shareCard');

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/index',
    },
    {
      path: '/index',
      name: 'index',
      component: Index, 
    },
    {
      path: '/listCard',
      name: 'listCard',
      component: listCard,
    },
    {
      path: '/fileDetails/:petName/:petImg/:petNum/:petCategory/:petFood/:petKind/:petSex/:birthYear/:birthMonth/:birthDate',
      name: 'fileDetails',
      component: fileDetails,
    },
    {
      path: '/complete/:petKind/:petSex/:petName/:petImg/:birthYear/:birthMonth/:birthDate',
      name: 'complete',
      component: complete,
    },
    {
      path: '/shareCard/:petName/:petImg/:petNum/:petCategory/:petFood/:petKind/:petSex',
      name: 'shareCard',
      component: shareCard,
    },
    {
      path: '*',
      name: 'index',
      redirect: '/index',
    }
  ]
})
