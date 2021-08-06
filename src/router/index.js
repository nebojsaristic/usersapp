import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "MainView",
    component: () => import("@/views/MainView.vue"), 
    redirect: {
      name: "Users"
    },
    children: [
      {
        path: "/users",
        name: "Users",
        component: () => import("@/views/users/Users.vue")
      },
      {
        path: "/users/new",
        name: "CreateUser",
        component: () => import("@/views/users/UserDetails.vue")
      },
      {
        path: "/users/:id/edit",
        name: "EditUser",
        component: () => import("@/views/users/UserDetails.vue")
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
