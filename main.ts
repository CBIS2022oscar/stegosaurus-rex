input.onButtonPressed(Button.A, function () {
    fun = images.createImage(`
        . # . # .
        . . . . .
        # . . . #
        # . . . #
        . # # # .
        `)
    music.playMelody("B A E - F - G C5 ", 120)
})
input.onGesture(Gesture.LogoUp, function () {
    Laugh = images.createImage(`
        . # . # .
        # . . . #
        # # # # #
        # . . . #
        . # # # .
        `)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sawtooth, 5000, 1984, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    music.playMelody("G B A G C5 B A B ", 120)
})
input.onGesture(Gesture.ScreenDown, function () {
    Angry = images.createImage(`
        # . . . #
        # # . # #
        . . . . .
        # # # # #
        # . . . #
        `)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.soaring), SoundExpressionPlayMode.UntilDone)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 3558, 2085, 255, 255, 500, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    music.setVolume(255)
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
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sawtooth, 5000, 2385, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
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
let Angry: Image = null
let Laugh: Image = null
let fun: Image = null
let Idle = images.createImage(`
    . # . # .
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    `)
music.playMelody("G E G - G - G E ", 120)
basic.forever(function () {
    if (input.temperature() == 20) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.mysterious), SoundExpressionPlayMode.InBackground)
    }
})
