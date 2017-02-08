
import Vue from 'vue'
import App from './components/App'

import Home     from './components/Home'
import SignIn   from './components/SignIn'
import SignUp   from './components/SignUp'
import Topic    from './components/Topic'
import Topics   from './components/Topics'
import NewTopic from './components/NewTopic'


import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


Vue.use(VueRouter)

Vue.use(VueResource)

export default Vue



//export default Vue


Vue.http.options.root = 'http://localhost/vue_api_laravel/backend/api/public';


const NotFoundComponent = { template: '<div><p>NotFoundComponent</p></div>' }

//https://router.vuejs.org/ru/essentials/nested-routes.html
const routes = [
	{ 
    path: '/', component: App,
      children: [
        { path: '',         component: Home, name: 'home' },      
        { path: 'signin',   component: SignIn, name: 'auth.signin' },      
        { path: 'signup',   component: SignUp, name: 'auth.signup' },      
        { path: 'section/:sectionId',  component: Topics, name: 'section' },
        { path: '/topic/new', component: NewTopic,  name: 'topic.new'},
        { path: '/topic/:topicId',   component: Topic,  name: 'topic'},

        { path: '*', component: NotFoundComponent },
      ]
    }
]

const router = new VueRouter({
  routes, // сокращение от routes: routes
  mode: 'history',
 
})


const app = new Vue({
  router
}).$mount('#app')