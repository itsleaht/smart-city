<template>
  <object :data="require('@/assets/scenes/scene.svg')" id="sceneMain" type="image/svg+xml"></object>
</template>

<script>
import {TimelineMax} from 'gsap'

export default {
  name: 'scene',
  props: ['startAnimation'],
  methods: {
    activateTimelines () {
      const tlMain = new TimelineMax({repeat: -1, yoyo: true, repeatDelay: 0})

      const treesDiv1 = this.sceneMain.querySelectorAll('.tree')
      const treesDiv2 = this.sceneMain.querySelectorAll('.tree2')
      const treesDiv3 = this.sceneMain.querySelectorAll('.tree3')
      const mainObjectSatelite = this.sceneMain.querySelector('.mainObjectSatelite')
      const sateliteOndes = this.sceneMain.querySelectorAll('.sateliteOndes')
      const mainObjectToilet = this.sceneMain.querySelector('.mainObjectToilet')
      const mainObjectDetecteurAir = this.sceneMain.querySelector('.mainObjectDetecteurAir')
      const mainObjectPanneaux = this.sceneMain.querySelector('.mainObjectPanneaux')
      const mainObjectSeaBubble = this.sceneMain.querySelector('.mainObjectSeaBubble')
      const mainObjectTelephone = this.sceneMain.querySelector('.mainObjectTelephone')
      const mainObjectSmartRoad = this.sceneMain.querySelector('.mainObjectSmartRoad')
      const mainObjectPieton = this.sceneMain.querySelector('.mainObjectPieton')
      const mainObjectCar = this.sceneMain.querySelector('.mainObjectCar')
      const mainObjectCars = this.sceneMain.querySelector('.mainObjectCars')
      const mainObjectPolice = this.sceneMain.querySelector('.mainObjectPolice')
      const mainObjectTaxiVolant = this.sceneMain.querySelector('.mainObjectTaxiVolant')
      const cloud1 = this.sceneMain.querySelector('.cloud1')
      const cloud2 = this.sceneMain.querySelector('.cloud2')
      const cloud3 = this.sceneMain.querySelector('.cloud3')
      const cloud4 = this.sceneMain.querySelector('.cloud4')
      const cloud5 = this.sceneMain.querySelector('.cloud5')
      const cloud6 = this.sceneMain.querySelector('.cloud6')
      const bg4 = this.sceneMain.querySelector('.bg4')
      const bg5 = this.sceneMain.querySelector('.bg5')

      const yellowButtons = this.sceneMain.querySelectorAll('.yellowButton path')

      let tlTrees = new TimelineMax({repeat: -1, yoyo: true})
      const tlMainObjectToilet = new TimelineMax()
      const tlMainObjectSatelite = new TimelineMax({repeat: -1, yoyo: true})
      const tlsateliteRotation = new TimelineMax({repeat: -1, yoyo: true})
      const tlSateliteOndes = new TimelineMax({repeat: -1, yoyo: true})
      const tlMainObjectDetecteurAir = new TimelineMax()
      const tlMainObjectSeaBubble = new TimelineMax({repeat: -1})
      const tlMainObjectPanneaux = new TimelineMax()
      const tlMainObjectTelephone = new TimelineMax()
      const tlTelephoneRotation = new TimelineMax({repeat: -1, yoyo: true})
      const tlMainObjectSmartRoad = new TimelineMax()
      const tlMainObjectPieton = new TimelineMax()
      const tlMainObjectCar = new TimelineMax()
      const tlMainObjectCars = new TimelineMax()
      const tlMainObjectPolice = new TimelineMax()
      const tlMainObjectTaxiVolant = new TimelineMax()
      const tlTaxiVolantRotation = new TimelineMax({repeat: -1, yoyo: true})
      const tlTaxiVolantRotationSuite = new TimelineMax({repeat: -1, yoyo: true})
      const tlNuages = new TimelineMax({repeat: -1, yoyo: true})
      const tlNuages2 = new TimelineMax({repeat: -1, yoyo: true})
      const tlTreesDiv1 = new TimelineMax()
      const tlTreesDiv2 = new TimelineMax()
      const tlTreesDiv3 = new TimelineMax()
      const tlYellowButtons = new TimelineMax({repeat: -1, yoyo: true})
      const tlPlans = new TimelineMax()

      tlMainObjectToilet
        .fromTo(mainObjectToilet, 0.4, {scale: 0, transformOrigin: '50% 50%'}, {scale: 1, ease: Elastic.easeOut.config(0.2, 0.3)}, 0.15)

      tlMainObjectSatelite
        .staggerFromTo(mainObjectSatelite, 0.4, {scale: 0, transformOrigin: '50% 50%'}, {scale: 1, ease: Elastic.easeOut.config(0.2, 0.3)}, 0.15)
        .fromTo(mainObjectSatelite, 1, {y: 0}, {y: 20, ease: Power2.easeInOut})
        .fromTo(mainObjectSatelite, 3, {rotation: '50deg', x: 0}, {rotation: '40deg', x: -80, ease: Power3.easeInOut})

      tlsateliteRotation
        .to(tlMainObjectSatelite, 10, {rotation: '-20deg', x: -500, ease: Sine.easeOut})
        .to(tlMainObjectSatelite, 8, {rotation: '20deg', x: 60, ease: Sine.easeOut})

      tlSateliteOndes
        .staggerFromTo(sateliteOndes, 1, {scale: 0, transformOrigin: '50% 50%'}, {scale: 1, ease: SteppedEase.config(6)}, 0)

      tlMainObjectDetecteurAir
        .fromTo(mainObjectDetecteurAir, 0.4, {scale: 0, transformOrigin: '50% 50%'}, {scale: 1, ease: Elastic.easeOut.config(0.2, 0.3)}, 0.15)

      tlMainObjectSeaBubble
        .fromTo(mainObjectSeaBubble, 1, {scale: 0, transformOrigin: '50% 50%'}, {scale: 1, ease: Elastic.easeOut.config(0.2, 0.3)}, 0.015)
        .to(mainObjectSeaBubble, 2.7, {x: 20, y: 10, ease: Expo.easeOut})
        .to(mainObjectSeaBubble, 2.6, {x: 40, y: 20, ease: Expo.easeOut})
        .to(mainObjectSeaBubble, 2.4, {x: 60, y: 25, ease: Expo.easeOut})
        .to(mainObjectSeaBubble, 2, {x: 80, y: 28, ease: Expo.easeOut})
        .to(mainObjectSeaBubble, 1.7, {x: 100, y: 28, ease: Expo.easeOut})
        .to(mainObjectSeaBubble, 1.4, {x: 150, y: 28, ease: Expo.easeOut})

      tlMainObjectPanneaux
        .fromTo(mainObjectPanneaux, 1, {scale: 0, transformOrigin: '50% 50%'}, {scale: 1, ease: Elastic.easeOut.config(0.2, 0.3)}, 0.015)

      tlMainObjectTelephone
        .fromTo(mainObjectTelephone, 1, {scale: 0, transformOrigin: '50% 50%'}, {scale: 1, ease: Elastic.easeOut.config(0.2, 0.3)}, 0.15)

      tlTelephoneRotation
        .fromTo(mainObjectTelephone, 0.4, {y: 0, transformOrigin: '50% 50%'}, {y: 10, rotation: '0deg'}, 0.15)

      tlMainObjectSmartRoad
        .fromTo(mainObjectSmartRoad, 0.4, {scale: 0, transformOrigin: '50% 50%'}, {scale: 1, ease: Elastic.easeOut.config(0.2, 0.3)}, 0.15)

      tlMainObjectPieton
        .fromTo(mainObjectPieton, 0.4, {scale: 0, transformOrigin: '50% 50%'}, {scale: 1, ease: Elastic.easeOut.config(0.2, 0.3)}, 0.15)

      tlMainObjectCar
        .fromTo(mainObjectCar, 0.4, {scale: 0, transformOrigin: '50% 50%'}, {scale: 1, ease: Power3.easeOut}, 0.05)
        .fromTo(mainObjectCar, 6, {x: -100, y: 0}, {x: 1400, y: 160, ease: Back.easeIn.config(1)})

      tlMainObjectCars
        .fromTo(mainObjectCars, 0.4, {scale: 0, transformOrigin: '50% 50%'}, {scale: 1, ease: Elastic.easeOut.config(0.2, 0.3)}, 0.15)
        .to(mainObjectCars, 3, {x: 1100, y: 160}, 0.15)

      tlMainObjectPolice
        .fromTo(mainObjectPolice, 0.4, {scale: 0, transformOrigin: '50% 50%'}, {scale: 1, ease: Elastic.easeOut.config(0.2, 0.3)}, 0.15)

      tlMainObjectTaxiVolant
        .fromTo(mainObjectTaxiVolant, 0.4, {scale: 0, transformOrigin: '50% 50%'}, {scale: 1, ease: Elastic.easeOut.config(0.2, 0.3)}, 0.15)

      tlTaxiVolantRotation
        .fromTo(mainObjectTaxiVolant, 1, {y: 0}, {y: 20, ease: Power2.easeInOut})

      tlTaxiVolantRotationSuite
        .to(mainObjectTaxiVolant, 1, {rotation: '-2deg', ease: Sine.easeOut})
        .to(mainObjectTaxiVolant, 1, {rotation: '2deg', ease: Sine.easeOut})

      tlYellowButtons
        .fromTo(yellowButtons, 0.3, {y: 0}, {y: -10})

      tlNuages
        .fromTo(cloud1, 2, {x: 60}, {x: 0, ease: Power2.easeInOut}, 0)
        .fromTo(cloud2, 2, {x: -100}, {x: 0, ease: Power2.easeInOut}, 0)
        .fromTo(cloud3, 2, {x: 0}, {x: -160, ease: Power2.easeInOut}, 0)

      tlNuages2
        .to(cloud4, 2, {x: 90, ease: Power2.easeInOut}, 0)
        .to(cloud5, 2, {x: 120, ease: Power2.easeInOut}, 0)
        .to(cloud6, 2, {x: -120, ease: Power2.easeInOut}, 0)

      // tlPlans
      //   .fromTo(bg5, 1, {x: -400}, {x: 0})
      //   .fromTo(bg4, 1, {x: -400}, {x: 0})

      tlTreesDiv1
        .staggerFromTo(treesDiv1, 1.4, {scale: 0, transformOrigin: '50% 50%'}, {scale: 1, ease: Power3.easeOut}, 0.5)

      tlTreesDiv2
        .staggerFromTo(treesDiv2, 1.4, {scale: 0, transformOrigin: '50% 50%'}, {scale: 1, ease: Power3.easeOut}, 0.5)

      tlTreesDiv3
        .staggerFromTo(treesDiv3, 1.4, {scale: 0, transformOrigin: '50% 50%'}, {scale: 1, ease: Power3.easeOut}, 0.5)

      tlMain
        .add(tlTreesDiv1, 0)
        .add(tlMainObjectCar, 1)
        .add(tlMainObjectToilet, 2)
        .add(tlMainObjectDetecteurAir, 3)
        .add(tlMainObjectTelephone, 4)
        .add(tlTreesDiv2, 5)
        .add(tlMainObjectSeaBubble, 6)
        .add(tlMainObjectPanneaux, 7)
        .add(tlMainObjectCars, 8)
        .add(tlTreesDiv3, 8)
        .add(tlMainObjectPieton, 9)
        .add(tlMainObjectSmartRoad, 10)
        // .add(tlPlans, 11)
        .add(tlMainObjectTaxiVolant, 12)
        .add(tlMainObjectPolice, 13)
    },
    getPositions () {
      const steps = Array.prototype.slice.call(this.sceneMain.querySelectorAll('.step'))
      const ratio = window.innerWidth / 1920
      let positions = []
      steps.sort((a, b) => {
        const a1 = Math.round(a.getAttribute('data-index'))
        const b1 = Math.round(b.getAttribute('data-index'))
        return a1 - b1
      })
      steps.forEach(function (step, index) {
        const stepBounding = step.getBoundingClientRect()
        const top = Math.round(stepBounding.top)
        const left = Math.round(stepBounding.left)
        const height = Number(step.getAttribute('data-height'))
        const width = Number(step.getAttribute('data-width'))
        let position = height > 100 & top < 100 ? top - 100 : top - height
        position = position < 0 ? Math.round(top - (height / 2)) : Math.round(position)
        const wheelTo = position - ((window.innerHeight / 2) - (height / 2))

        positions.push({'position': position, 'top': top, 'left': left, 'height': height * ratio, 'width': width * ratio, 'wheelTo': Math.round(wheelTo)})
      })
      this.$emit('getPositions', positions)
    }
  },
  mounted () {
    const svg = document.getElementById('sceneMain')
    svg.addEventListener('load', () => {
      this.sceneMain = svg.getSVGDocument()
      this.activateTimelines()
      this.getPositions()
      window.addEventListener('wheel', (e) => {
        e.preventDefault()
      })
    })
  }
}
</script>
