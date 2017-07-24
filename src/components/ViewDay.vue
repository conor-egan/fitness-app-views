<template>

  <div class="view-day">
    <body>
      <icon name="beer"></icon>

      <!-- with options -->
      <icon name="refresh" scale="2" spin></icon>
      <icon name="comment" flip="horizontal"></icon>
      <icon name="code-fork" label="Forked Repository"></icon>
    </body>
  </div>
</template>

<script>
  import Icon from 'vue-awesome/components/Icon'

  export default {
    name: 'viewDay',
    components: {
      Icon
    }
  }
</script>
