input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Duck)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Skull)
})
basic.showString("Hello!")
basic.clearScreen()
basic.forever(function () {
    basic.showIcon(IconNames.Sad)
    basic.pause(100)
    basic.showIcon(IconNames.Happy)
})
