<template>
  <span class="uppercase black wheelIndicator" :class="{'wheelAllowed' : wheelAllowed, 'light' : lightColors}">Scroll to navigate</span>
</template>
<script>
export default {
  name: 'scrollIndicator',
  props: ['wheelAllowed', 'lightColors']
}
</script>
<style lang="scss">
.wheelIndicator {
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: $yellow;
  font-size: 9px;
  letter-spacing: 1px;
  opacity: 0;
  visibility: hidden;
  transition: opacity .3s;

  &::before {
    content: "";
    position: absolute;
    bottom: -52px;
    left: 50%;
    transform: translateX(-50%);
    height: 42px;
    width: 6px;
    border-radius: 5px;
    background: $yellow;
    transition: height .3s;
  }

  &.light {
    color: $lightYellow;

    &::before {
      background: $lightYellow;
    }
  }

  &.wheelAllowed {
    opacity: 1;
    visibility: visible;

    &::before {
      animation-name: grows;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }
  }
}
 @keyframes grows {
  from {
    height: 0;
  }
  to {
    height: 42px;
  }
}
</style>
