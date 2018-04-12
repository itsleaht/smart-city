<template>
  <div class="pop-article">
    <!-- <button id="closePop" v-bind:class="{ 'topOriented': topOriented }" v-on:click="closePop" >+</button> -->
    <div class="header">
        <span class="place">{{article.place}}</span>
        <span class="date">{{article.stringDate}}</span>
    </div>
    <div class="content">
        <h1 class="uppercase">{{article.title}}</h1>
        <p class="description" v-for="(description, index) in article.description" :key="'description'+index">
            {{description}}
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'popArticle',
  props: ['article', 'topOriented'],
  methods: {
    closePop () {
      this.$emit('closePop')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .pop-article {
    position: relative;
    display: inline-block;
    width: 235px;
    border-radius: 8px;
    box-shadow: 6px 10px 20px 4px rgba(114, 114, 114, 0.13);
    background: #fff;
    padding: 10px 0;

    button {
      position: absolute;
      top: 0;
      right: 0;
      border: none;
      outline: 0;
      background: none;
      color: grey;
      font-weight: 900;
      font-size: 16px;
      transform: rotate(45deg);
      cursor: pointer;
    }

    .header {
      color: grey;
      font-size: 10px;
      text-transform: uppercase;
      text-align: left;
      padding: 10px 25px;
      height: 20px;

      .place {
        max-width: 100px;
        display: inline-block;
      }

      .date {
        float: right;
        letter-spacing: 0.9px;
      }
    }

    .content {
      width: 98%;
      overflow: auto;
      text-align: left;
      h1 {
        margin: 15px 0;
        padding: 0 20px;
        font-size: 13px;
        font-weight: 900;
        color: #b1b1b1;
        text-transform: uppercase;
        text-align: center;
        letter-spacing: 1.1px;
      }
      p {
        padding: 0 20px;
        margin: 10px 0;
        font-size: 12px;
        color: #b1b1b1;
      }
    }
  }

  ::-webkit-scrollbar-track
  {
    border-radius: 10px;
    background-color: #e8e8e8;
  }

  ::-webkit-scrollbar
  {
    width: 12px;
    background-color: #ffffff;
  }
  ::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    background-color: #b1b1b1;
  }
</style>
