<template>
  <div class="list">
    <div class="tags-list" ref="test">
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
    <transition-group name="list-fade" tag="div" @after-leave="afterLeave" @after-enter="afterEnter">
      <div v-for="(month, index) in sources" :key="'month'+index" v-if="month.articles.length" class="list-fade-item month" ref="monthList" :data-month-date="month.monthDate">
          <h2>{{month.month}} </h2>
          <transition-group name="list-fade" tag="div" id="sources-list">
            <source-articles  v-for="(article, indexArt) in month.articles"  :key="'article'+indexArt" :article="article" class="list-fade-item"></source-articles>
          </transition-group>
      </div>
    </transition-group>
    <span class="monthDate" :ref="'monthDate'">{{monthDate}}</span>
    <timeline :nbSteps="nbSteps" :currentStep="currentStep" @currentStep="scrollToPos"></timeline>
  </div>
</template>

<script>
import articles from '@/data/sources.json'
import tagsList from '@/data/tags.json'
import sourceArticles from '@/components/SourceArticle'
import Tag from '@/components/Tag'
import Timeline from '@/components/Timeline'
require('gsap/ScrollToPlugin')

export default {
  name: 'home',
  components: {sourceArticles, Tag, Timeline},
  data () {
    return {
      articles,
      tagsList,
      panelOpened: false,
      sources: articles,
      activeTags: [],
      activeTag: false,
      nbSteps: articles.length,
      currentStep: 1,
      arrayOfEventsTimeLine: [],
      monthDate: articles[0].monthDate,
      isScrollingUp: false
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
      const temps = articles.map((temp, index) => {
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
        return {'month': temp.month, 'articles': newArticlesList, 'monthDate': temp.monthDate}
      })
      this.sources = temps
      this.currentStep = 1
      TweenLite.to(window, 2, {scrollTo: {y: 0, x: 0}, ease: Power3.easeOut})
      this.monthDate = this.$refs.monthList[0].getAttribute('data-month-date')
    },
    afterLeave () {
      this.nbSteps = this.$refs.monthList.length
      this.monthDate = this.$refs.monthList[0].getAttribute('data-month-date')
    },
    afterEnter () {
      this.monthDate = this.$refs.monthList[0].getAttribute('data-month-date')
    },
    clearFilters () {
      this.activeTags = []
      for (let i = 0; i < this.isActiveTag.length; i++) {
        this.isActiveTag[i] = false
      }
      this.updateSourcesList()
      this.monthDate = this.$refs.monthList[0].getAttribute('data-month-date')
    },
    changeStep (newStep) {
      if (newStep >= 0 && newStep <= this.nbSteps) {
        this.currentStep = newStep
        this.$refs.monthDate.innerHTML = this.monthDate
      }
    },
    scrollToPos (newStep) {
      const pos = this.$refs.monthList[newStep - 1].offsetTop
      TweenLite.to(window, 2, {scrollTo: {y: pos - this.headerHeight, x: 0}, ease: Power3.easeOut})
      this.monthDate = this.$refs.monthList[newStep - 1].getAttribute('data-month-date')
      this.changeStep(newStep)
    },
    onScroll () {
      this.$refs.monthList.forEach((month, index) => {
        const offsetBottomY = (month.offsetTop + month.clientHeight) - window.scrollY
        const offsetTopY = month.offsetTop - window.scrollY
        const offsetTopYPourcent = offsetTopY / window.innerHeight
        const offsetBottomYPourcent = offsetBottomY / window.innerHeight

        if (this.isScrollingUp && offsetBottomYPourcent > 0 && offsetBottomYPourcent < 1) {
            this.changeStep(index + 1)
            this.monthDate = month.getAttribute('data-month-date')
        } else if (!this.isScrollingUp && offsetTopYPourcent > 0 && offsetTopYPourcent < 1) {
            this.changeStep(index + 1)
            this.monthDate = month.getAttribute('data-month-date')
        }
      })
    },
    throttle (delay, fn) {
      let lastCall = 0
      return function (...args) {
        const now = (new Date()).getTime()
        if (now - lastCall < delay) return
        lastCall = now
        return fn(...args)
      }
    },
    onWheel (e) {
      if (e.deltaY < 0 && this.currentStep > 1) { // Wheels up
        this.isScrollingUp = true
      } else if (e.deltaY > 0 && this.currentStep <= this.nbSteps - 1) { // Wheels down
        this.isScrollingUp = false
      }
    }
  },
  mounted () {
    this.headerHeight = document.querySelector('header').clientHeight
    this.onWheel = this.onWheel
    TweenLite.to(window, 2, {scrollTo: {y: 0, x: 0}, ease: Power3.easeOut})
    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('wheel', this.onWheel)
    this.monthDate = this.$refs.monthList[0].getAttribute('data-month-date')
  },
  destroyed () {
     window.removeEventListener('scroll', this.onScroll)
     window.removeEventListener('wheel', this.onWheel)
  }
}
</script>

<style lang="scss">
.list-fade-item {
  transition: all 1s;
}

.list-fade-enter, .list-fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-fade-leave-active {
  // position: absolute;
}

  .list {
    padding-top: 5vh;
    background: $lightBlue;
    min-height: 95vh;

    .tags-list {
      position: fixed;
      top: 45px;
      width: 100%;
      z-index: 30;

      .tags-list-panel {
        position: absolute;
        height: 95vh;
        right: -350px;
        width: 350px;
        background: #fff;
        transition: transform .3s;
        box-shadow: 0px 0 6px 0px rgba(100, 62, 62, 0.4);

        &.panel-opened {
          transform: translateX(-350px);
        }

        .tags-list-panel-el {
          position: relative;
          top: 130px;
          overflow: auto;
        }
      }

      .tags-options {
        position: absolute;
        right: 0;
        margin: 50px 70px;
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
          margin-right: 10px;
          font-family: $roboto;
          opacity: 0;
          transform: translateX(150%);
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
    .month,
    article {
       transition: all 1s;
       position: relative;
    }
    .monthDate {
      position: fixed;
      right: 50px;
      bottom: 0;
      font-size: 500px;
      font-family: "Montserrat", sans-serif;
      color: #fff;
      opacity: 0.1;
    }
  }
</style>
