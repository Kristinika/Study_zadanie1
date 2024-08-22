<template>
  <div class="accordion">
    <slot></slot>
  </div>
</template>
  
<script>
  export default {
    name: 'Accordion'
  }
</script>

<style scoped>
  .accordion {
    width: 100%;
  }
</style>
  