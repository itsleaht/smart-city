<template>
  <div class="about">
    <router-link to="/">Retour</router-link>
    <h1>About</h1>
    <p>This website aims at introducing connected urbanism and most especially smart cities evolutions between September 2017 and April 2018.</p>
    <p>It is the result of a school project in Design & Development Bachelor at Gobelins.</p>
    <p>Designed by Clara Vigourous Fany Thourain and Xindi Yang</p>
    <p>Developed by Pauline Stichelbaut and Léa Tanda.</p>
  </div>
</template>

<script>

export default {
  name: 'about'
}
</script>

<style lang="scss">
.about {
  background: $lightBlue;
  width: 100vw;
  min-height: 100vh;

  h1 {
    font-family: $montserrat;
    color: $darkBlue;
    font-size: 30px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 100px;
  }

  p {
    margin: 20px auto;
    width: 450px;
    font-family: $roboto;
    color: $darkBlue;
    font-weight: bold;
    text-align: center;
  }
}
</style>
