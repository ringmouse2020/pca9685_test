S8_DEF_POS = 0
S7_DEF_POS = 0
S6_DEF_POS = 0
S5_DEF_POS = 0
S4_DEF_POS = 0
S3_DEF_POS = 0
S2_DEF_POS = 0
S1_DEF_POS = 0
DELAY1 = 0
POS3 = 0
POS2 = 0
POS1 = 0
POS1 = 30
POS2 = 60
POS3 = 50
DELAY1 = 100
S1_DEF_POS = 80
S2_DEF_POS = 130
S3_DEF_POS = 90
S4_DEF_POS = 130
S5_DEF_POS = 105
S6_DEF_POS = 130
S7_DEF_POS = 90
S8_DEF_POS = 130
def default_position():
    pca9685.servo(pca9685.Servos.S1, S1_DEF_POS)
    pca9685.servo(pca9685.Servos.S2, S2_DEF_POS)
    pca9685.servo(pca9685.Servos.S3, S3_DEF_POS)
    pca9685.servo(pca9685.Servos.S4, S4_DEF_POS)
    pca9685.servo(pca9685.Servos.S5, S5_DEF_POS)
    pca9685.servo(pca9685.Servos.S6, S6_DEF_POS)
    pca9685.servo(pca9685.Servos.S7, S7_DEF_POS)
    pca9685.servo(pca9685.Servos.S8, S8_DEF_POS)
def Donw():
    pca9685.servo(pca9685.Servos.S1, 35)
    pca9685.servo(pca9685.Servos.S2, 0)
    pca9685.servo(pca9685.Servos.S3, 135)
    pca9685.servo(pca9685.Servos.S4, 0)
    pca9685.servo(pca9685.Servos.S5, 140)
    pca9685.servo(pca9685.Servos.S6, 0)
    pca9685.servo(pca9685.Servos.S7, 50)
    pca9685.servo(pca9685.Servos.S8, 0)
def STEP1():
    pca9685.servo(pca9685.Servos.S2, S2_DEF_POS - POS1)
    pause(DELAY1)
    pca9685.servo(pca9685.Servos.S1, S1_DEF_POS + POS2)
    pause(DELAY1)
    pca9685.servo(pca9685.Servos.S2, S2_DEF_POS + POS1)
    pause(DELAY1)
    pca9685.servo(pca9685.Servos.S1, S1_DEF_POS)
    pause(DELAY1)
    pca9685.servo(pca9685.Servos.S2, S2_DEF_POS)
    pause(DELAY1)
def STEP2():
    pca9685.servo(pca9685.Servos.S6, S6_DEF_POS + POS3)
    pause(DELAY1)
    pca9685.servo(pca9685.Servos.S5, S5_DEF_POS + POS2)
    pause(DELAY1)
    pca9685.servo(pca9685.Servos.S6, S6_DEF_POS - POS3)
    pause(DELAY1)
    pca9685.servo(pca9685.Servos.S5, S5_DEF_POS)
    pause(DELAY1)
    pca9685.servo(pca9685.Servos.S6, S6_DEF_POS)
    pause(DELAY1)
def STEP3():
    pca9685.servo(pca9685.Servos.S4, S4_DEF_POS + POS1)
    pause(DELAY1)
    pca9685.servo(pca9685.Servos.S3, S3_DEF_POS - POS2)
    pause(DELAY1)
    pca9685.servo(pca9685.Servos.S4, S4_DEF_POS - POS1)
    pause(DELAY1)
    pca9685.servo(pca9685.Servos.S3, S3_DEF_POS)
    pause(DELAY1)
    pca9685.servo(pca9685.Servos.S4, S4_DEF_POS)
    pause(DELAY1)
def STEP4():
    pca9685.servo(pca9685.Servos.S8, S8_DEF_POS - POS1)
    pause(DELAY1)
    pca9685.servo(pca9685.Servos.S7, S7_DEF_POS - POS2)
    pause(DELAY1)
    pca9685.servo(pca9685.Servos.S8, S8_DEF_POS + POS1)
    pause(DELAY1)
    pca9685.servo(pca9685.Servos.S7, S7_DEF_POS)
    pause(DELAY1)
    pca9685.servo(pca9685.Servos.S8, S8_DEF_POS)
    pause(DELAY1)
def STEP5():
    pca9685.servo(pca9685.Servos.S2, S2_DEF_POS - POS1)
    pca9685.servo(pca9685.Servos.S6, S6_DEF_POS + POS1)
    pause(DELAY1)
    pca9685.servo(pca9685.Servos.S1, S1_DEF_POS + POS2)
    pca9685.servo(pca9685.Servos.S5, S5_DEF_POS + POS2)
    pause(DELAY1)
    pca9685.servo(pca9685.Servos.S2, S2_DEF_POS + POS1)
    pca9685.servo(pca9685.Servos.S6, S6_DEF_POS - POS1)
    pause(DELAY1)
    pca9685.servo(pca9685.Servos.S1, S1_DEF_POS)
    pca9685.servo(pca9685.Servos.S5, S5_DEF_POS)
    pause(DELAY1)
    pca9685.servo(pca9685.Servos.S2, S2_DEF_POS)
    pca9685.servo(pca9685.Servos.S6, S6_DEF_POS)
    pause(DELAY1)
def STEP6():
    pca9685.servo(pca9685.Servos.S4, S4_DEF_POS - POS1)
    pca9685.servo(pca9685.Servos.S8, S8_DEF_POS + POS1)
    pause(DELAY1)
    pca9685.servo(pca9685.Servos.S3, S3_DEF_POS + POS2)
    pca9685.servo(pca9685.Servos.S7, S7_DEF_POS + POS2)
    pause(DELAY1)
    pca9685.servo(pca9685.Servos.S4, S4_DEF_POS + POS1)
    pca9685.servo(pca9685.Servos.S8, S8_DEF_POS - POS1)
    pause(DELAY1)
    pca9685.servo(pca9685.Servos.S3, S3_DEF_POS)
    pca9685.servo(pca9685.Servos.S7, S7_DEF_POS)
    pause(DELAY1)
    pca9685.servo(pca9685.Servos.S4, S4_DEF_POS)
    pca9685.servo(pca9685.Servos.S8, S8_DEF_POS)
    pause(DELAY1)
def Test():
    default_position()
    for index in range(5):
        STEP5()
        STEP6()
    pause(500)

def on_a_pressed():
    default_position()
    pause(500)
    Donw()
    pause(500)
    default_position()
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_a_released():
    pass
controller.A.on_event(ControllerButtonEvent.RELEASED, on_a_released)

def on_b_pressed():
    Test()
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_b_released():
    pass
controller.B.on_event(ControllerButtonEvent.RELEASED, on_b_released)

pause(1000)
Donw()
pause(1000)
default_position()
pause(1000)

def on_forever():
    pass
forever(on_forever)
