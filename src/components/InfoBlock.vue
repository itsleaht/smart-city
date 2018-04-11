<template>
  <div class="wheelable" :data-test="test">
    <h1 v-if="info.title" v-html="info.title"></h1>
    <h2 v-if="info.subtitle"  v-html="info.subtitle"></h2>
    <p  v-if="description" v-for="(description, index) in info.description" :key="'info_'+index"  v-html="description"></p>
    <q v-if="info.quote" v-html="info.quote"></q>
  </div>
</template>

<script>
export default {
  name: 'infoBlock',
  props: ['info', 'active', 'test']
}
</script>

<style scoped lang="scss">
  div {
    width: 700px;
    margin: 0 auto;
    // transform: translateY(0)
  }
  div {
    font-weight: 600;

    q {
      font-size: 25px;
      font-weight: 600;
      font-family: $roboto;
      color: #ecf5fb;

      &::before,
      &::after {
        content: none
      }
    }
    h1 {
      font-size: 40px;
      // letter-spacing: 2px;
      font-weight: bold;
      color: #ecf5fb;
    }
    h2 {
      font-size: 30px;
      color: #ecf5fb;
    }
    p {
      font-size: 20px;
      font-family: $roboto;
      color: #ecf5fb;
    }
    /deep/ span {
      position: relative;
      z-index: 1;

      &::before {
        content: "";
        position: absolute;
        top: 22px;
        left: -5px;
        right: -5px;
        bottom: 5px;
        background: $yellow;
        z-index: -1;
        mix-blend-mode: difference;

      }
    }

    /deep/ em {
      font-style: normal;
      font-size: 50px;
    }
    p, q {
      /deep/ em {
        font-size: 30px;
      }
    }

    p {
      /deep/ span {
        &::before {
          top: 10px;
        }
      }
    }

    q {
      /deep/ span {
        &::before {
          top: 15px;
        }
      }
    }

    h2 {
      /deep/ span {
        &::before {
          top: 15px;
        }
      }
    }
  }
</style>
