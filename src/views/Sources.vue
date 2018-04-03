<template>
  <div class="list">
    <router-link to="/">Retour</router-link>
    <h1>Sources</h1>   
    <div v-for="(month, index) in articles" :key="'month'+index">
        <h2>{{month.month}}</h2>
        <div id="sources-list">
            <article  v-for="(article, indexArt) in month.articles"  :key="'article'+indexArt">
                <h3>{{article.title}}</h3>
                <h4>{{article.translation}}</h4>
                <a :href="article.href">From {{article.from}}</a>
                <p>By {{article.by}}</p>
            </article>
        </div>
    </div>
  </div>
</template>

<script>
import articles from '@/data/sources.json';

export default {
  name: 'home',
  data () {
      return {
        articles
      }
    },
};
</script>

<style lang="scss">
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
    letter-spacing: 2px;
}
#sources-list {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    article {
    padding: 25px;
    width: 280px;
    margin: 30px auto;
    text-align: left;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.18);
    border-radius: 20px;

    h3 {
        font-size: 16px;
        text-transform: uppercase;
        margin-bottom: 5px;
    }

    h4 {
        font-size: 14px;
        margin: 0;
        font-style: italic;
        font-weight: 500;
    }

    a, p {
        margin: 0;
        padding: 0;
        display: block;
        font-size: 12Px;
        text-align: right;
        text-decoration: none;
    }

    a {
        font-weight: 900;
        color: #000;
    }
  }
}
  
</style>
