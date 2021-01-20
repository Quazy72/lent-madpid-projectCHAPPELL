scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    if (Level == 0) {
        info.changeScoreBy(1)
        Level += 1
        tiles.setTilemap(tiles.createTilemap(hex`1000100002020202020202020202020202020202030101010201010101010204050201080202020102010202020102060702010202010101010102010201020202020102020102020202020102010202020201020201020102010101020102020101010202010201020102020201020201020102020101010201010101010202010201020202020202010202020202020102020202010101010101010201010201010102020102020202020102010202020201020201020101010201020102010102010202010201020202010201020102020102020102010201020102010201020201020201010102010101010101010101010202020202020202020202020202020202`, img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            . . . . 2 . . . . . 2 . . 2 . . 
            2 2 2 . 2 . 2 2 2 . 2 . . 2 . 2 
            2 . . . . . 2 . 2 . 2 2 2 2 . 2 
            2 . 2 2 2 2 2 . 2 . 2 2 2 2 . 2 
            2 . 2 . 2 . . . 2 . 2 2 . . . 2 
            2 . 2 . 2 . 2 2 2 . 2 2 . 2 . 2 
            2 . . . 2 . . . . . 2 2 . 2 . 2 
            2 2 2 2 2 . 2 2 2 2 2 2 . 2 2 2 
            2 . . . . . . . 2 . . 2 . . . 2 
            2 . 2 2 2 2 2 . 2 . 2 2 2 2 . 2 
            2 . 2 . . . 2 . 2 . 2 . . 2 . 2 
            2 . 2 . 2 2 2 . 2 . 2 . 2 2 . 2 
            2 . 2 . 2 . 2 . 2 . 2 . 2 2 . 2 
            2 . . . 2 . . . . . . . . . . 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorDark2,sprites.dungeon.stairLarge,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.stairLadder], TileScale.Sixteen))
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLarge)
        info.startCountdown(15)
    } else if (Level == 1) {
        info.changeScoreBy(1)
        Level += 1
        tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010101010101010101010101010605050505050505050b0101010401010401010101010101010c0505050a0101040106050505050b010401010104010104010401010101040104010401040101040104010101010401040104010401010401040106050509010705090104010104010401040101010101010101040101040104010705050b01060505050901010401040101010104010401010101010107050805050b01040107050b010401010101010101040104010101040104010106050505050a010401040104010401010401010101040104010401040104010104010505050901070509010705080301020101010101010101010101010101`, img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 . . . . . . . . . . 2 2 2 . 2 
            2 . 2 2 2 2 2 2 2 2 . . . . . 2 
            2 . 2 . . . . . . 2 . 2 2 2 . 2 
            2 . 2 . 2 2 2 2 . 2 . 2 . 2 . 2 
            2 . 2 . 2 2 2 2 . 2 . 2 . 2 . 2 
            2 . 2 . 2 . . . . 2 . . . 2 . 2 
            2 . 2 . 2 . 2 2 2 2 2 2 2 2 . 2 
            2 . 2 . 2 . . . . 2 . . . . . 2 
            2 . 2 . 2 2 2 2 . 2 . 2 2 2 2 2 
            2 . . . . . . 2 . 2 . . . 2 . 2 
            2 2 2 2 2 2 . 2 . 2 2 2 . 2 . 2 
            2 . . . . . . 2 . 2 . 2 . 2 . 2 
            2 . 2 2 2 2 . 2 . 2 . 2 . 2 . 2 
            2 . 2 . . . . 2 . . . 2 . . . . 
            2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `, [myTiles.transparency16,sprites.dungeon.floorLight2,sprites.dungeon.stairNorth,sprites.dungeon.stairLadder,sprites.vehicle.roadVertical,sprites.vehicle.roadHorizontal,sprites.vehicle.roadTurn1,sprites.vehicle.roadTurn3,sprites.vehicle.roadIntersection1,sprites.vehicle.roadTurn4,sprites.vehicle.roadIntersection4,sprites.vehicle.roadTurn2,sprites.vehicle.roadIntersection2], TileScale.Sixteen))
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairNorth)
        info.startCountdown(15)
    } else {
    	
    }
})
info.onCountdownEnd(function () {
    info.changeLifeBy(-1)
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
    Level = 0
    info.startCountdown(15)
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
Level = 0
info.setScore(0)
info.setLife(3)
