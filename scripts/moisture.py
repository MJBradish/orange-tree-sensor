import RPi.GPIO as GPIO
from envirophat import analog
import time

GPIO.setmode(GPIO.BCM)
GPIO.setup(17, GPIO.OUT)
GPIO.output(17, GPIO.HIGH)
time.sleep(1)
print(analog.read(0))
GPIO.output(17, GPIO.LOW)

