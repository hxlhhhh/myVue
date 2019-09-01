<template>
  <div class="hello">
    <pre>{{content}}</pre>
  </div>
</template>

<script>
export default {
  name: 'HelloAbout',
  data () {
    return {
      content: 'hello about'
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
