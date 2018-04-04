<template>
  <div class="list">
    <router-link to="/">Retour</router-link>
    <div v-for="(month, index) in articles" :key="'month'+index">
        <h2>{{month.month}} </h2>
        <div id="sources-list">
          <source-articles  v-for="(article, indexArt) in month.articles"  :key="'article'+indexArt" :article="article"></source-articles>
        </div>
    </div>
  </div>
</template>

<script>
import articles from '@/data/sources.json'
import sourceArticles from '@/components/SourceArticle'

export default {
  name: 'home',
  components: {sourceArticles},
  data () {
    return {
      articles
    }
  }
}
</script>

<style lang="scss">
  .list {

    background: $lightBlue;

    h1 {
      text-transform: uppercase;
      letter-spacing: 4px;
      color: #8f8f8f;
    }
    h2 {
      font-size: 30px;
      width: 400px;
      margin: 50px auto 0;
      padding: 20px 0;
      text-transform: uppercase;
      letter-spacing: 3px;
      color: $darkBlue;
      font-family: "Montserrat";
    }

    #sources-list {
      width: 80%;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

</style>
