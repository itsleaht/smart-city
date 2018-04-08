<template>
  <section>
      <ul class="timeline">
        <li v-for="n in nbPoints" :key="n" @click="updateTimeline" :data-index="n"></li>
      </ul>
    </section>
</template>

<script>
export default {
  name: 'timeline',
  props: ['nbPoints', 'arrayOfEvents', 'preventScroll'],
  data () {
    return {
      activePoint : 0,
      lastScrollTop: 0,
    }
  },
  methods: {
    onScroll () {
      const gap = 100
      const windowPos = window.pageYOffset
       for (let i = 0; i < this.nbPoints; i++) {
        const event = this.arrayOfEvents[i]
        const currentPoint = this.timelineEls[i]
        if ((windowPos + gap) >= event.top && windowPos < (event.top + event.height)) {
          this.activePoint = i
          this.timelineEls[i].classList.add('active')
        } else {
          this.timelineEls[i].classList.remove('active')
        }
      }
    },
    updateTimeline (e) {
      const point = e.path[0]
      const index = point.getAttribute('data-index') - 1;
      this.jump = index
      window.scrollTo(0, this.arrayOfEvents[index].top);
    }
  },
  mounted () {
    if(!this.preventScroll) {
      this.timelineEls = document.querySelectorAll('.timeline li')
      window.addEventListener('scroll', throttle(this.onScroll, 100))
    }
  }
}
</script>

<style scoped lang="scss">
  .timeline {
    position: fixed;
    top: 5vh;
    right: 0;
    padding: 0;
    margin: 0;
    width: 60px;
    height: 95vh;
    background: #fff;
    list-style: none;

    &::before {
      content: "";
      position: absolute;
      width: 1px;
      height: 100%;
      background: $skyBlue;
      z-index: -1;
    }
  }

  li {
    display: block;
    margin: 50px auto;
    width: 11px;
    height: 11px;
    background: $darkBlue;
    border-radius: 50%;
    transition: background .5s, transform .5s, border .5s;
    cursor: pointer;

    &.active {
      background: #fff;
      transform: scale(1.5);
      border: 5px solid $yellow;
    }

    &.former {
      background: $skyBlue;
    }
  }
</style>
