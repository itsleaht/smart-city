<template>
  <div class="home">
    <transition name="fade">
      <div class="landing" v-if="showLanding">
        <h1 class="uppercase black">Smart City</h1>
        <p class="black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, necessitatibus. Quasi, porro. Quidem sed atque quas officia alias earum in incidunt possimus est, magnam obcaecati iste inventore ut qui eius.</p>
        <span class="uppercase black">Scroll</span>
      </div>
    </transition>
    <section>
      <object :data="require('@/assets/scenes/scene1.svg')" type="image/svg+xml"></object>
      <object :data="require('@/assets/scenes/scene2.svg')" type="image/svg+xml"></object>
      <object :data="require('@/assets/scenes/scene3.svg')" type="image/svg+xml"></object>
      <object :data="require('@/assets/scenes/scene4.svg')" type="image/svg+xml"></object>
      <object :data="require('@/assets/scenes/scene5.svg')" type="image/svg+xml"></object>
    </section>
    <timeline :nbPoints="10"></timeline>
  </div>
</template>

<script>
import {TweenMax, Power2, TimelineLite} from 'gsap'
import timeline from '@/components/Timeline'

export default {
  name: 'home',
  components: {timeline},
  data () {
    return {
      showLanding: true,
      lastScrollTop: 0,
      activeElTimeline: 0
    }
  },
  methods: {

    onScroll () {
      const gap = 200
      if (this.showLanding) {
        this.showLanding = false
        this.timelineEls[0].classList.add('active')
      } else {
        const currentScrollTop = window.pageYOffset
        if (currentScrollTop >= (this.lastScrollTop + gap) &&
          this.activeElTimeline !== this.timelineEls.length - 1) {
          this.updateTimeline(true)
        } else if (this.activeElTimeline !== 0 &&
          this.lastScrollTop - 100 >= currentScrollTop &&
          this.lastScrollTop - 150 <= currentScrollTop) {
          this.updateTimeline(false)
        }
      }
    },
    updateTimeline (goDown) {
      this.lastScrollTop = window.pageYOffset
      this.timelineEls[this.activeElTimeline].classList.remove('active')
      goDown ? this.activeElTimeline++ : this.activeElTimeline--
      this.timelineEls[this.activeElTimeline].classList.add('active')
    }
  },
  mounted () {
    // todo : Automatic scroll top on load page
    this.timelineEls = document.querySelectorAll('.timeline li')
    window.addEventListener('scroll', this.onScroll)
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
      background: rgba(0, 0, 0, 0.5);
      color: #FFF;
      overflow: hidden;

      h1 {
        display: inline-block;
        margin: 50px auto 0;
        padding-bottom: 30px;
        font-weight: 900;
        font-size: 60px;
        border-bottom: 2px solid #fff;
      }
      p {
        margin: 30px auto 0;
        width: 350px;
        text-align: center;
      }
      span {
        position: absolute;
        bottom: 80px;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;

        &::before {
          content: "";
          position: absolute;
          bottom: -82px;
          left: 50%;
          height: 42px;
          width: 6px;
          border-radius: 5px;
          background: #fff;
        }
      }
    }
    section {
      // position: absolute;

      object {
        display: block;
        width: 100vw;
        height: auto;
        margin: 0;
      }
    }
  }
</style>
