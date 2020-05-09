led.setBrightness(21)
basic.showLeds(`
    . . . . .
    . . # . .
    . # # # .
    # # # # #
    . . # . .
    `)
basic.forever(function () {
    led.setBrightness(255)
    led.plotBrightness(2, 0, 255)
})
