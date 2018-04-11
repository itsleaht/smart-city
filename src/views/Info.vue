<template>
  <div class="infos">
    <transition name="goUp" mode="out-in" tag="div">
      <info-block v-for="(info, index) in infos" :key="'infowrapper'+index" :info="info" v-if="currentSlide === index ? true: false" :test="index"></info-block>
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
      currentStep: 1,
      currentSlide: 0
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
      if (newStep >= 1 && newStep <= infos.length) {
        console.log('ayo')
        this.currentStep = newStep
        this.currentSlide = this.currentStep - 1
      }
    },
    onWheel (e) {
      e.preventDefault()
      if (e.deltaY < 0 && this.currentStep > 1) { // Wheels up
        this.currentStep--
        this.currentSlide--
      } else if (e.deltaY > 0 && this.currentStep < infos.length) { // Wheels down
        this.currentStep++
        this.currentSlide++
      }
    }
  },
  mounted () {
    this.throttleEvent = this.throttle(1000, this.onWheel)
    window.addEventListener('wheel', this.throttle(1000, this.onWheel))
  },
  destroyed () {
    window.removeEventListener('wheel', this.throttleEvent)
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
    background: $skyBlue;
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
