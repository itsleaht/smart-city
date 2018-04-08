let scene2 = document.getElementById('scene2')
let tlMain = new TimelineMax({repeat: -1, yoyo: true, repeatDelay: 0})

let housesRight = scene2.querySelectorAll('.housesRight path, .housesRight rect')
let housesLeft = scene2.querySelectorAll('.housesLeft path, .housesLeft rect')

let toilette =  scene2.querySelectorAll('.toilette path')
let toiletteYellowButton = scene2.querySelector('.toiletteYellowButton')
let toiletteOndes = scene2.querySelectorAll('.toiletteOndes path')
let lanterne =  scene2.querySelectorAll('.lanterne path, .lanterne rect')
let lanterneYellowButton = scene2.querySelector('.lanterneYellowButton')

let firstCloud =  scene2.querySelector('.firstCloud')
let secondCloud =  scene2.querySelector('.secondCloud')
let thirdCloud =  scene2.querySelector('.thirdCloud')

let trees = scene2.querySelectorAll('.trees path')

let tlHousesLeft = new TimelineMax({repeat: -1, yoyo: true, repeatDelay: 5})
let tlHousesRight = new TimelineMax({repeat: -1, yoyo: true, repeatDelay: 5})
let tlToilette = new TimelineMax()
let tlToiletteYellowButton = new TimelineMax({repeat: -1, yoyo: true})
let tlToiletteOndes = new TimelineMax({repeat: -1, yoyo: true})
let tlLanterne = new TimelineMax()
let tlLanterneYellowButton = new TimelineMax({repeat: -1, yoyo: true})
let tlClouds = new TimelineMax({repeat: -1, yoyo: true})
let tlTrees = new TimelineMax()

tlClouds
    .fromTo(firstCloud, 2, {x: 60}, {x: 0, ease: Power2.easeInOut}, 0)
    .fromTo(secondCloud, 2, {x: -100}, {x: 0, ease: Power2.easeInOut}, 0)
    .fromTo(thirdCloud, 2, {x: 0}, {x: -160, ease: Power2.easeInOut}, 0)

tlHousesRight
    .staggerFromTo(housesRight, 2, {scale: 0, transformOrigin:'50% 100%'}, {scale: 1, ease: Elastic.easeOut.config(1,0.3)}, 0.05)

tlHousesLeft
    .staggerFromTo(housesLeft, 2, {scale: 0, transformOrigin:'50% 100%'}, {scale: 1, ease: Elastic.easeOut.config(1,0.3)}, 0.05)

tlTrees
    .staggerFromTo(trees, 0.4, {scale: 0, transformOrigin:'50% 50%'}, {scale:1,  ease: Power3.easeOut}, 0.05)

tlMain
    .fromTo(trees, 1, {rotation: '5deg'}, {rotation: '0deg', ease: Elastic.easeOut.config(1,0.3)}, 0.05)

tlToilette
    .staggerFromTo(lanterne, 1, {scale: 0, transformOrigin:'50% 50%'}, {scale: 1}, 0.015)

tlToiletteOndes
    .staggerFromTo(toiletteOndes, 1, {scale: 0, transformOrigin:'50% 50%'}, {scale: 1, ease: SteppedEase.config(6)}, 0.15)

tlToiletteYellowButton
    .fromTo(toiletteYellowButton, 0.5, {y: 0}, {y: -10})

tlLanterne
    .staggerFromTo(toilette, 1, {scale: 0, transformOrigin:'50% 50%'}, {scale: 1}, 0.015)

tlLanterneYellowButton
    .fromTo(lanterneYellowButton, 0.5, {y: 0, delay: 0.7}, {y: -10})