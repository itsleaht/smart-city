<template>
  <div class="list">
    <router-link to="/">Retour</router-link>
    <h1>Liste de tous les articles</h1>
    <div v-for="(month, index) in articles" :key="'month'+index">
      <h2>{{month.month}}</h2>
      <pop-article v-for="(article, indexArt) in month.articles"  :key="'article'+indexArt" :article=article ></pop-article>
    </div>
  </div>
</template>

<script>
  import articles from '@/data/data.json';
  import popArticle from '@/components/PopArticle.vue';

  export default {
    name: 'home',
    components: {popArticle},
    data () {
        return {
          articles
        }
      },
  };
</script>

<style lang="scss">
  h2 {
    width: 400px;
    margin: 100px auto 0;
    padding: 20px 0;
    text-transform: uppercase;
  }
  article {
    width: 300px;
    margin: 0 auto;
  }
</style>
