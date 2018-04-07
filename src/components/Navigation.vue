<template>
  <section id="navigation">
    <overlay :show="show" @closingAnimationEnded="closeMenu"></overlay>
    <ul v-bind:class="{ 'slideOut': slideOut }">
      <li>
        <router-link :to="{name: 'home'}"><span v-on:click="animateSlideOut">Innovations</span></router-link>
        <p>Discover the last smart cities innovations, from September 2017 to April 2018.</p>
      </li>
      <li>
        <router-link :to="{name: 'info'}"><span v-on:click="animateSlideOut">Smart cities</span></router-link>
        <p>Learn more about smart cities</p>
      </li>
      <li>
        <router-link :to="{name: 'sources'}"><span v-on:click="animateSlideOut">Sources</span></router-link>
        <p>Access informations about smart cities through a lot of datas.</p>
      </li>
      <li>
        <router-link :to="{name: 'about'}"><span v-on:click="animateSlideOut">About</span></router-link>
      </li>
    </ul>
    <p v-bind:class="{ 'slideDown': slideOut }">Pauline Stichelbau,<br> Léa Tanda,<br> Fany Thourain,<br> Clara Vigourous,<br> Xindi Yang</p>
  </section>
</template>

<script>
import overlay from '@/components/Overlay'

export default {
  name: 'menu',
  components: { overlay },
  props: ['showClosingAnimation'],
  data () {
    return {
      show: true,
      slideOut: false
    }
  },
  methods: {
    animateCloseMenu () {
      this.show = false
    },
    closeMenu () {
      this.$emit('closeNavigation')
    },
    animateSlideOut () {
      this.slideOut = true
    }
  },
  watch: {
    showClosingAnimation () {
      this.animateSlideOut()
    }
  },
  mounted () {
    document.querySelector('#navigation ul').addEventListener('animationend', () => {
      if (this.slideOut) {
        this.animateCloseMenu()
      }
    })
  }
}
</script>

<style scoped lang="scss">
section {
  position: fixed;
  padding-top: 5vh;
  width: 100vw;
  height: 95vh;
  z-index: 5;
  display: flex;
  align-items: center;
  background: none;
  z-index: 31;

  ul {
    vertical-align: middle;
    transition: transform 0.7s;
    animation-duration:  0.7s;
    animation-fill-mode: forwards;

    &.slideOut {
      animation-name: slideOut;
    }

    li {
      margin: 50px;
      text-align: left;
      list-style: none;
      font-family: 'Roboto Mono', monospace;
      animation-name: slidein;
      animation-duration:  0.7s;
      animation-fill-mode: forwards;
      transition: transform 0.3s;
      transform: translateX(100%);
      opacity: 0;

      &:nth-child(1) {
        animation-delay: 0.3s;
      }
      &:nth-child(2) {
        animation-delay: 0.6s;
      }
      &:nth-child(3) {
        animation-delay: 0.9s;
      }
      &:nth-child(4) {
        animation-delay: 1.2s;
      }

      a {
        position: relative;
        color: $lightBlue;
        font-weight: 400;
        font-size: 34px;
        text-decoration: none;
        letter-spacing: 3px;
        color: $darkBlue;
      }

      p {
        font-family: 'Montserrat', sans-serif;
        margin: 10px 20px 20px;
        color: #fff;
      }
    }
  }

  > p {
    position: absolute;
    bottom: 100px;
    right: 50px;
    text-transform: uppercase;
    font-family: 'Roboto Mono', monospace;
    color: #fff;
    text-align: left;
    letter-spacing: 2px;
    animation-name: slideUp;
    animation-delay: .7s;
    animation-duration:  0.7s;
    animation-fill-mode: forwards;
    transition: transform 0.7s;
    transform: translateY(150%) rotate(-90deg);
    opacity: 0;

    &.slideDown {
      animation-name: slideDown;
      animation-delay: 0;
    }
  }

  @keyframes slidein {
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

   @keyframes slideOut {
    to {
      transform: translateX(100vw);
      opacity: 1;
    }
  }

  @keyframes slideUp {
    to {
      transform: translateY(0) rotate(-90deg);
      opacity: 1;
    }
  }

  @keyframes slideDown {
    to {
      transform: translateY(100vw) rotate(-90deg);
      opacity: 0;
    }
  }

}
</style>
