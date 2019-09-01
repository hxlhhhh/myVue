<template>
  <div id="app">
    <table width="100%">
      <tr>
        <td colspan="2" style="background-color: darkgoldenrod">
          <router-view name="myHeader"> </router-view>
        </td>
      </tr>
      <tr>
        <td width="20%" style="background-color: thistle">
          <router-view name= "mySidebar"></router-view>
        </td>
        <td width="80%" style="background-color: aquamarine">
          <router-view name ="myDetail"></router-view>
        </td>
      </tr>
    </table>
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
