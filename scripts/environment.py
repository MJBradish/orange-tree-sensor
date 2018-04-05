import RPi.GPIO as GPIO
from envirophat import analog
from envirophat import light
from envirophat import weather
import time

GPIO.setmode(GPIO.BCM)
GPIO.setup(17, GPIO.OUT)
GPIO.output(17, GPIO.HIGH)
time.sleep(5)
print(analog.read(0))
print(light.light())
print(weather.temperature())
print(weather.pressure())
GPIO.output(17, GPIO.LOW)

