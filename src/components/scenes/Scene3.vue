<template>
  <object :data="require('@/assets/scenes/scene3.svg')" id="scene3" type="image/svg+xml"></object>
</template>

<script>
import {TimelineMax} from 'gsap'

export default {
  name: 'scene3',
  props: ['startAnimation'],
  mounted () {
    const svg =  document.getElementById('scene3')

    svg.addEventListener('load', () => {
      const scene2 = svg.getSVGDocument()
    })
  }
}
</script>

