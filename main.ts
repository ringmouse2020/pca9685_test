let S8_DEF_POS = 0
let S7_DEF_POS = 0
let S6_DEF_POS = 0
let S5_DEF_POS = 0
let S4_DEF_POS = 0
let S3_DEF_POS = 0
let S2_DEF_POS = 0
let S1_DEF_POS = 0
let DELAY1 = 0
let POS3 = 0
let POS2 = 0
let POS1 = 0
let MenuTextSprite: TextSprite[] = []
let i=0
let P_MAX=5
let P_Num=0
let P_Array:int16[]=[]
let P_DiffArray: int16[] = []
let P_NameArray:string[] = []

POS1 = 10
POS2 = 60
POS3 = 8
DELAY1 = 100
S1_DEF_POS = 80
S2_DEF_POS = 145
S3_DEF_POS = 90
S4_DEF_POS = 140
S5_DEF_POS = 105
S6_DEF_POS = 140
S7_DEF_POS = 90
S8_DEF_POS = 145
P_NameArray[0] = ""
P_NameArray[1]="DELAY1"
P_NameArray[2] = "POS1"
P_NameArray[3] = "POS2"
P_NameArray[4] = "POS3"
P_DiffArray[0] = 0
P_DiffArray[1] = 5
P_DiffArray[2] = 1
P_DiffArray[3] = 1
P_DiffArray[4] = 1

P_Array[0]=0;
P_Array[1] = DELAY1;
P_Array[2] = POS1;
P_Array[3] = POS2;
P_Array[4] = POS3;


function default_position() {
    pca9685.Servo(pca9685.Servos.S1, S1_DEF_POS)
    pca9685.Servo(pca9685.Servos.S2, S2_DEF_POS)
    pca9685.Servo(pca9685.Servos.S3, S3_DEF_POS)
    pca9685.Servo(pca9685.Servos.S4, S4_DEF_POS)
    pca9685.Servo(pca9685.Servos.S5, S5_DEF_POS)
    pca9685.Servo(pca9685.Servos.S6, S6_DEF_POS)
    pca9685.Servo(pca9685.Servos.S7, S7_DEF_POS)
    pca9685.Servo(pca9685.Servos.S8, S8_DEF_POS)
}
function Donw() {
    pca9685.Servo(pca9685.Servos.S1, 35)
    pca9685.Servo(pca9685.Servos.S2, 0)
    pca9685.Servo(pca9685.Servos.S3, 135)
    pca9685.Servo(pca9685.Servos.S4, 0)
    pca9685.Servo(pca9685.Servos.S5, 140)
    pca9685.Servo(pca9685.Servos.S6, 0)
    pca9685.Servo(pca9685.Servos.S7, 50)
    pca9685.Servo(pca9685.Servos.S8, 0)
}

function STEP1() {
    pca9685.Servo(pca9685.Servos.S2, S2_DEF_POS - POS1)
    pca9685.Servo(pca9685.Servos.S8, S8_DEF_POS - POS1)
    pause(DELAY1)
    pca9685.Servo(pca9685.Servos.S1, S1_DEF_POS + POS2)
    pca9685.Servo(pca9685.Servos.S7, S7_DEF_POS - POS2)
    pause(DELAY1)
    pca9685.Servo(pca9685.Servos.S2, S2_DEF_POS + POS3)
    pca9685.Servo(pca9685.Servos.S8, S8_DEF_POS + POS3)
    pause(DELAY1)

    pca9685.Servo(pca9685.Servos.S1, S1_DEF_POS)
    pca9685.Servo(pca9685.Servos.S7, S7_DEF_POS)

    pca9685.Servo(pca9685.Servos.S6, S6_DEF_POS - POS3)
    pca9685.Servo(pca9685.Servos.S4, S4_DEF_POS - POS3)
    pause(DELAY1)
    pca9685.Servo(pca9685.Servos.S2, S2_DEF_POS)
    pca9685.Servo(pca9685.Servos.S8, S8_DEF_POS)

    pca9685.Servo(pca9685.Servos.S6, S6_DEF_POS)
    pca9685.Servo(pca9685.Servos.S4, S4_DEF_POS)
    pause(DELAY1)

}
function STEP2() {
    pca9685.Servo(pca9685.Servos.S6, S6_DEF_POS - POS1)
    pca9685.Servo(pca9685.Servos.S4, S4_DEF_POS - POS1)
    pause(DELAY1)
    pca9685.Servo(pca9685.Servos.S5, S5_DEF_POS - POS2)
    pca9685.Servo(pca9685.Servos.S3, S3_DEF_POS + POS2)
    pause(DELAY1)
    pca9685.Servo(pca9685.Servos.S6, S6_DEF_POS + POS3)
    pca9685.Servo(pca9685.Servos.S4, S4_DEF_POS + POS3)
    pause(DELAY1)

    pca9685.Servo(pca9685.Servos.S5, S5_DEF_POS)
    pca9685.Servo(pca9685.Servos.S3, S3_DEF_POS)

    pca9685.Servo(pca9685.Servos.S2, S2_DEF_POS - POS3)
    pca9685.Servo(pca9685.Servos.S8, S8_DEF_POS - POS3)
    pause(DELAY1)
    pca9685.Servo(pca9685.Servos.S6, S6_DEF_POS)
    pca9685.Servo(pca9685.Servos.S4, S4_DEF_POS)

    pca9685.Servo(pca9685.Servos.S2, S2_DEF_POS)
    pca9685.Servo(pca9685.Servos.S8, S8_DEF_POS)
    pause(DELAY1)
}

function Test() {
    default_position()
    for (let index = 0; index < 20; index++) {
        STEP1()
        STEP2()
    }
    pause(500)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    default_position()
    pause(500)
    Donw()
    pause(500)
    default_position()
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {

})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Test()
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
})


controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (P_Num > 0)
    { 
        P_Num--;
    }
    MenuTextSprite[0].text = P_NameArray[P_Num];
    MenuTextSprite[0].update();
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (P_Num < (P_MAX-1))
    {
        P_Num++;
    }
    MenuTextSprite[0].text = P_NameArray[P_Num];
    MenuTextSprite[0].update();
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
})

controller.up.onEvent(ControllerButtonEvent.Pressed, function () {

})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    if (P_Num > 0) {
        P_Array[P_Num] = P_Array[P_Num] + P_DiffArray[P_Num];
        MenuTextSprite[P_Num].text = P_NameArray[P_Num] +"="+ P_Array[P_Num].toString();
        MenuTextSprite[P_Num].update();
    }

    DELAY1=P_Array[1];
    POS1=P_Array[2];
    POS2=P_Array[3];
    POS3=P_Array[4];
})


controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
  
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    if (P_Num > 0) {
        if (P_Array[P_Num] > P_DiffArray[P_Num])
        {
            P_Array[P_Num] = P_Array[P_Num] - P_DiffArray[P_Num];
            MenuTextSprite[P_Num].text = P_NameArray[P_Num] + "=" + P_Array[P_Num].toString();
            MenuTextSprite[P_Num].update();

            
        }
    }
    DELAY1 = P_Array[1];
    POS1 = P_Array[2];
    POS2 = P_Array[3];
    POS3 = P_Array[4];
})
for (i = 0; i < P_MAX;i++)
{
    if (i==0)
    {
        MenuTextSprite[i] = textsprite.create(P_NameArray[i], 0, 7)
    }
    else
    {
        MenuTextSprite[i] = textsprite.create(P_NameArray[i] + "=" + P_Array[i].toString(), 0, 1)
    }
    MenuTextSprite[i].left = 30
    MenuTextSprite[i].top = 10 + i * 12;
}


//pause(1000)
//Donw()
//pause(1000)
default_position()
pause(1000)

forever(function () {

})
