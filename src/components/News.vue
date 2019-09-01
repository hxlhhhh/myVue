<template>
  <div class="hello">
    <pre>{{content}}</pre>
  </div>
</template>

<script>
export default {
  name: 'HelloNews',
  data () {
    return {
      content: 'hello news'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    color:blue;
  }
</style>
