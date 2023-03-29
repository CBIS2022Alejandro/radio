input.onGesture(Gesture.SixG, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . # # # .
        # # # # #
        # # # # #
        `)
    basic.pause(5000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Angry)
    basic.pause(5000)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(5000)
})
let angry = images.createImage(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    # . . . #
    `)
let happy = images.createImage(`
    . # . # .
    . . . . .
    # . . . #
    # . . . #
    # # # # #
    `)
