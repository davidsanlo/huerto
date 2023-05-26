function Modo_3 () {
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
input.onButtonPressed(Button.A, function () {
    Modo += 1
})
function Modo_1 () {
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
function Apagado () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
function Modo_2 () {
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
function Manual () {
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
function Automático () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    humedad = pins.analogReadPin(AnalogPin.P1)
    led.plotBarGraph(
    humedad,
    1023
    )
    if (humedad < 500) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    basic.pause(2000)
}
let humedad = 0
let Modo = 0
basic.forever(function () {
    humedad = pins.analogReadPin(AnalogPin.P1)
    if (Modo == 0) {
        Apagado()
    }
    if (Modo == 1) {
        Modo_1()
    }
    if (Modo == 2) {
        Modo_2()
    }
    if (Modo == 3) {
        Modo_3()
    }
    if (Modo == 4) {
        Manual()
    }
    if (Modo == 5) {
        Automático()
    }
    if (Modo == 6) {
        Modo = 0
    }
})
