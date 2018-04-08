<template>
  <div class="home">
    <transition name="fade">
      <div class="landing" v-if="showLanding">
        <span class="question-mark black">?</span>
        <h1 class="uppercase black">What is a smart City ?</h1>
        <p>A developed urban area that creates sustainable economic development and high quality of life by excelling in multiple key areas; economy, mobility, environment, people, living, and government. Excelling in these key areas can be done so through strong human capital, social capital, and/or ICT infrastructure.</p>
        <span class="uppercase black">Scroll</span>
      </div>
    </transition>
    <section>
      <scene1></scene1>
      <scene2></scene2>
      <scene4></scene4>
      <scene5></scene5>
    </section>
    <timeline :nbPoints="10" :preventScroll="true"></timeline>
  </div>
</template>

<script>
import timeline from '@/components/Timeline'
import scene1 from '@/components/scenes/Scene1'
import scene2 from '@/components/scenes/Scene2'
import scene4 from '@/components/scenes/Scene4'
import scene5 from '@/components/scenes/Scene5'

export default {
  name: 'home',
  components: {timeline, scene1, scene2, scene4, scene5},
  data () {
    return {
      showLanding: true
    }
  },
  methods: {
    hideLanding () {
      if (window.pageYOffset > 10) {
        this.showLanding = false
        window.removeEventListener('scroll', this.hideLanding)
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.hideLanding)
  }
}
</script>

<style lang="scss">
  .home {
    width: 100%;
    height: 450vh;

    .landing {
      position: fixed;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      color: #FFF;
      overflow: hidden;

      h1 {
        position: relative;
        display: inline-block;
        padding-bottom: 30px;
        width: 300px;
        font-weight: 700;
        font-size: 40px;
        letter-spacing: 2px;

        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50px;
          width: 200px;
          height: 5px;
          background: $yellow;
          border-radius: 30px;
        }
      }
      p {
        margin: 30px auto 0;
        width: 320px;
        text-align: center;
        font-family: $roboto;
        font-size: 15px;
      }
      span {
        &:first-of-type {
          display: block;
          width: 70px;
          height: 70px;
          margin: 50px auto 0;
          background: #FFF;
          border: 5px solid $yellow;
          border-radius: 100%;
          line-height: 1.8;
          color: $yellow;
          font-family: $montserrat;
          font-size: 40px;
        }
        &:last-of-type {
          position: absolute;
          bottom: 50px;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          color: $yellow;
          font-size: 9px;
          letter-spacing: 1px;

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
          }
        }
      }
    }
    section {
      // position: absolute;

      iframe {
        display: block;
        width: 100vw;
        height: 120vh;
        margin: 0;
        padding: 0;
        border: none;
      }
    }
  }
</style>
