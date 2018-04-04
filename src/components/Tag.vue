<template>
  <span>{{tag}}</span>
</template>

<script>
export default {
  name: 'tag',
  props: ['tag']
}
</script>

<style scoped lang="scss">
  span {
    display: inline-block;
    border-radius: 20px;
    background: #62a7db;
    color: #fff;
    font-size: 8px;
    padding: 5px;
    margin: 0 5px;
  }
</style>
