<template>
  <object :data="require('@/assets/scenes/scene4.svg')" id="scene4" type="image/svg+xml"></object>
</template>

<script>
import {TimelineMax} from 'gsap'

export default {
  name: 'scene4',
  props: ['startAnimation'],
  mounted () {
    const svg = document.getElementById('scene4')

    svg.addEventListener('load', () => {
      const scene4 = svg.getSVGDocument()
      const tlMain = new TimelineMax({repeat: -1, yoyo: true, repeatDelay: 0})

      const houses = scene4.querySelectorAll('.houses path, .houses rect')
      const trees = scene4.querySelectorAll('.trees path')
      const waterBubble = scene4.querySelectorAll('.waterBubble path')
      const waterBubbles = scene4.querySelector('.waterBubbles')
      const waterBubbleEyes = scene4.querySelectorAll('.waterBubbleEyes path')
      const waterBubbleYellowButton = scene4.querySelectorAll('.waterBubbleYellowButton path')
      const drapeau = scene4.querySelectorAll('.drapeau rect')
      const drapeauYellowButton = scene4.querySelectorAll('.drapeauYellowButton path')
      const cars = scene4.querySelectorAll('.car')
      const car1 = scene4.querySelector('.car1')
      const car2 = scene4.querySelector('.car2')
      const car3 = scene4.querySelector('.car3')
      const car4 = scene4.querySelector('.car4')

      const clouds = scene4.querySelectorAll('.cloud')

      const tlHousesRight = new TimelineMax({repeat: -1, yoyo: true, repeatDelay: 5})
      const tlDrapeau = new TimelineMax()
      const tlDrapeauYellowButton = new TimelineMax({repeat: -1, yoyo: true})
      const tlWaterBubble = new TimelineMax({repeat: -1})
      const tlWaterBubbleYellowButton = new TimelineMax({repeat: -1, yoyo: true})
      const tlClouds = new TimelineMax({repeat: -1, yoyo: true})
      const tlTrees = new TimelineMax()
      const tlCars = new TimelineMax({repeat: -1})

      tlClouds
        .staggerTo(clouds, 3, {ease: Power2.easeInOut, x: 540}, 0.02)

      tlHousesRight
        .staggerFromTo(houses, 2, {scale: 0, transformOrigin: '50% 100%'}, {scale: 1, ease: Elastic.easeOut.config(1, 0.3)}, 0.05)

      tlTrees
        .staggerFromTo(trees, 0.4, {scale: 0, transformOrigin: '50% 50%'}, {scale: 1, ease: Power3.easeOut}, 0.05)

      tlMain
        .fromTo(trees, 1, {rotation: '5deg'}, {rotation: '0deg', ease: Elastic.easeOut.config(1, 0.3)}, 0.05)
        .fromTo(waterBubble, 1, {y: 0}, {y: 6}, 0)
        .staggerFromTo(waterBubbleEyes, 0.2, {scaleY: 0.3, transformOrigin: '50% 50%'}, {scaleY: 1, repeatDelay: 2}, 0)
        .staggerFromTo(drapeau, 0.3, {scale: 1.05, transformOrigin: '50% 50%', ease: Sine.easeIn}, {scale: 1, ease: Sine.easeOut}, 0)

      tlDrapeau
        .staggerFromTo(drapeau, 1, {scale: 0, transformOrigin: '50% 50%'}, {scale: 1}, 0.015)

      tlDrapeauYellowButton
        .fromTo(drapeauYellowButton, 0.5, {y: 0}, {y: -10})

      tlWaterBubble
        .staggerFromTo(waterBubble, 1, {scale: 0, transformOrigin: '50% 50%'}, {scale: 1}, 0.015)
        .to(waterBubbles, 2.7, {x: 200, y: 100, ease: Expo.easeOut})
        .to(waterBubbles, 2.6, {x: 400, y: 200, ease: Expo.easeOut})
        .to(waterBubbles, 2.4, {x: 600, y: 250, ease: Expo.easeOut})
        .to(waterBubbles, 2, {x: 800, y: 280, ease: Expo.easeOut})
        .to(waterBubbles, 1.7, {x: 1000, y: 280, ease: Expo.easeOut})
        .to(waterBubbles, 1.4, {x: 1500, y: 280, ease: Expo.easeOut})

      tlWaterBubbleYellowButton
        .fromTo(waterBubbleYellowButton, 0.5, {y: 0}, {y: -10})

      tlCars
        .staggerFromTo(cars, 0.4, {scale: 0, transformOrigin: '50% 50%'}, {scale: 0.5, ease: Power3.easeOut}, 0.05)
        .fromTo(car1, 7, {x: -800}, {x: 1200, ease: Back.easeIn.config(1)}, 0)
        .fromTo(car2, 10, {x: -800}, {x: 1300, ease: Back.easeIn.config(1)}, 0.3)
        .fromTo(car3, 10, {x: -800}, {x: 1200, ease: Back.easeIn.config(1)}, 0)
        .fromTo(car4, 12, {x: -800}, {x: 1200, ease: Back.easeIn.config(1)}, 0)
    })
  }
}
</script>
