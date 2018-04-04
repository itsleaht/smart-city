<template>
  <div id="app">
    <header>
      <h1 class="uppercase">Smart City - </h1>
      <router-link :to="{name: 'sources'}" id="moreInfo" class="black">+</router-link>
    </header>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

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
      width: 100%;
      height: 5vh;
      background: #fff;
      line-height: 1.7;
      font-family: 'Roboto Mono', monospace;
      color: $darkBlue;
      font-size: 20px;

      h1 {
        padding: 0;
        margin: 0 50px 0;
        text-align: left;
        float: left;
        font-size: 20px;
      }
      #moreInfo {
        float: right;
        width: 60px;
        height: 5vh;
        border: none;
        font-size: 40px;
        background: #8f8f8f;
        color: #fff;
        text-decoration: none;
        line-height: 0.8;
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
