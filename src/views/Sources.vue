<template>
  <div class="list">
    <div class="tags-list">
      <p class="filters uppercase" v-on:click="panelOpened = !panelOpened">Filters<span class="icon-filters" ></span></p>
      <div class="tags-list-panel" v-bind:class="{'panel-opened': panelOpened}">
        <tag v-for="(tagEl, indexTag) in tagsList" :key="'tag'+indexTag" :tag=tagEl :active="false" :clickable="true" @activateTag="updateActiveTagList"></tag>
      </div>
    </div>
    <div v-for="(month, index) in sources" :key="'month'+index" v-if="month.articles.length">
        <h2>{{month.month}} </h2>
        <div id="sources-list">
          <source-articles  v-for="(article, indexArt) in month.articles"  :key="'article'+indexArt" :article="article"></source-articles>
        </div>
    </div>
  </div>
</template>

<script>
import articles from '@/data/sources.json'
import tagsList from '@/data/tags.json'
import sourceArticles from '@/components/SourceArticle'
import Tag from '@/components/Tag'

export default {
  name: 'home',
  components: {sourceArticles, Tag},
  data () {
    return {
      articles,
      tagsList,
      panelOpened: false,
      sources: articles,
      activeTags : []
    }
  },
  methods: {
    updateActiveTagList (tag) {
      tag = tag.tag
      const pos = this.activeTags.indexOf(tag)
      if (pos != -1) {
        this.activeTags.splice(pos, 1);
      } else {
        this.activeTags.push(tag);
      }
      this.updateSourcesList();
    },
    updateSourcesList () {
      var temps = articles;
      var test = [];
      test = temps.map( (temp) => {
        const newArticlesList = temp.articles.filter( (article) => {
          for (let i = 0; i < this.activeTags.length; i++) {
            if (article.tags && article.tags.indexOf(this.activeTags[i]) != -1) {
              return true
            }
          }
        })
        return {month: temp.month, articles: newArticlesList}
      })
      this.sources = test;
    }
  }
}
</script>

<style lang="scss">
  .list {
    padding-top: 5vh;
    background: $lightBlue;

    .tags-list {
      position: fixed;
      top: 5vh;
      width: 100%;

      .tags-list-panel {
        position: absolute;
        padding-top: 100px;
        height: 95vh;
        right: -25vw;
        width: 25vw;
        background: #fff;
        transition: transform .3s;
        box-shadow: 0px 0 6px 0px rgba(83, 82, 82, 0.4);

        &.panel-opened {
          transform: translateX(-25vw);
        }
      }

      .filters {
        position: absolute;
        right: 0;
        margin: 50px;
        text-align: right;
        font-family: "Montserrat", sans-serif;
        letter-spacing: 2px;
        font-size: 10px;
        cursor: pointer;
        color: $darkBlue;
        z-index: 5;

        .icon-filters {
          position: relative;
          margin: 0 10px;
          display: inline-block;
          width: 15px;
          height: 3px;
          background: $darkBlue;

          &::before,
          &::after {
            content: "";
            position: absolute;
            left: 0;
            height: 3px;
            background: $darkBlue;
          }

          &::before {
            top: -7px;
            width: 20px;
          }

          &::after {
            top: 7px;
            width: 10px;
          }
        }
      }

    }



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
