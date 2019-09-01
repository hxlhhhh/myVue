<template>
  <div class="hello">
    <pre>{{content}}</pre>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      content: 'hello world'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    color: red;
    border: 1px solid red;
  }
</style>
