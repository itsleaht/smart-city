<template>
  <div class="wheelable">
    <h1 v-if="info.title">{{info.title}}</h1>
    <h2 v-if="info.subtitle">{{info.subtitle}}</h2>
    <p  v-if="description" v-for="(description, index) in info.description" :key="'info_'+index"  v-html="description"></p>
    <q v-if="info.quote" v-html="info.quote"></q>
  </div>
</template>

<script>
export default {
  name: 'infoBlock',
  props: ['info', 'active'],
}
</script>

<style scoped lang="scss">
  div {
    width: 700px;
    margin: 0 auto;
    // transform: translateY(0)
  }
  div {
    q {
      font-size: 25px;
      font-weight: bold;
      font-family: $roboto;

      &::before,
      &::after {
        content: none
      }
    }
    h1 {
      font-size: 40px;
    }
    h2 {
      font-size: 30px;
    }
    p {
      font-size: 20px;
      font-family: $roboto;
    }


  }
</style>
