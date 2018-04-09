<template>
  <object :data="require('@/assets/scenes/scene2.svg')" id="scene2" type="image/svg+xml"></object>
</template>

<script>
import {TimelineMax} from 'gsap'

export default {
  name: 'scene2',
  props: ['startAnimation'],
  mounted () {
    const svg = document.getElementById('scene2')

    svg.addEventListener('load', () => {
      const scene2 = svg.getSVGDocument()
      const tlMain = new TimelineMax({repeat: -1, yoyo: true, repeatDelay: 0})
      const housesRight = scene2.querySelectorAll('.housesRight path, .housesRight rect')
      const housesLeft = scene2.querySelectorAll('.housesLeft path, .housesLeft rect')

      const toilette = scene2.querySelectorAll('.toilette path')
      const toiletteYellowButton = scene2.querySelector('.toiletteYellowButton')
      const toiletteOndes = scene2.querySelectorAll('.toiletteOndes path')
      const lanterne = scene2.querySelectorAll('.lanterne path, .lanterne rect')
      const lanterneYellowButton = scene2.querySelector('.lanterneYellowButton')

      const firstCloud = scene2.querySelector('.firstCloud')
      const secondCloud = scene2.querySelector('.secondCloud')
      const thirdCloud = scene2.querySelector('.thirdCloud')

      const trees = scene2.querySelectorAll('.trees path')

      const tlHousesLeft = new TimelineMax({repeat: -1, yoyo: true, repeatDelay: 5})
      const tlHousesRight = new TimelineMax({repeat: -1, yoyo: true, repeatDelay: 5})
      const tltoilette = new TimelineMax()
      const tltoiletteYellowButton = new TimelineMax({repeat: -1, yoyo: true})
      const tltoiletteOndes = new TimelineMax({repeat: -1, yoyo: true})
      const tlLanterne = new TimelineMax()
      const tlLanterneYellowButton = new TimelineMax({repeat: -1, yoyo: true})
      const tlClouds = new TimelineMax({repeat: -1, yoyo: true})
      const tlTrees = new TimelineMax()

      tlClouds
        .fromTo(firstCloud, 2, {x: 60}, {x: 0, ease: Power2.easeInOut}, 0)
        .fromTo(secondCloud, 2, {x: -100}, {x: 0, ease: Power2.easeInOut}, 0)
        .fromTo(thirdCloud, 2, {x: 0}, {x: -160, ease: Power2.easeInOut}, 0)

      tlHousesRight
        .staggerFromTo(housesRight, 2, {scale: 0, transformOrigin: '50% 100%'}, {scale: 1, ease: Elastic.easeOut.config(1, 0.3)}, 0.05)

      tlHousesLeft
        .staggerFromTo(housesLeft, 2, {scale: 0, transformOrigin: '50% 100%'}, {scale: 1, ease: Elastic.easeOut.config(1, 0.3)}, 0.05)

      tlTrees
        .staggerFromTo(trees, 0.4, {scale: 0, transformOrigin: '50% 50%'}, {scale: 1, ease: Power3.easeOut}, 0.05)

      tlMain
        .fromTo(trees, 1, {rotation: '5deg'}, { rotation: '0deg', ease: Elastic.easeOut.config(1, 0.3) }, 0.05)

      tltoilette
        .staggerFromTo(lanterne, 1, {scale: 0, transformOrigin: '50% 50%'}, {scale: 1}, 0.015)

      tltoiletteOndes
        .staggerFromTo(toiletteOndes, 1, {scale: 0, transformOrigin: '50% 50%'}, {scale: 1, ease: SteppedEase.config(6)}, 0.15)

      tltoiletteYellowButton
        .fromTo(toiletteYellowButton, 0.5, {y: 0}, {y: -10})

      tlLanterne
        .staggerFromTo(toilette, 1, {scale: 0, transformOrigin: '50% 50%'}, {scale: 1}, 0.015)

      tlLanterneYellowButton
        .fromTo(lanterneYellowButton, 0.5, {y: 0, delay: 0.7}, {y: -10})
    })
  }
}
</script>
