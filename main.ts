input.onButtonPressed(Button.A, function () {
    for (let conta = 0; conta <= 10; conta++) {
        basic.showNumber(conta)
    }
    caras()
})
input.onButtonPressed(Button.AB, function () {
    conta = 1
    while (conta <= 10) {
        basic.showNumber(conta)
        conta += 2
    }
    caras()
})
function caras () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Sad)
        basic.showIcon(IconNames.Asleep)
        basic.showIcon(IconNames.Surprised)
        basic.showIcon(IconNames.Happy)
    }
}
input.onButtonPressed(Button.B, function () {
    conta = 2
    while (conta <= 10) {
        basic.showNumber(conta)
        conta += 2
    }
    caras()
})
let conta = 0
let alato = randint(5, 10)
basic.showNumber(alato)
for (let conta = 0; conta <= alato; conta++) {
    basic.showNumber(conta)
    for (let index = 0; index < conta; index++) {
        music.playTone(988, music.beat(BeatFraction.Sixteenth))
        basic.pause(100)
    }
}
