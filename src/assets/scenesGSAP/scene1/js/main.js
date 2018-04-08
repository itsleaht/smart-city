let scene1 = document.getElementById('scene1')
let tlMain = new TimelineMax({repeat: -1, yoyo: true, repeatDelay: 0})

let firstBuildingWhite = scene1.querySelector('.firstBuildingWhite')
let firstBuildingWhiteRect = scene1.querySelectorAll('.firstBuildingWhiteRect rect')
let secondBuildingWhite = scene1.querySelector('.secondBuildingWhite')
let secondBuildingWhiteRect = scene1.querySelectorAll('.secondBuildingWhiteRect rect')
let thirdBuildingWhite = scene1.querySelector('.thirdBuildingWhite')
let thirdBuildingWhiteRect = scene1.querySelectorAll('.thirdBuildingWhiteRect rect')
let fourthBuildingWhite = scene1.querySelector('.fourthBuildingWhite')
let fourthBuildingWhiteRect = scene1.querySelectorAll('.fourthBuildingWhiteRect rect')

let firstBuildingBlue = scene1.querySelector('.firstBuildingBlue')
let firstBuildingBlueRect = scene1.querySelectorAll('.firstBuildingBlueRect rect')
let secondBuildingBlue = scene1.querySelector('.secondBuildingBlue')
let secondBuildingBlueRect = scene1.querySelectorAll('.secondBuildingBlueRect rect')
let thirdBuildingBlue = scene1.querySelector('.thirdBuildingBlue')
let thirdBuildingBlueRect = scene1.querySelectorAll('.thirdBuildingBlueRect rect')
let fourthBuildingBlue = scene1.querySelector('.fourthBuildingBlue')
let fourthBuildingBlueRect = scene1.querySelectorAll('.fourthBuildingBlueRect rect')

let trees = scene1.querySelectorAll('.trees path')
let treesLeaves = scene1.querySelectorAll('.treesLeaves')

let housesRight = scene1.querySelectorAll('.housesRight path, .housesRight rect')
let housesLeft = scene1.querySelectorAll('.housesLeft path, .housesLeft rect')

let clouds = scene1.querySelector('.clouds')
let cloud1 = scene1.querySelector('.cloud1')
let cloud2 = scene1.querySelector('.cloud2')
let cloud3 = scene1.querySelector('.cloud3')

let satelite = scene1.querySelector('.satelite')
let sateliteOndes = scene1.querySelectorAll('.sateliteOndes path')
let yellowButtonSatelite = scene1.querySelector('.yellowButtonSatelite')

let car = scene1.querySelector('.car')
let carMain = scene1.querySelectorAll('.carMain path')
let yellowButtonCar = scene1.querySelector('.yellowButtonCar')

let tlBuildings = new TimelineMax()
let tlBuildingRect = new TimelineMax()
let tlButtonCar = new TimelineMax({repeat: -1, yoyo: true})
let tlButtonSattelite = new TimelineMax({repeat: -1, yoyo: true})
let tlSateliteOndes = new TimelineMax({repeat: -1, yoyo: true})
let tlHousesLeft = new TimelineMax({repeat: -1, yoyo: true, repeatDelay: 5})
let tlHousesRight = new TimelineMax({repeat: -1, yoyo: true, repeatDelay: 5})
let tlClouds = new TimelineMax({repeat: -1, yoyo: true})
let tlSatelite = new TimelineMax({repeat: -1, yoyo: true})
let tlTrees = new TimelineMax()
let tlTreesWaving = new TimelineMax({repeat: -1, yoyo: true})
let tlCar = new TimelineMax()

tlBuildings
    .fromTo(secondBuildingBlue, 2.3, {y: 50}, {y: 0, ease: SteppedEase.config(12)}, 0.2)
    .fromTo(firstBuildingWhite, 2.3, {y: 60}, {y: 0, ease: SteppedEase.config(12)}, 0.2)
    .fromTo(firstBuildingBlue, 2.3, {y: 60}, {y: 0, ease: SteppedEase.config(12)}, 0)
    .fromTo(thirdBuildingBlue, 2.3, {y: 50}, {y: 0, ease: SteppedEase.config(12)}, 0.5)
    .fromTo(secondBuildingWhite, 2.3, {y: 80}, {y: 0, ease: SteppedEase.config(12)}, 0.5)
    .fromTo(thirdBuildingWhite, 2.3, {y: 60}, {y: 0,  ease: SteppedEase.config(12)}, 0)
    .fromTo(fourthBuildingWhite, 2.3, {y: 50}, {y: 0,  ease: SteppedEase.config(12)}, 0.2)
    .fromTo(fourthBuildingBlue, 2.3, {y: 50}, {y: 0,  ease: SteppedEase.config(12)}, 0.1)

tlBuildingRect
    .staggerFromTo(firstBuildingWhiteRect, 0.2, {scale: 0, transformOrigin:'50% 50%'}, {scale:1, ease: Power3.easeOut}, 0.01 )
    .staggerFromTo(firstBuildingBlueRect, 0.2, {scale: 0, transformOrigin:'50% 50%'}, {scale:1, ease: Power3.easeOut}, 0.01 )
    .staggerFromTo(thirdBuildingBlueRect,  0.2, {scale: 0, transformOrigin:'50% 50%'}, {scale:1, ease: Power3.easeOut}, 0.01 )
    .staggerFromTo(secondBuildingWhiteRect, 0.2, {scale: 0, transformOrigin:'50% 50%'}, {scale:1,  ease: Power3.easeOut}, 0.01 )
    .staggerFromTo(thirdBuildingWhiteRect, 0.2, {scale: 0, transformOrigin:'50% 50%'}, {scale:1,  ease:  Power3.easeOut}, 0.01 )
    .staggerFromTo(fourthBuildingWhiteRect, 0.2, {scale: 0, transformOrigin:'50% 50%'}, {scale:1,  ease: Power3.easeOut}, 0.01 )
    .staggerFromTo(fourthBuildingBlueRect, 0.2, {scale: 0, transformOrigin:'50% 50%'}, {scale:1, ease:  Power3.easeOut}, 0.01 )
    .staggerFromTo(secondBuildingBlueRect,  0.2, {scale: 0, transformOrigin:'50% 50%'}, {scale:1, ease: Power3.easeOut}, 0.01 )

tlClouds
    // .fromTo(clouds, 3.5, {scale: 0, transformOrigin:'50% 50%'}, {scale: 1})
    .fromTo(cloud1, 2, {x: 60}, {x: 0, ease: Power2.easeInOut}, 0)
    .fromTo(cloud2, 2, {x: -100}, {x: 0, ease: Power2.easeInOut}, 0)
    .fromTo(cloud3, 2, {x: 0}, {x: -160, ease: Power2.easeInOut}, 0)

tlCar
    .staggerFromTo(carMain, 0.4, {scale: 0, transformOrigin:'50% 50%'}, {scale:1,  ease: Power3.easeOut}, 0.05)
    .fromTo(car, 6, {rotation: '3deg', x: -100, y:-20}, {x: 1000, y: 80,  ease: Back.easeIn.config( 1)})

tlSatelite
    .fromTo(satelite, 1, {y: 0}, {y: 20, ease: Power2.easeInOut})
    .fromTo(satelite, 3, {rotation: '50deg', x:0}, {rotation: '40deg', x: -80, ease: Power3.easeInOut})

tlSateliteOndes
    .staggerFromTo(sateliteOndes, 1, {scale: 0, transformOrigin:'50% 50%'}, {scale: 1,ease: SteppedEase.config(6)}, 0)

tlTrees
    .staggerFromTo(trees, 0.4, {scale: 0, transformOrigin:'50% 50%'}, {scale:1,  ease: Power3.easeOut}, 0.05)

tlTreesWaving
    .staggerFromTo(treesLeaves, 1, {rotation: '5deg',transformOrigin:'50% 50%'}, {rotation: '-5deg',   ease: Elastic.easeOut.config(1,0.3)}, 0.05)

tlButtonCar
    .fromTo(yellowButtonCar, 0.5, {y: 0}, {y: -10})

tlButtonSattelite
    .fromTo(yellowButtonSatelite, 0.5, {y: 0}, {y: -10})

tlHousesRight
    .staggerFromTo(housesRight, 2, {scale: 0, transformOrigin:'50% 100%'}, {scale: 1, ease: Elastic.easeOut.config(1,0.3)}, 0.05)

tlHousesLeft
    .staggerFromTo(housesLeft, 2, {scale: 0, transformOrigin:'50% 100%'}, {scale: 1, ease: Elastic.easeOut.config(1,0.3)}, 0.05)

tlMain
    .fromTo(trees, 1, {rotation: '5deg'}, {rotation: '0deg', ease: Elastic.easeOut.config(1,0.3)}, 0.05)
    .to(satelite, 10, {rotation: '-20deg', x: -500, ease: Sine.easeOut})
    .to(satelite, 8,{rotation: '20deg', x: 60, ease: Sine.easeOut})








