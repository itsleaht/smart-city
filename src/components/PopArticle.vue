<template>
  <div class="pop-article">
    <button id="closePop" v-on:click="backToScreen">X</button>
    <div class="header">
        <span>{{article.place}}</span>
        <span class="date">{{article.date.day}}.{{article.date.month}}.{{article.date.year}}</span>
    </div>
    <div class="content">
        <h1 class="uppercase">{{article.name}}</h1>
        <p class="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iure earum perferendis sed eum facere itaque repellendus autem, quasi quae numquam, quidem quod laboriosam. Fugit eos maiores minus praesentium eligendi.
        </p>
        <p class="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iure earum perferendis sed eum facere itaque repellendus autem, quasi quae numquam, quidem quod laboriosam. Fugit eos maiores minus praesentium eligendi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iure earum perferendis sed eum facere itaque repellendus autem, quasi quae numquam, quidem quod laboriosam. Fugit eos maiores minus praesentium eligendi.
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'popArticle',
  props: ['article'],
  methods: {
      closePop() {
        this.$emit('closePop')
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .pop-article {
        position: relative;
        display: inline-block;
        width: 225px;
        height: 400px;
        border-radius: 10px;
        box-shadow: 2px 3px 7px 0px rgba(0, 0, 0, 0.22);

        button {
            position: absolute;
            right: 3px;
            top: 8px;
            color: grey;
            border: none;
            outline: 0;
            background: none;
            font-weight: bold;
            cursor: pointer;
        }

        .header {
            color: grey;
            font-size: 10px;
            text-transform: uppercase;
            text-align: left;
            padding: 10px 25px;
            height: 20px;

            .date {
                float: right;
            }
        }

        .content {
            height: 350px;
            overflow: scroll;
            text-align: left;
            h1 {
                font-size: 14px;
                color: grey;
                text-transform: uppercase;
                text-align: center;
                margin: 20px 0;
                padding: 0 20px;
            }
            p {
                padding: 0 20px;
                margin: 10px 0;
                font-size: 12px;
                color: grey;
            }
        }

    }
</style>
