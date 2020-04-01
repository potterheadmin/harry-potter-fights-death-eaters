sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 500)
    spell.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    spell = sprites.createProjectileFromSprite(img`
. . . . . . f 4 4 4 
. . 4 4 4 e e f e d 
e e 4 4 4 e e 4 4 4 
4 e 4 d d 4 4 5 . . 
d 4 e d d d 5 d . . 
d 4 e e 4 . . . . . 
`, Harrys_ship, 200, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.warmRadial, 200)
    info.changeLifeBy(-1)
})
let Death_Eaters: Sprite = null
let spell: Sprite = null
let Harrys_ship: Sprite = null
Harrys_ship = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f . . . . 
. . f f f f f f f f f f f . . . 
. . f f f 4 4 f f f f f f . . . 
. f f f f 4 2 4 f f f f f f . . 
. f f f f 4 2 2 4 4 4 f f f . . 
. f f 4 4 4 4 2 4 4 4 4 f f . . 
6 f f 4 f f 4 4 4 4 f f 4 f 9 . 
6 f f f 4 7 f f f f 4 7 f f 9 9 
8 6 4 f 4 7 f 4 4 f 4 7 f f 6 9 
f 8 4 4 f f 4 4 4 4 f f 4 6 6 b 
f 8 8 4 4 4 4 4 4 4 4 4 4 6 b . 
. f 8 6 4 4 f f f 4 4 4 6 b . . 
. f 8 8 8 4 4 4 4 4 4 6 b . . . 
. . f f f f f f f b b b . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
Harrys_ship.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(Harrys_ship, 125, 125)
info.setLife(3)
game.onUpdateInterval(500, function () {
    Death_Eaters = sprites.create(img`
. . b b 5 5 5 5 5 b b . . 
. b f 5 f f 5 f f 5 f d . 
. b 5 f f f 5 f f f 5 d . 
b 5 5 5 5 f 5 f 5 5 5 5 d 
5 f f f 5 f 5 f 5 f f f 5 
5 f f f 5 f 5 f 5 f f f 5 
b 5 5 5 f f 5 f f 5 5 5 d 
b f 5 f f 5 5 5 f f 5 f d 
b 5 5 5 5 5 f 5 5 5 5 5 d 
5 f f f 5 5 5 5 5 f f f 5 
. 5 f 5 5 f f f 5 5 f 5 . 
. . 5 5 f f f f f 5 5 . . 
. . . 5 f f f f f 5 . . . 
. . . . 5 5 5 5 5 . . . . 
`, SpriteKind.Enemy)
    Death_Eaters.setVelocity(-100, 0)
    Death_Eaters.setPosition(180, Math.randomRange(0, 120))
})
