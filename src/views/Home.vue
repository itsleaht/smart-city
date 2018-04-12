<template>
  <div class="home">
    <transition name="fade">
      <div class="landing" v-if="showLanding">
        <div class="middle">
          <span class="question-mark black">?</span>
          <h1 class="uppercase black">What is a smart City ?</h1>
          <p>We believe a smart city is a digital and a human system, buildt to maintain a structured environment and to ensure a sustainable, prosperous future to its citizens.</p>
          <p>Here are some examples of smart cities innovations.</p>
        </div>
        <scroll-indicator :wheelAllowed="true"></scroll-indicator>
      </div>
    </transition>
    <section>
      <scene @getPositions="updateScene" :animate="animation"></scene>
      <pop-article v-for="(article, index) in events" :article="article" :key="'pop-'+index" :class="{'active':currentStep == index + 1}" ref="popArticle"></pop-article>
    </section>
    <timeline :nbSteps="nbSteps - 1" :currentStep="currentStep" @currentStep="changeStep"></timeline>
  </div>
</template>

<script>
import timeline from '@/components/Timeline'
import scene from '@/components/Scene'
import popArticle from '@/components/PopArticle'
import ScrollIndicator from '@/components/ScrollIndicator'
import events from '@/data/events.json'
import {TweenLite} from 'gsap'
require('gsap/ScrollToPlugin')

export default {
  name: 'home',
  components: {timeline, scene, popArticle, ScrollIndicator},
  data () {
    return {
      showLanding: true,
      arrayOfEventsTimeLine: [],
      currentStep: 0,
      wheelAllowed: false,
      positions: [],
      nbSteps: 11,
      events,
      animation: 0,
      startAnimation: false
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
    hideLanding () {
      this.showLanding = false
      window.removeEventListener('wheel', this.hideLanding)
      window.scrollTo(0, 0)
    },
    onWheel (e) {
      e.preventDefault()
      if (e.deltaY < 0 && this.currentStep > 1) { // Wheels up
        this.changeStep(this.currentStep-1)
      } else if (e.deltaY > 0 && this.currentStep <= this.nbSteps - 1) { // Wheels down
        this.changeStep(this.currentStep+1)
      }
    },
    manageWheel (step) {
      const pos = this.positions[step - 1]
      TweenLite.to(window, 2, {scrollTo: {y: pos.wheelTo}, ease: Power3.easeOut})
      this.animation = this.currentStep - 1
    },
    changeStep (newStep) {
      if (newStep >= 1 && newStep <= this.nbSteps - 1) {
        this.currentStep = newStep
        this.manageWheel(this.currentStep)
      }
    },
    updateScene (positions) {
      if (positions.length) {
        this.positions = positions
        this.wheelAllowed = true
        this.placePopArticles(positions)
        window.addEventListener('wheel', this.throttleEvent)
      }
    },
    placePopArticles (positions) {
      let popArticles = document.querySelectorAll('.pop-article')
      const popHeight = popArticles[0].clientHeight
      const popWidth = popArticles[0].clientWidth
      this.$refs.popArticle.forEach((pop, index) => {
        const pos = positions[index]
        let left = pos.left - popWidth - pos.width / 2
        let top = pos.top - popHeight
        top = top <= 0 ? 40 : top
        if (left <= 50) {
          left = pos.left + (pos.width / 2)
          pop.$el.classList.add('leftOriented')
        }
        pop.$el.style.top = top + 'px'
        pop.$el.style.left = left + 'px'
      })
    }
  },
  mounted () {
    TweenLite.to(window, 2, {scrollTo: {y: 0, x: 0}, ease: Power3.easeOut})
    this.throttleEvent = this.throttle(1000, this.onWheel)
    window.addEventListener('wheel', this.hideLanding)
    window.scrollTo(0, 0)
  },
  destroyed () {
    window.removeEventListener('wheel', this.throttleEvent)

  }
}
</script>

<style lang="scss">
  .home {
    width: 100%;
    overflow-x: hidden;

    .landing {
      position: fixed;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      color: #FFF;
      overflow: hidden;
      z-index: 10;
      pointer-events: none;

      h1 {
        position: relative;
        display: inline-block;
        padding-bottom: 5px;
        width: 600px;
        font-weight: 700;
        font-size: 40px;
        letter-spacing: 2px;

        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 200px;
          width: 200px;
          height: 5px;
          background: $yellow;
          border-radius: 30px;
        }
      }
      p {
        margin: 30px auto 0;
        width: 520px;
        text-align: center;
        font-family: $roboto;
        font-size: 15px;
      }
      span {
        &.question-mark {
          display: block;
          width: 70px;
          height: 70px;
          margin: 10px auto 15px;
          background: #FFF;
          border: 5px solid $yellow;
          border-radius: 100%;
          line-height: 1.8;
          color: $yellow;
          font-family: $montserrat;
          font-size: 40px;
        }
      }
    }
    section {
      object {
        pointer-events: none;
        display: block;
        width: 100vw;
        margin: 0;
        padding: 0;
        border: none;
      }

      .pop-article {
        position: absolute;
        top: 0;
        z-index: 5;
        visibility: hidden;
        opacity: 0;
        transform: scale(0.5);
        transition: opacity .5s, transform 0.7s;

        &.active {
          visibility: visible;
          opacity: 1;
          transform: scale(1);
        }
      }
    }
  }
</style>
