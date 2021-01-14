scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
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
tiles.setTilemap(tiles.createTilemap(hex`1000100003030303030303030303030303030303030404040404040404040403040404030304030403030303030304030403040303040304030404040403040304030403030403040303030304030403040303030304030404040403040304030404040303040303030304030403040304030403030404040403040304040403040304030303030304030303030304030403040303040404040404040303040404030403030403030303030403030303030304030304030404040304030403040404040303040304030303040304030403030403030403040304030403040304030404030104040403040404040403040304030303030303030303030303030303020303`, img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 . . . . . . . . . . 2 . . . 2 
    2 . 2 . 2 2 2 2 2 2 . 2 . 2 . 2 
    2 . 2 . 2 . . . . 2 . 2 . 2 . 2 
    2 . 2 . 2 2 2 2 . 2 . 2 . 2 2 2 
    2 . 2 . . . . 2 . 2 . 2 . . . 2 
    2 . 2 2 2 2 . 2 . 2 . 2 . 2 . 2 
    2 . . . . 2 . 2 . . . 2 . 2 . 2 
    2 2 2 2 . 2 2 2 2 2 . 2 . 2 . 2 
    2 . . . . . . . 2 2 . . . 2 . 2 
    2 . 2 2 2 2 2 . 2 2 2 2 2 2 . 2 
    2 . 2 . . . 2 . 2 . 2 . . . . 2 
    2 . 2 . 2 2 2 . 2 . 2 . 2 2 . 2 
    2 . 2 . 2 . 2 . 2 . 2 . 2 . . 2 
    . . . . 2 . . . . . 2 . 2 . 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 
    `, [myTiles.transparency16,sprites.dungeon.stairLarge,sprites.dungeon.stairLadder,sprites.dungeon.floorDark2,sprites.dungeon.darkGroundCenter], TileScale.Sixteen))
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLarge)
scene.cameraFollowSprite(mySprite)
info.startCountdown(15)
