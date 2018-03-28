<template>
  <div class="home">
    <router-link to="/list">Voir tous les articles</router-link>
   <div class="landing">
     <h1>Smart City</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, necessitatibus. Quasi, porro. Quidem sed atque quas officia alias earum in incidunt possimus est, magnam obcaecati iste inventore ut qui eius.</p>
   </div>
   <span class="uppercase">Scroll</span>
  </div>
</template>

<script>
import {TweenMax, Power2, TimelineLite} from "gsap";

export default {
  name: 'home'
};
</script>

<style lang="scss">
  .uppercase {
    text-transform: uppercase;
  }
</style>

