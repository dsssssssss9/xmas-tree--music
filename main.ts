function No_Bauble () {
    led.plotBrightness(1, 2, Low)
    led.plotBrightness(3, 2, Low)
    led.plotBrightness(0, 3, Low)
    led.plotBrightness(4, 3, Low)
}
function tree2 () {
    led.plotBrightness(2, 0, Low)
    led.plotBrightness(1, 1, Low)
    led.plotBrightness(2, 1, Low)
    led.plotBrightness(3, 1, Low)
    led.plotBrightness(1, 2, Low)
    led.plotBrightness(2, 2, Low)
    led.plotBrightness(3, 2, Low)
    led.plotBrightness(4, 2, Low)
    led.plotBrightness(0, 2, Low)
    led.plotBrightness(0, 3, Low)
    led.plotBrightness(4, 3, Low)
    led.plotBrightness(1, 3, Low)
    led.plotBrightness(2, 3, Low)
    led.plotBrightness(3, 3, Low)
    led.plotBrightness(2, 4, Low)
}
input.onButtonPressed(Button.A, function () {
    All_On()
})
function Star () {
    led.plotBrightness(2, 0, 255)
}
function All_On () {
    Star()
    Bauble_on()
}
function All_Off () {
    No_Bauble()
    basic.pause(100)
    No_Star()
}
input.onButtonPressed(Button.B, function () {
    All_Off()
})
function Bauble_on () {
    led.plotBrightness(1, 2, 255)
    led.plotBrightness(3, 2, 255)
    led.plotBrightness(0, 3, 255)
    led.plotBrightness(4, 3, 255)
}
function Draw_Tree_1 () {
    led.plotBrightness(2, 0, 0)
    led.plotBrightness(2, 1, Low)
    led.plotBrightness(1, 2, Low)
    led.plotBrightness(2, 2, Low)
    led.plotBrightness(3, 2, Low)
    led.plotBrightness(0, 3, Low)
    led.plotBrightness(1, 3, Low)
    led.plotBrightness(2, 3, Low)
    led.plotBrightness(3, 3, Low)
    led.plotBrightness(4, 3, Low)
    led.plotBrightness(2, 4, Low)
}
function No_Star () {
    led.plotBrightness(2, 0, 0)
}
let Low = 0
Low = 64
Draw_Tree_1()
basic.forever(function () {
    Star()
    basic.pause(200)
    No_Star()
    basic.pause(500)
    Bauble_on()
    basic.pause(500)
    No_Bauble()
    basic.pause(500)
})
