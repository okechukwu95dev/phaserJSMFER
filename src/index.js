import Phaser from 'phaser';
import shipImg from './assets/ship.png';
import playerSprite from './assets/player.png';
import {PLAYER_SPRITE_HEIGHT, PLAYER_SPRITE_WIDTH, PLAYER_START_X, PLAYER_START_Y} from './constants'

const player = {};
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
        // const player = this.add.image(400, 150, 'logo');
        
        const ship = this.add.image(0, 0, 'ship');
        player.sprite = this.add.sprite(PLAYER_START_X, PLAYER_START_Y, 'player');


      
        // this.tweens.add({
        //     targets: logo,
        //     y: 450,
        //     duration: 2000,
        //     ease: "Power2",
        //     yoyo: true,
        //     loop: -1
        // });
    }

    update(){
        console.log(this.scene);
        // this.scene.scene.cameras.main.centreOn(player.sprite.x,player.sprite.y);
        this.scene.scene.cameras.main.centerOn(player.sprite.x,player.sprite.y);

    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 2000,
    height: 700,
    scene: MferClubGame
};

const game = new Phaser.Game(config);
