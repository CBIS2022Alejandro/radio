input.onGesture(Gesture.EightG, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . # # # .
        # # # # #
        # # # # #
        `)
    basic.pause(200)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Angry)
    basic.pause(200)
    basic.clearScreen()
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
