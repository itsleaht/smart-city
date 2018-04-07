<template>
  <article>
    <span class="header">
        <p>{{article.place}}</p>
        <p>{{article.stringDate}}</p>
    </span>
    <h3>{{article.title}}</h3>
    <h4 v-if="article.translation">"{{article.translation}}"</h4>
    <div class="descriptions">
      <p  class="description" v-for="(description, indexDesc) in article.description"  :key="'description'+indexDesc">{{description}}</p>
    </div>
    <tag v-for="(tag, indexTag) in article.tags"  :key="'article'+indexTag" :tag="tag" :active="true"></tag>
    <span class="footer">
        <p v-if="article.by">By {{article.by}}</p>
        <p>From <a :href="article.href" target="_blank">{{article.from}}</a></p>
    </span>
  </article>
</template>

<script>
import Tag from '@/components/Tag'

export default {
  name: 'sourceArticle',
  props: ['article'],
  components: {Tag},
  methods: {
    closePop () {
      this.$emit('closePop')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  article {
    padding: 25px;
    width: 225px;
    margin: 30px auto;
    text-align: left;
    color: #126FB7;
    font-family: $montserrat;
     z-index: 1;

    .header {
      text-transform: uppercase;
      font-family: $roboto;
      font-size: 10px;
      text-align: left;

      p {
          padding: 0;
          margin: 0;
      }
    }

    .footer {
      display: block;
      margin-top: 15px;
      text-transform: uppercase;
      font-size: 8px;
      text-align: right;

      p {
        margin: 0;
        padding: 0;
      }

      a {
        text-align: right;
        text-decoration: none;
        color: #126FB7;
        border-bottom: 1px solid #126FB7;
        transition: color .3s;
        &:hover {
            color: #fff;
        }
      }
    }

    .description {
      font-size: 12px;
      padding: 0;
      margin: 5px 0;
    }

    h3 {
      font-size: 18px;
      margin-bottom: 5px;
    }

    h4 {
      font-size: 12px;
      margin: 0;
      font-style: italic;
      font-weight: 500;
    }
  }
</style>
