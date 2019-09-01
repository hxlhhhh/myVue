<template>
  <div>
    <h1>球员页面</h1>
    <ul>
      <li>编号 :{{detail.uid}}</li>
      <li>名字 :{{detail.name}}</li>
      <li>得分 :{{detail.point}}</li>
    </ul>
    <router-link to = "profile">简介</router-link>
    <router-link to = "stats">数据</router-link>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Play',
  data () {
    return {
      detail: {},
      profile: '',
      stats: ''
    }
  },
  beforeRouteUpdate (to, from, next) {
    console.log(to)
    console.log(from)
    this.detail = this.getPlayer(to.params.uid)
    this.stats = '/player/' + this.$route.params.uid + '/stats'
    this.profile = '/player/' + this.$route.params.uid + '/profile'
    next()
  },
  mounted () {
    console.log('query')
    console.log(this.$route.query)
    console.log('query')
    this.detail = this.getPlayer(this.$route.params.uid)
    this.stats = '/player/' + this.$route.params.uid + '/stats'
    this.profile = '/player/' + this.$route.params.uid + '/profile'
  },
  methods: {
    getPlayer (uid) {
      console.log(uid)
      switch (uid) {
        case '1':
          return {uid: 1, name: '库里', point: 26}
        case '2':
          return {uid: 2, name: '哈登', point: 27}
        case '3':
          return {uid: 3, name: '杰克逊', point: 28}
        default :
          // eslint-disable-next-line standard/object-curly-even-spacing
          return {uid: -1, name: '杰克逊', point: 29 }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    color:yellow;
  }
</style>
