input.onButtonPressed(Button.A, function () {
    Modo += 1
})
let humedad = 0
let Modo = 0
basic.forever(function () {
    humedad = pins.analogReadPin(AnalogPin.P1)
    if (Modo == 0) {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    if (Modo == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
        if (input.buttonIsPressed(Button.B)) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.pause(500)
            pins.digitalWritePin(DigitalPin.P0, 0)
        }
    }
    if (Modo == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
        if (input.buttonIsPressed(Button.B)) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.pause(1000)
            pins.digitalWritePin(DigitalPin.P0, 0)
        }
    }
    if (Modo == 3) {
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        if (input.buttonIsPressed(Button.B)) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.pause(2000)
            pins.digitalWritePin(DigitalPin.P0, 0)
        }
    }
    if (Modo == 4) {
        basic.showLeds(`
            # # . # #
            # . # . #
            # . # . #
            # . . . #
            # . . . #
            `)
        if (input.buttonIsPressed(Button.B)) {
            pins.digitalWritePin(DigitalPin.P0, 1)
        } else {
            pins.digitalWritePin(DigitalPin.P0, 0)
        }
    }
    if (Modo == 5) {
        Modo = 0
    }
})
