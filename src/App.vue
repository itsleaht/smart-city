<template>
  <div id="app">
    <header>
      <h1 class="uppercase"><router-link :to="{name: 'home'}">Smart City</router-link> - </h1>
      <a v-on:click="updateMenu" v-bind:class="{ 'open-menu': showMenu }" href="#" id="moreInfo" class="black"><span>+</span></a>
    </header>
      <navigation v-if="showMenu" @closeMenu="showMenu = !showMenu" :showClosingAnimation="showClosingMenuAnimation" @closeNavigation="closeNavigation"></navigation>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
  </div>
</template>
<script>
import Navigation from '@/components/Navigation'

export default {
  name: 'App',
  components: {Navigation},
  data () {
    return {
      showMenu: false,
      showClosingMenuAnimation: false
    }
  },
  methods: {
    updateMenu () {
      if (this.showMenu) {
        this.showClosingMenuAnimation = true
      } else {
        this.showClosingMenuAnimation = false
        this.showMenu = !this.showMenu
      }
    },
    closeNavigation () {
      this.showMenu = false
    }
  }
}
</script>

<style lang="scss">
  body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  #app {
    position: relative;
    font-family: 'Source Sans Pro', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    header {
      position: fixed;
      top: 0;
      width: 100%;
      height: 5vh;
      background: #fff;
      line-height: 1.7;
      font-family: 'Roboto Mono', monospace;
      color: $darkBlue;
      font-size: 20px;
      z-index: 35;

      h1 {
        padding: 0;
        margin: 0 50px 0;
        text-align: left;
        float: left;
        font-size: 20px;

        a {
          text-decoration: none;
          color: $darkBlue;
        }
      }
      #moreInfo {
        float: right;
        width: 60px;
        height: 5vh;
        border: none;
        font-size: 40px;
        background: $darkBlue;
        color: #fff;
        text-decoration: none;
        line-height: 0.8;

        span {
          display: block;
          transition: transform .3s;
        }

        &.open-menu {
          span {
            transform: rotate(45deg);
          }
        }
      }
    }
  }
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .uppercase {
    text-transform: uppercase;
  }
  .black {
    font-weight: 900;
  }
</style>
