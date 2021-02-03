scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    if (Level == 0) {
        info.changeScoreBy(1)
        Level += 1
        tiles.setTilemap(tilemap`level3`)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLarge)
        info.startCountdown(15)
    } else if (Level == 1) {
        info.changeScoreBy(1)
        Level += 1
        tiles.setTilemap(tilemap`level4`)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairEast)
        info.startCountdown(15)
    } else if (Level == 2) {
        info.changeScoreBy(1)
        Level += 1
        tiles.setTilemap(tilemap`level10`)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairNorth)
        info.startCountdown(15)
    } else if (Level == 3) {
        info.changeScoreBy(1)
        Level += 1
        tiles.setTilemap(tilemap`level12`)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLarge)
        info.startCountdown(15)
    } else if (Level == 4) {
        effects.confetti.startScreenEffect(2000)
        game.over(true)
    }
})
info.onCountdownEnd(function () {
    if (Level == 0) {
        info.changeLifeBy(-1)
        tiles.setTilemap(tilemap`level1`)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLarge)
        Level = 0
        info.setScore(1)
        info.startCountdown(15)
    } else if (Level == 1) {
        info.changeLifeBy(-1)
        tiles.setTilemap(tilemap`level3`)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLarge)
        Level = 1
        info.setScore(2)
        info.startCountdown(15)
    } else if (Level == 2) {
        info.changeLifeBy(-1)
        tiles.setTilemap(tilemap`level4`)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairEast)
        Level = 2
        info.setScore(3)
        info.startCountdown(15)
    } else if (Level == 3) {
        info.changeLifeBy(-1)
        tiles.setTilemap(tilemap`level10`)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairNorth)
        Level = 3
        info.setScore(4)
        info.startCountdown(15)
    } else if (false) {
    	
    }
})
info.onLifeZero(function () {
    game.over(false)
})
let Level = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e e e d d d f . . . 
    . . . . . f 4 d d e 4 e f . . . 
    . . . . . f e d d e 2 2 f . . . 
    . . . . f f f e e f 5 5 f f . . 
    . . . . f f f f f f f f f f . . 
    . . . . . f f . . . f f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level2`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLarge)
scene.cameraFollowSprite(mySprite)
info.startCountdown(15)
Level = 0
info.setScore(1)
info.setLife(3)
