<template>
  <router-link to="/">Go to Home</router-link>
  <router-link to="/about">Go to about</router-link>
  <div class="view">33<router-view></router-view></div>
</template>

<script>

// import { query } from '@/utils/api'

export default {
  name: 'App',
  data () {
    return {}
  },
  mounted () {
    // console.log('router',this.$router)
    // console.log('route',this.$route)
    // console.log(22)
    // // let params = { userName: 'admin', password: '123456'}
    // query().then(res => {
    //   console.log(res, '响应结果')
    // }).catch(err=>{
    //   console.log('err',err)
    // })
  },
  watch: {
    $route(to,from){
      console.log('from',from.path)
      console.log('to',to.path)
      console.log(this.$route.params)
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
