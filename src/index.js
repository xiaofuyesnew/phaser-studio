
import { Game } from 'phaser'
import { windowWidth, windowHeight } from './global'
import preload from './lifetimes/preload'
import create from './lifetimes/create'
console.log(windowWidth, windowHeight)

const game = new Game({
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: window.innerWidth,
  height: window.innerHeight,
  scene: {
    preload,
    create
  }
})

console.log(game)

window.onresize = () => {

}