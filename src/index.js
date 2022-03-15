import Phaser from 'phaser';
import shipImg from './assets/ship.png';
import playerSprite from './assets/player.png';
import mummySprite from './assets/mummyPlayer.png'
import { movePlayers } from './movement';
import {PLAYER_HEIGHT, PLAYER_SPEED, PLAYER_SPRITE_HEIGHT, PLAYER_SPRITE_WIDTH, PLAYER_START_X, PLAYER_START_Y, PLAYER_WIDTH} from './constants'
import { animateMovement } from './animation';

const player = {};
const mummy = {}


let pressedKeys = [];
class MferClubGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('ship', shipImg);
        this.load.spritesheet('player', playerSprite,  {
            frameWidth: PLAYER_SPRITE_WIDTH,
            frameHeight: PLAYER_SPRITE_HEIGHT 
        });


 

    }
      
    create ()
    {
        
        //MFER LOADING ASSETS AND SETTING PROPS
        const ship = this.add.image(0, 0, 'ship');
        player.sprite = this.add.sprite(PLAYER_START_X, PLAYER_START_Y, 'player');
        player.sprite.displayHeight = PLAYER_HEIGHT;
        player.sprite.displayWidth = PLAYER_WIDTH;


        //MFER KEYBOARD INPUT 
        this.input.keyboard.on('keydown',(e) => {
            if (!pressedKeys.includes(e.code)) {
                pressedKeys.push(e.code);
              }
        });
        this.input.keyboard.on('keyup',(e) => {
            pressedKeys = pressedKeys.filter((key)=> key !== e.code)
        });


        //MFER ANIMATIONS
        player.runAnimation = this.anims.create({
            key:'running',
            frames: this.anims.generateFrameNumbers('player'),
            frameRate: 24,
            repeat: -1,
        })

    }

    update(){
        // console.log(this.scene);

        this.scene.scene.cameras.main.centerOn(player.sprite.x,player.sprite.y);
        movePlayers(pressedKeys,player.sprite );
        animateMovement(pressedKeys,player.sprite )


    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 700,
    scene: MferClubGame
};

const game = new Phaser.Game(config);
