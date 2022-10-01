<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div>111</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { query } from '@/utils/api'

export default {
  name: 'App',
  data () {
    return {}
  },
  mounted () {
    console.log(22)
    // let params = { userName: 'admin', password: '123456'}
    query().then(res => {
      console.log(res, '响应结果')
    }).catch(err=>{
      console.log('err',err)
    })
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
