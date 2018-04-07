<template>
  <svg class="shape-overlays" viewBox="0 0 100 100" preserveAspectRatio="none">
    <path class="shape-overlays__path"></path>
    <path class="shape-overlays__path"></path>
    <path class="shape-overlays__path"></path>
  </svg>
</template>

<script>

export default {
  name: 'overlay',
  props: ['show'],
  data () {
    return {
      numPoints: 3, // Number of control points for Bezier Curve.
      duration: 600, // Animation duration of one path element.
      delayPointsArray: [], // Array of control points for Bezier Curve.
      delayPointsMax: 300, // Max of delay value in all control points.
      delayPerPath: 60, // Delay value per path.
      timeStart: Date.now(),
      isOpened: true,
      isAnimating: true
    }
  },
  methods: {
    toggle () {
      this.isAnimating = true
      for (var i = 0; i < this.numPoints; i++) {
        this.delayPointsArray[i] = 0
      }
      this.open()
    },
    open () {
      this.timeStart = Date.now()
      this.renderLoop()
    },
    close () {
      this.isOpened = false
      this.timeStart = Date.now()
      this.renderLoop()
    },
    updatePath (time) {
      const points = []
      for (var i = 0; i < this.numPoints; i++) {
        const thisEase = this.isOpened
          ? (i === 1) ? ease.cubicOut : ease.cubicInOut
          : (i === 1) ? ease.cubicInOut : ease.cubicOut
        points[i] = thisEase(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1)) * 100
      }

      let str = ''
      str += (this.isOpened) ? `M 0 0 V ${points[0]} ` : `M 0 ${points[0]} `
      for (let i = 0; i < this.numPoints - 1; i++) {
        const p = (i + 1) / (this.numPoints - 1) * 100
        const cp = p - (1 / (this.numPoints - 1) * 100) / 2
        str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${points[i + 1]} `
      }
      str += (this.isOpened) ? `V 0 H 0` : `V 100 H 0`
      return str
    },
    render () {
      if (this.isOpened) {
        for (let i = 0; i < this.path.length; i++) {
          this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * i)))
        }
      } else {
        for (let i = 0; i < this.path.length; i++) {
          this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * (this.path.length - i - 1))))
        }
      }
    },
    renderLoop () {
      this.render()
      if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
        requestAnimationFrame(() => {
          this.renderLoop()
        })
      } else {
        this.isAnimating = false
        if (!this.isOpened) {
          this.$emit('closingAnimationEnded')
        }
      }
    }
  },
  mounted () {
    this.path = document.querySelectorAll('path')
    this.toggle()
  },
  watch: {
    show () {
      this.close()
    }
  }
}
</script>

<style scoped lang="scss">
  .shape-overlays {
    width: 100vw;
    height: 100vh;
    position: fixed;
    // top: 0;
    left: 0;

    path:nth-of-type(1) {
      fill: $darkBlue;
    }
    path:nth-of-type(2) {
      fill: $lightBlue;
    }

    path:nth-of-type(3) {
      fill: $yellow;
    }
  }
</style>
