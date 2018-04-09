let scene5 = document.getElementById('scene5')
let tlMain = new TimelineMax({repeat: -1, yoyo: true, repeatDelay: 0})

let car = scene5.querySelectorAll('.car path')
let bosse = scene5.querySelectorAll('.bosse path')
let bosseYellowButton = scene5.querySelector('.bosseYellowButton path')
let bandesPieton = scene5.querySelectorAll('.bandesPieton path')
let aveugle = scene5.querySelectorAll('.aveugle path')
//let canne = scene5.querySelector('.canne path')
let aveugleOndes = scene5.querySelectorAll('.aveugleOndes path')
let house = scene5.querySelectorAll('.house path, .house rect')
let trees = scene5.querySelectorAll('.trees path')
let leaves = scene5.querySelectorAll('.leaves path')
let branches1 = scene5.querySelectorAll('.branches1 path')
let smartGlasses = scene5.querySelectorAll('.smartGlasses path')
let handsWithGlasses = scene5.querySelector('.handsWithGlasses')
let smartGlassesYellowButton = scene5.querySelector('.smartGlassesYellowButton path')
let secondBlock = scene5.querySelector('.secondBlock')
let thirdBlock = scene5.querySelector('.thirdBlock')

let tlHouses = new TimelineMax({repeat: -1, yoyo: true, repeatDelay: 5})
let tlPieton = new TimelineMax()
let tlPietonOndes = new TimelineMax({repeat: -1, yoyo: true})
let tlBosseYellowButton = new TimelineMax({repeat: -1, yoyo: true})
let tlSmartGlassesYellowButton = new TimelineMax({repeat: -1, yoyo: true})
let tlSmartGlasses = new TimelineMax()
let tlHandsWithGlasses = new TimelineMax({repeat: -1, yoyo: true})
let tlTrees = new TimelineMax()
let tlBlock = new TimelineMax()


tlPieton
    .staggerFromTo(aveugle, 0.4, {scale: 0, transformOrigin:'50% 50%'}, {scale: 1}, 0.15)
    .staggerFromTo(bandesPieton, 0.4, {scale: 0, transformOrigin:'50% 50%'}, {scale: 1}, 0.15)
    .staggerFromTo(car, 0.4, {scale: 0, transformOrigin:'50% 50%'}, {scale: 1, ease: Power3.easeOut}, 0)
    .staggerFromTo(bosse, 0.2, {scaleY: 0, transformOrigin:'50% 50%', y:40}, {scaleY: 1, y: 0}, 0)
    .staggerFromTo(car, 1.5, {x: 500}, {x: 0, ease: Power3.easeInOut}, 0)
    .fromTo(aveugle, 1.4, {x: 0}, {x: 350})
    //.fromTo(aveugle, 1.4, {x: 350, y: 0}, {x: 300, y: 60})

tlBlock
    .fromTo(secondBlock, 1, {x: -500}, {x: 0, ease: Power3.easeInOut}, 0.4)
    .fromTo(thirdBlock, 1, {x: -500}, {x: 0, ease: Power3.easeInOut}, 0.1)

tlPietonOndes
    .fromTo(aveugleOndes, 1, {scale: 0, transformOrigin:'50% 50%'}, {scale: 1, ease: SteppedEase.config(6)}, 0.15)

tlSmartGlasses
    .staggerFromTo(smartGlasses, 2, {scale: 0, transformOrigin:'50% 100%'}, {scale: 1, ease: Elastic.easeOut.config(0.4,0.3)}, 0.05)

tlHandsWithGlasses
    .fromTo(handsWithGlasses, 1, {rotation: '-0.05deg', transformOrigin:'50% 100%', x: 3}, {rotation: '0deg', x: 0})

tlHouses
    .staggerFromTo(house, 2, {scale: 0, transformOrigin:'50% 100%'}, {scale: 1, ease: Elastic.easeOut.config(1,0.3)}, 0.05)

tlTrees
    .staggerFromTo(trees, 0.4, {scale: 0, transformOrigin:'50% 50%'}, {scale:1,  ease: Power3.easeOut}, 0.05)

tlBosseYellowButton
    .fromTo(bosseYellowButton, 0.5, {y: 0}, { y: -10})

tlSmartGlassesYellowButton
    .fromTo(smartGlassesYellowButton, 0.5, {y: 0, scale: 1.5}, { y: -10})





