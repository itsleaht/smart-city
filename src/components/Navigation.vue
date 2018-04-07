<template>
  <section>
    <ul>
      <li>
        <router-link :to="{name: 'home'}"><span v-on:click="closeMenu">Innovations</span></router-link>
        <p>Discover the last smart cities innovations, from September 2017 to April 2018.</p>
      </li>
      <li>
        <router-link :to="{name: 'info'}"><span v-on:click="closeMenu">Smart cities</span></router-link>
        <p>Learn more about smart cities</p>
      </li>
      <li>
        <router-link :to="{name: 'sources'}"><span v-on:click="closeMenu">Sources</span></router-link>
        <p>Access informations about smart cities through a lot of datas.</p>
      </li>
      <li>
        <router-link :to="{name: 'about'}"><span v-on:click="closeMenu">About</span></router-link>
      </li>
    </ul>
    <p>Pauline Stichelbau,<br> Léa Tanda,<br> Fany Thourain,<br> Clara Vigourous,<br> Xindi Yang</p>
  </section>
</template>

<script>
export default {
  name: 'menu',
  methods: {
    closeMenu () {
      this.$emit('closeMenu')
    }
  }
}
</script>

<style scoped lang="scss">
section {
  position: relative;
  padding-top: 5vh;
  background: $yellow;
  width: 100vw;
  height: 95vh;
  z-index: 5;
  display: flex;
  align-items: center;

  ul {
    vertical-align: middle;
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
    animation-duration:  0.7s;
    animation-fill-mode: forwards;
    transition: transform 0.7s;
    transform: translateY(150%) rotate(-90deg);
    opacity: 0;

  }

  @keyframes slidein {
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideUp {
    to {
      transform: translateY(0) rotate(-90deg);
      opacity: 1;
    }
  }
}
</style>
