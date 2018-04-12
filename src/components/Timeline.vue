<template>
  <section>
      <ul class="timeline">
        <li v-for="n in nbSteps" :key="n" :data-index="n" :class="{ 'active': current === n, 'previous':  n < current}" @click="onClickStep(n)"><span></span></li>
      </ul>
    </section>
</template>

<script>
export default {
  name: 'timeline',
  props: ['nbSteps', 'currentStep'],
  data () {
    return {
      current: this.currentStep
    }
  },
  methods: {
    changeStep (newStep) {
      this.current = newStep

      if (this.$route.name == 'home') {
        this.$emit('currentStep', newStep)
      }
    },
    onClickStep (newStep) {
      this.$emit('currentStep', newStep)
    }
  },
  watch: {
    'currentStep' (to, from) {
      console.log('to', to)
      this.changeStep(to)
    },
    'nbSteps' (to, from) {
    }
  }
}
</script>

<style scoped lang="scss">
  .timeline {
    position: fixed;
    top: 45px;
    bottom: 0;
    right: 0;
    padding: 0;
    margin: 0;
    width: 60px;
    background: #fff;
    list-style: none;

    &::before {
      content: "";
      position: absolute;
      width: 1px;
      height: 100%;
      background: $skyBlue;
      z-index: -1;
    }
  }
  ul {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 25px;
      height: 25px;

      span {
        display: block;
        width: 11px;
        height: 11px;
        background: $darkBlue;
        border-radius: 50%;
        transform-origin: center;
        transition: background .5s, transform .5s, border .5s;
        text-align: center;
        cursor: pointer;
      }

      &.active {
        span {
          background: #fff;
          transform: scale(1.5);
          border: 5px solid $yellow;
        }

      }

      &.previous {
        span {
          background: $skyBlue;
        }
      }
  }

  }
</style>
