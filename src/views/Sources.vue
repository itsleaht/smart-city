<template>
  <div class="list">
    <div class="tags-list">
      <div class="tags-options">
        <p class="filters uppercase" v-on:click="panelOpened = !panelOpened">Filters<span class="icon-filters" ></span></p>
        <p class="clearFilters" v-on:click="clearFilters" v-bind:class="{ 'show': activeTags.length }">X Clear filters</p>
      </div>
      <div class="tags-list-panel" v-bind:class="{'panel-opened': panelOpened}">
        <div class="tags-list-panel-el">
          <tag v-for="(tagEl, indexTag) in tagsList" :key="'tag'+indexTag" :tag=tagEl :active="isActiveTag[indexTag]" :clickable="true" @activateTag="updateActiveTagList" :index="indexTag"></tag>
        </div>
      </div>
    </div>
    <transition-group name="list-fade" tag="div">
      <div v-for="(month, index) in sources" :key="'month'+index" v-if="month.articles.length" class="list-fade-item">
          <h2>{{month.month}} </h2>
          <transition-group name="list-fade" tag="div" id="sources-list">
            <source-articles  v-for="(article, indexArt) in month.articles"  :key="'article'+indexArt" :article="article" class="list-fade-item"></source-articles>
          </transition-group>
      </div>
    </transition-group>
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
      activeTags: [],
      activeTag: false
    }
  },
  computed: {
    isActiveTag () {
      let array = new Array((tagsList.length - 1))
      for (let i = 0; i < array.length; i++) {
        array[i] = false
      }
      return array
    }
  },
  methods: {
    updateActiveTagList (tag) {
      const pos = this.activeTags.indexOf(tag.name)
      if (pos !== -1) {
        this.activeTags.splice(pos, 1)
        this.isActiveTag[tag.index] = false
      } else {
        this.activeTags.push(tag.name)
        this.isActiveTag[tag.index] = true
      }
      this.updateSourcesList()
    },
    updateSourcesList () {
      const temps = articles.map((temp) => {
        const newArticlesList = temp.articles.filter((article) => {
          if (this.activeTags.length) {
            for (let i = 0; i < this.activeTags.length; i++) {
              if (article.tags && article.tags.indexOf(this.activeTags[i]) !== -1) {
                return true
              }
            }
          } else {
            return true
          }
        })
        return {month: temp.month, articles: newArticlesList}
      })
      this.sources = temps
    },
    clearFilters () {
      this.activeTags = []
      for (let i = 0; i < this.isActiveTag.length; i++) {
        this.isActiveTag[i] = false
      }
      this.updateSourcesList()
    }
  }
}
</script>

<style lang="scss">
.list-fade-item {
  transition: all 0.5s;
}

.list-fade-enter, .list-fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-fade-leave-active {
  position: absolute;
}

  .list {
    padding-top: 5vh;
    background: $lightBlue;
    min-height: 95vh;

    .tags-list {
      position: fixed;
      top: 5vh;
      width: 100%;
      z-index: 30;

      .tags-list-panel {
        position: absolute;
        height: 95vh;
        right: -30vw;
        width: 30vw;
        background: #fff;
        transition: transform .3s;
        box-shadow: 0px 0 6px 0px rgba(100, 62, 62, 0.4);

        &.panel-opened {
          transform: translateX(-30vw);
        }

        .tags-list-panel-el {
          position: relative;
          top: 150px;
          overflow: auto;
        }
      }

      .tags-options {
        position: absolute;
        right: 0;
        margin: 50px;
        text-align: right;
        letter-spacing: 2px;
        font-size: 10px;
        cursor: pointer;
        color: $darkBlue;
        z-index: 5;

        .filters {
          font-family: $montserrat;
          .icon-filters {
            position: relative;
            margin: 0 10px;
            display: inline-block;
            width: 15px;
            height: 3px;
            background: $darkBlue;
            transition: width .3s;

            &::before,
            &::after {
              content: "";
              position: absolute;
              left: 0;
              height: 3px;
              background: $darkBlue;
              transition: width .3s;
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

          &:hover {
            color: $yellow;

            .icon-filters {
              width: 20px;

              &::before {
                width: 10px;
              }

              &::after {
                width: 15px;
              }
            }
          }
        }
        .clearFilters {
          padding-top: 20px;
          font-family: $roboto;
          opacity: 0;
          transform: translateX(100%);
          transition: opacity .3s, transform .3s, color .3s;

          &.show {
            transform: translateX(0);
            opacity: 1;
          }

          &:hover {
            color: $yellow;
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
      font-family: $montserrat;
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
