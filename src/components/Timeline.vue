<template>
  <section>
      <ul class="timeline">
        <li v-for="n in nbPoints" :key="n"></li>
      </ul>
    </section>
</template>

<script>
export default {
  name: 'timeline',
  props: ['nbPoints']
}
</script>

<style scoped lang="scss">
  .timeline {
    position: fixed;
    top: 5vh;
    right: 0;
    padding: 0;
    margin: 0;
    width: 60px;
    height: 95vh;
    background: #fff;
    list-style: none;

    &::before {
      content: "";
      position: absolute;
      width: 1px;
      height: 100%;
      background: #83CEE2;
      z-index: -1;
    }
  }

  li {
    display: block;
    margin: 50px auto;
    width: 11px;
    height: 11px;
    background: #83CEE2;
    border-radius: 50%;
    transition: background .3s, transform .3s;
    cursor: pointer;

    &.active {
      background: #fff;
      transform: scale(1.5);
      border: 5px solid #EDC600;
    }

    &.former {
      background: #83CEE2;
    }
  }
</style>
