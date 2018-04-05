<template>
  <section>
    <ul>
      <li>
        <router-link :to="{name: 'home'}"><span v-on:click="closeMenu">Innovations</span></router-link>
        <p>Discover the last smart cities innovations, from September 2017 to April 2018.</p>
      </li>
      <li>
        <router-link :to="{name: 'home'}"><span v-on:click="closeMenu">Smart cities</span></router-link>
        <p>Learn more about smart cities</p>
      </li>
      <li>
        <router-link :to="{name: 'sources'}"><span v-on:click="closeMenu">Sources</span></router-link>
        <p>List of all sources</p>
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
  background: $alphaDarkBlue;
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

      a {
        position: relative;
        color: $lightBlue;
        font-weight: 400;
        font-size: 34px;
        text-decoration: none;
        letter-spacing: 3px;
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
    transform: rotate(-90deg);
    text-transform: uppercase;
    font-family: 'Roboto Mono', monospace;
    color: #fff;
    text-align: left;
    letter-spacing: 2px;
  }
}
</style>
