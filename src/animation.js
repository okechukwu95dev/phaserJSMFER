import { PLAYER_HEIGHT } from "./constants";

export const animateMovement = (keys,player)=> {
    const  runnningKeys = ["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"];
    
    
    if(
        !player.anims.isPlaying 
        && keys.some(key => runnningKeys.includes(key)))
    {
        player.play('running')
    }



    else if (
       !keys.some(key => runnningKeys.includes(key))        
       && player.anims.isPlaying)
    {
       player.stop('running')
    }
}