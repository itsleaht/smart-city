<template>
  <div class="infos">
    <transition name="goUp" mode="out-in" tag="div">
      <info-block v-for="(info, index) in infos" :key="'infowrapper'+index" :info="info" v-if="currentStep === index ? true: false"  ></info-block>
    </transition>
    <timeline :nbSteps="infos.length" :currentStep="currentStep" @currentStep="changeStep"></timeline>
  </div>
</template>

<script>
import infos from '@/data/infos.json'
import infoBlock from '@/components/InfoBlock'
import timeline from '@/components/Timeline'

export default {
  name: 'info',
  components: {infoBlock, timeline},
  data () {
    return {
      infos,
      currentStep: 0
    }
  },
  methods: {
    throttle (delay, fn) {
      let lastCall = 0
      return function (...args) {
        const now = (new Date()).getTime()
        if (now - lastCall < delay) return
        lastCall = now
        return fn(...args)
      }
    },
    changeStep (newStep) {
      if (newStep >= 0 && newStep <= infos.length) {
        this.currentStep = newStep
      }
    },
    onWheel(e) {
      e.preventDefault()
      if (e.deltaY < 0) { // Wheels up
        this.currentStep--
      } else if (e.deltaY > 0) { // Wheels down
        this.currentStep++
      }
    }
  },
  mounted () {
    window.addEventListener('wheel', this.throttle(1000, this.onWheel))
  }
}
</script>

<style lang="scss">
  .goUp-enter-active, .goUp-leave-active {
    transition: opacity 1s, transform 1s;
  }

  .goUp-enter, .goUp-leave-to {
    opacity: 0;
    transform: translateY(100px)
  }

  .infos {
    background: $lightYellow;
    font-family: $montserrat;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: flex;
    align-items: center;

    div, h1 {
      width: 700px;
      margin: 0 auto;
    }
    div {
      q {
        font-size: 25px;
        font-weight: bold;
        font-family: $roboto;

        &::before,
        &::after {
          content: none
        }
      }
    }
  }
</style>
