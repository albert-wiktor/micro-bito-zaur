input.onButtonPressed(Button.A, function () {
    soundExpression.hello.playUntilDone()
    servos.P0.setAngle(44)
    basic.pause(500)
    servos.P0.setAngle(138)
    basic.pause(500)
    servos.P0.stop()
})
