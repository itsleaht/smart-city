<template>
  <span v-bind:class="{ 'active': active, 'clickable': clickable }">{{tag}}</span>
</template>

<script>
export default {
  name: 'tag',
  props: ['tag', 'active', 'clickable']
}
</script>

<style scoped lang="scss">
  span {
    display: inline-block;
    border-radius: 20px;
    background: #373737;
    color: #fff;
    font-size: 8px;
    padding: 5px;
    margin: 0 5px;
    transition: background .3s;

    &.active,
    &:hover {
      background: #62a7db;
    }

    &.clickable {
      padding: 5px 10px;
      font-size: 15px;
      margin: 10px;
      cursor: pointer;
    }
  }
</style>
