<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import viewDay from './components/ViewDay.vue'
import home from './components/Home.vue'
export default {
  name: 'app',
  components: {
    viewDay,
    home
  }
}
</script>
