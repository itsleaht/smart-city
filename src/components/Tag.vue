<template>
  <span v-bind:class="{ 'active': activeTag, 'clickable': clickable }" v-on:click="activateTag">{{tag}}</span>
</template>

<script>
export default {
  name: 'tag',
  props: ['tag', 'active', 'clickable'],
  data () {
    return {
      activeTag: this.active
    }
  },
  methods: {
    activateTag () {
      if (this.clickable) {
        this.activeTag = !this.activeTag
        this.$emit('activateTag', {'tag': this.tag})
      }
    }
  }
}
</script>

<style scoped lang="scss">
  span {
    display: inline-block;
    border-radius: 20px;
    background: #fff;
    border: 2px solid $lightBlue;
    color: #373737;
    font-size: 8px;
    padding: 5px;
    margin: 0 5px;
    transition: background .3s, border .3s, color .3s;

    &.active {
      background: $yellow;
      border-color: $yellow;
      color: #fff;
    }

    &:hover {
      border-color: $yellow;
      color: $yellow;

      &.active {
        color: #fff;
      }
    }

    &.clickable {
      padding: 5px 16px 5px 12px;
      font-size: 15px;
      margin: 10px;
      cursor: pointer;

      &.active {
        position: relative;

        &::after {
          content: "x";
          position: absolute;
          right: 5px;
          top: 7px;
          font-size: 12px;
          color: hsl(47, 96%, 81%);
      }
    }
    }
  }
</style>
