let Calvão_2 = 0
let Calvão_1 = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.clearScreen()
    basic.pause(randint(1000, 5000))
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    Calvão_2 += 1
    basic.showLeds(`
        . # # . .
        # . . # .
        . . # # .
        . # . . .
        # # # # .
        `)
    basic.pause(1000)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    Calvão_1 += 1
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.pause(1000)
    basic.clearScreen()
})
