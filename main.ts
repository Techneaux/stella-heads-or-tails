input.onButtonPressed(Button.A, function () {
    headsortails = randint(0, 1)
    if (headsortails == 0) {
        images.createImage(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `).showImage(0)
    } else {
        images.createImage(`
            # . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . #
            `).showImage(0)
    }
})
input.onButtonPressed(Button.B, function () {
    images.createImage(`
        # . . . .
        . # . . .
        . . # . .
        . # . # .
        . . # . .
        `).showImage(0)
})
let headsortails = 0
images.createImage(`
    . . . . .
    . # # # .
    . . . # .
    . . . # .
    . . . # .
    `).showImage(0)
