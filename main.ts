input.onButtonPressed(Button.A, function () {
    fun = images.createImage(`
        . # . # .
        . . . . .
        # . . . #
        # . . . #
        . # # # .
        `)
    music.playMelody("C5 A B A C5 B A C5 ", 170)
})
input.onGesture(Gesture.LogoUp, function () {
    Laugh = images.createImage(`
        . # . # .
        # . . . #
        # # # # #
        # . . . #
        . # # # .
        `)
    music.playMelody("B A E - F - G C5 ", 120)
})
input.onSound(DetectedSound.Loud, function () {
    Sad = images.createImage(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    music.playMelody("D C D D E C E C ", 120)
})
input.onButtonPressed(Button.AB, function () {
    Pat = images.createImage(`
        . # . # .
        . . . . .
        . . . . .
        # . # . #
        . # . # .
        `)
    music.playMelody("C5 B C5 A B C5 B C5 ", 120)
})
input.onGesture(Gesture.Shake, function () {
    Scared = images.createImage(`
        # . . . #
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    music.playMelody("B A A B C5 A B C5 ", 120)
})
let Scared: Image = null
let Pat: Image = null
let Sad: Image = null
let Laugh: Image = null
let fun: Image = null
let Idle = images.createImage(`
    . # . # .
    . . . . .
    . . . . .
    . # # # .
    . . . . .
    `)
music.playMelody("G E G - G - G E ", 120)
