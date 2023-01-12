function Start_gaming_or_bcak () {
    if (story.checkLastAnswer("Start the Game")) {
        Striker_value.destroy()
        Striker_value_2.destroy()
        Defender_value.destroy()
        Defender_value_2.destroy()
        Assassin_value.destroy()
        Assassin_value_2.destroy()
    }
    Jungle_Map_icon = textsprite.create("Jungle")
    Jungle_Map_icon.setIcon(assets.image`Jungle map`)
    Jungle_Map_icon.setPosition(36, 17)
    Forest_Map_icon = textsprite.create("Forest")
    Forest_Map_icon.setIcon(assets.image`Forest Icon`)
    Forest_Map_icon.setPosition(114, 17)
    story.showPlayerChoices("Jungle Map", "Forest Map")
    LabelBorder = textsprite.create("Border")
    LabelBorder.setIcon(img`
        1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 
        `)
    LabelBorder.setPosition(0, 0)
    LabelWall = textsprite.create("Wall")
    LabelWall.setIcon(img`
        1 1 1 1 1 1 1 
        1 f f f f f 1 
        1 f f f f f 1 
        1 f f f f f 1 
        1 f f f f f 1 
        1 f f f f f 1 
        1 1 1 1 1 1 1 
        `)
    LabelWall.setPosition(0, 0)
    Label3 = textsprite.create("")
    Label3.setIcon(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    Label3.setPosition(0, 0)
}
function Home () {
    story.printText("Welcome to this 2 Player game.", 81, 62)
    story.showPlayerChoices("Tutorial", "Start Game")
    if (story.checkLastAnswer("Tutorial")) {
        Player_1_tutorial = textsprite.create("Player 1:Control with")
        Player_1_tutorial_2 = textsprite.create("WASD, attack with Q.")
        Player_2_tutorial = textsprite.create("Player 2:Control with")
        Player_2_tutorial_2 = textsprite.create("IJKL, attack with U.")
        Player_1_tutorial.setPosition(73, 20)
        Player_1_tutorial_2.setPosition(71, 31)
        Player_2_tutorial.setPosition(73, 42)
        Player_2_tutorial_2.setPosition(70, 53)
        story.showPlayerChoices("Leave", "")
        if (story.checkLastAnswer("Leave")) {
            Player_1_tutorial.destroy()
            Player_1_tutorial_2.destroy()
            Player_2_tutorial.destroy()
            Player_2_tutorial_2.destroy()
            Home()
        }
    } else if (story.checkLastAnswer("Start Game")) {
        story.printText("Player 1 will chose their character first.", 80, 66)
        Chose_Character()
    }
}
function Chose_Character () {
    Striker_value = textsprite.create("Striker:HP 45,ATK 28", 0, 1)
    Striker_value_2 = textsprite.create(",Speed 95,FireRate 150")
    Striker_value.setPosition(64, 8)
    Striker_value_2.setPosition(67, 16)
    Defender_value = textsprite.create("Defender:HP 140,ATK 25", 0, 1)
    Defender_value_2 = textsprite.create(",Speed 62,FireRate 175")
    Defender_value.setPosition(70, 28)
    Defender_value_2.setPosition(67, 36)
    Assassin_value = textsprite.create("Assassin:HP 70,ATK 24", 0, 1)
    Assassin_value_2 = textsprite.create(",Speed 85,FireRate 175")
    Assassin_value.setPosition(68, 48)
    Assassin_value_2.setPosition(67, 56)
    story.showPlayerChoices("P1 Striker", "P1 Defender", "P1 Assassin")
    if (story.checkLastAnswer("P1 Striker")) {
        P1_character_Choice = 1
        story.showPlayerChoices("P2 Striker", "P2 Defender", "P2 Assassin")
    } else if (story.checkLastAnswer("P1 Defender")) {
        P1_character_Choice = 2
        story.showPlayerChoices("P2 Striker", "P2 Defender", "P2 Assassin")
    } else if (story.checkLastAnswer("P1 Assassin")) {
        P1_character_Choice = 3
        story.showPlayerChoices("P2 Striker", "P2 Defender", "P2 Assassin")
    }
    if (story.checkLastAnswer("P2 Striker")) {
        P2_Character_Choice = 1
        story.showPlayerChoices("Start the Game", "")
        Start_gaming_or_bcak()
    } else if (story.checkLastAnswer("P2 Defender")) {
        P2_Character_Choice = 2
        story.showPlayerChoices("Start the Game", "")
        Start_gaming_or_bcak()
    } else if (story.checkLastAnswer("P2 Assassin")) {
        P2_Character_Choice = 3
        story.showPlayerChoices("Start the Game", "")
        Start_gaming_or_bcak()
    }
}
function doSomething () {
    if (P1_character_Choice == 1) {
        P1_Striker = sprites.create(assets.image`P1 Striker`, SpriteKind.Player)
    } else if (P1_character_Choice == 2) {
        P1_Defender = sprites.create(assets.image`P1 Defender`, SpriteKind.Player)
    } else if (P1_character_Choice == 3) {
        P1_Assassin = sprites.create(assets.image`P1 Assassin`, SpriteKind.Player)
    } else if (P2_Character_Choice == 1) {
        P2_Striker = sprites.create(assets.image`P2 Striker`, SpriteKind.Player)
    } else if (P2_Character_Choice == 2) {
        P2_Defender = sprites.create(assets.image`P2 Defender`, SpriteKind.Player)
    } else if (P2_Character_Choice == 3) {
        P2_Assassin = sprites.create(assets.image`P2 Assassin`, SpriteKind.Player)
    }
}
let P2_Assassin: Sprite = null
let P2_Defender: Sprite = null
let P2_Striker: Sprite = null
let P1_Assassin: Sprite = null
let P1_Defender: Sprite = null
let P1_Striker: Sprite = null
let P2_Character_Choice = 0
let P1_character_Choice = 0
let Player_2_tutorial_2: TextSprite = null
let Player_2_tutorial: TextSprite = null
let Player_1_tutorial_2: TextSprite = null
let Player_1_tutorial: TextSprite = null
let Label3: TextSprite = null
let LabelWall: TextSprite = null
let LabelBorder: TextSprite = null
let Forest_Map_icon: TextSprite = null
let Jungle_Map_icon: TextSprite = null
let Assassin_value_2: TextSprite = null
let Assassin_value: TextSprite = null
let Defender_value_2: TextSprite = null
let Defender_value: TextSprite = null
let Striker_value_2: TextSprite = null
let Striker_value: TextSprite = null
Home()
