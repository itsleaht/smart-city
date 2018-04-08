let scene4 = document.getElementById('scene4')
let tlMain = new TimelineMax({repeat: -1, yoyo: true, repeatDelay: 0})

let houses = scene4.querySelectorAll('.houses path, .houses rect')
let trees = scene4.querySelectorAll('.trees path')
let water = scene4.querySelector('.water')
let waterBubble = scene4.querySelectorAll('.waterBubble path')
let waterBubbles = scene4.querySelector('.waterBubbles')
let waterBubbleEyes = scene4.querySelectorAll('.waterBubbleEyes path')
let waterBubbleYellowButton = scene4.querySelectorAll('.waterBubbleYellowButton path')
let drapeau = scene4.querySelectorAll('.drapeau rect')
let drapeauYellowButton = scene4.querySelectorAll('.drapeauYellowButton path')
let cars = scene4.querySelectorAll('.car')
let car1 = scene4.querySelector('.car1')
let car2 = scene4.querySelector('.car2')
let car3 = scene4.querySelector('.car3')
let car4 = scene4.querySelector('.car4')

let clouds = scene4.querySelectorAll('.cloud')

let tlHousesRight = new TimelineMax({repeat: -1, yoyo: true, repeatDelay: 5})
let tlDrapeau = new TimelineMax()
let tlDrapeauYellowButton = new TimelineMax({repeat: -1, yoyo: true})
let tlWaterBubble = new TimelineMax({repeat: -1})
let tlWaterBubbleYellowButton = new TimelineMax({repeat: -1, yoyo: true})
let tlClouds = new TimelineMax({repeat: -1, yoyo: true})
let tlTrees = new TimelineMax()
let tlCars = new TimelineMax({repeat: -1})

tlClouds
    .staggerTo(clouds, 3, { ease: Power2.easeInOut, x: 540}, 0.02)

tlHousesRight
    .staggerFromTo(houses, 2, {scale: 0, transformOrigin:'50% 100%'}, {scale: 1, ease: Elastic.easeOut.config(1,0.3)}, 0.05)

tlTrees
    .staggerFromTo(trees, 0.4, {scale: 0, transformOrigin:'50% 50%'}, {scale:1,  ease: Power3.easeOut}, 0.05)

tlMain
    .fromTo(trees, 1, {rotation: '5deg'}, {rotation: '0deg', ease: Elastic.easeOut.config(1,0.3)}, 0.05)
    .fromTo(waterBubble, 1, {y: 0}, {y: 6}, 0)
    .staggerFromTo(waterBubbleEyes, 0.2, {scaleY: 0.3, transformOrigin:'50% 50%'}, {scaleY: 1, repeatDelay: 2}, 0)
    .staggerFromTo(drapeau, 0.3, {scale: 1.05, transformOrigin:'50% 50%', ease: Sine.easeIn}, {scale: 1, ease: Sine.easeOut}, 0)

tlDrapeau
    .staggerFromTo(drapeau, 1, {scale: 0, transformOrigin:'50% 50%'}, {scale: 1}, 0.015)

tlDrapeauYellowButton
    .fromTo(drapeauYellowButton, 0.5, {y: 0}, {y: -10})

tlWaterBubble
    .staggerFromTo(waterBubble, 1, {scale: 0, transformOrigin:'50% 50%'}, {scale: 1}, 0.015)
    .to(waterBubbles, 2.7, {x: 200, y: 100, ease: Expo.easeOut})
    .to(waterBubbles, 2.6, {x: 400, y: 200, ease: Expo.easeOut})
    .to(waterBubbles, 2.4, {x: 600, y: 250, ease: Expo.easeOut})
    .to(waterBubbles, 2, {x: 800, y: 280, ease: Expo.easeOut})
    .to(waterBubbles, 1.7, {x: 1000, y: 280, ease: Expo.easeOut})
    .to(waterBubbles, 1.4, {x: 1500, y: 280, ease: Expo.easeOut})

tlWaterBubbleYellowButton
    .fromTo(waterBubbleYellowButton, 0.5, {y: 0}, {y: -10})

tlCars
    .staggerFromTo(cars, 0.4, {scale: 0, transformOrigin:'50% 50%'}, {scale: 0.5, ease: Power3.easeOut}, 0.05)
    .fromTo(car1, 7, {x: -800}, {x: 1200,  ease: Back.easeIn.config( 1)}, 0)
    .fromTo(car2, 10, {x: -800}, {x: 1300,  ease: Back.easeIn.config( 1)}, 0.3)
    .fromTo(car3, 10, {x: -800}, {x: 1200,  ease: Back.easeIn.config( 1)}, 0)
    .fromTo(car4, 12, {x: -800}, {x: 1200,  ease: Back.easeIn.config( 1)}, 0)

