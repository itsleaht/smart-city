let sceneMain = document.getElementById('sceneMain')
let tlMain = new TimelineMax({repeat: -1, yoyo: true, repeatDelay: 0})

let treesDiv1 = sceneMain.querySelectorAll('.tree')
let treesDiv2 = sceneMain.querySelectorAll('.tree2')
let treesDiv3 = sceneMain.querySelectorAll('.tree3')
let mainObjectSatelite = sceneMain.querySelector('.mainObjectSatelite')
let sateliteOndes = sceneMain.querySelectorAll('.sateliteOndes')
let mainObjectToilet = sceneMain.querySelector('.mainObjectToilet')
let mainObjectDetecteurAir = sceneMain.querySelector('.mainObjectDetecteurAir')
let mainObjectPanneaux = sceneMain.querySelector('.mainObjectPanneaux')
let mainObjectSeaBubble = sceneMain.querySelector('.mainObjectSeaBubble')
let mainObjectTelephone = sceneMain.querySelector('.mainObjectTelephone')
let mainObjectSmartRoad = sceneMain.querySelector('.mainObjectSmartRoad')
let mainObjectPieton = sceneMain.querySelector('.mainObjectPieton')
let mainObjectCar = sceneMain.querySelector('.mainObjectCar')
let mainObjectCars = sceneMain.querySelector('.mainObjectCars')
let mainObjectPolice = sceneMain.querySelector('.mainObjectPolice')
let mainObjectTaxiVolant = sceneMain.querySelector('.mainObjectTaxiVolant')
let cloud1 = sceneMain.querySelector('.cloud1')
let cloud2 = sceneMain.querySelector('.cloud2')
let cloud3 = sceneMain.querySelector('.cloud3')
let cloud4 = sceneMain.querySelector('.cloud4')
let cloud5 = sceneMain.querySelector('.cloud5')
let cloud6 = sceneMain.querySelector('.cloud6')
let bg4 = sceneMain.querySelector('.bg4')
let bg5 = sceneMain.querySelector('.bg5')

let yellowButtons = sceneMain.querySelectorAll('.yellowButton path')

// let tlTrees = new TimelineMax({repeat: -1, yoyo: true})
let tlMainObjectToilet = new TimelineMax()
let tlMainObjectSatelite = new TimelineMax({repeat: -1, yoyo: true})
let tlsateliteRotation = new TimelineMax({repeat: -1, yoyo: true})
let tlSateliteOndes = new TimelineMax({repeat: -1, yoyo: true})
let tlMainObjectDetecteurAir = new TimelineMax()
let tlMainObjectSeaBubble = new TimelineMax({repeat: -1})
let tlMainObjectPanneaux = new TimelineMax()
let tlMainObjectTelephone = new TimelineMax()
let tlTelephoneRotation = new TimelineMax({repeat: -1, yoyo: true})
let tlMainObjectSmartRoad = new TimelineMax()
let tlMainObjectPieton = new TimelineMax()
let tlMainObjectCar = new TimelineMax()
let tlMainObjectCars = new TimelineMax()
let tlMainObjectPolice = new TimelineMax()
let tlMainObjectTaxiVolant = new TimelineMax()
let tlTaxiVolantRotation = new TimelineMax({repeat: -1, yoyo: true})
let tlTaxiVolantRotationSuite = new TimelineMax({repeat: -1, yoyo: true})
let tlNuages = new TimelineMax({repeat: -1, yoyo: true})
let tlNuages2 = new TimelineMax({repeat: -1, yoyo: true})
let tlTreesDiv1 = new TimelineMax()
let tlTreesDiv2 = new TimelineMax()
let tlTreesDiv3 = new TimelineMax()
let tlYellowButtons = new TimelineMax({repeat: -1, yoyo: true})
let tlPlans = new TimelineMax()

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

tlPlans
  .fromTo(bg5, 1, {x: -400}, {x: 0})
  .fromTo(bg4, 1, {x: -400}, {x: 0})

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
  .add(tlPlans, 11)
  .add(tlMainObjectTaxiVolant, 12)
  .add(tlMainObjectPolice, 13)
