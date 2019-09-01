<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button class="btn btn-danger">危险</button>
    <p>
     <!-- <router-link to="/">Home</router-link>
      <router-link to="/news">新闻</router-link>
      <router-link to="/about">关于</router-link>
      <router-view/>-->
    </p>
    <p>
      <router-link to="/">Home</router-link>
      <router-link to="/player/1">哈登1</router-link>
      <router-link to="/player/2">库里1</router-link>
    </p>
    <p>
      <button @click="btnClick(1)">库里2</button>
      <button @click="btnClick(2)">哈登2</button>
      <!-- 记得加: 如果不加的话，会默认当成字符串处理-->
      <router-link :to="{name:'Player',params:{uid:'1'}}">库里3</router-link>
      <router-link :to="{path:'/player/2/stats'}">哈登3</router-link>
    </p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    btnClick (uid) {
      // eslint-disable-next-line no-template-curly-in-string
      // 链接到该组件
      // this.$router.push({path: `/player/${uid}`})
      // 链接到子组件
      // this.$router.push({path: `/player/${uid}/stats`})
      // 写组件名称
      this.$router.push({name: 'Player', params: {uid: uid.toString()}})
      // query方法
      // this.$router.push({name: 'Player', query: {uid: uid}})
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
