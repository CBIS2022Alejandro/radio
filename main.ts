input.onButtonPressed(Button.A, function () {
    basic.showString("¨crack!¨")
    basic.pause(500)
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        # # # # #
        . # . # .
        `)
})
input.onGesture(Gesture.SixG, function () {
    basic.showIcon(IconNames.Angry)
    basic.pause(5000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
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
basic.forever(function () {
    if (input.temperature() < 6 * 1 || input.temperature() < 21 * 1) {
        if (input.lightLevel() < 50) {
            basic.showLeds(`
                . # . # .
                . . . . .
                . # # # .
                . # . # .
                . # # # .
                `)
        }
    }
})
basic.forever(function () {
    if (10 * 1 > input.temperature()) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            # # # # #
            # . # . #
            `)
    }
    if (20 * 1 > input.temperature()) {
        basic.showLeds(`
            . . . # .
            . . . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
