basic.showString("Hello!")
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
    if (pins.analogReadPin(AnalogPin.P1) < 300) {
        basic.showIcon(IconNames.Sad)
        music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once)
        basic.pause(5000)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
