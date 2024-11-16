import serial
import time
import json
import firebase_admin
from firebase_admin import credentials, db

# Initialize Firebase
cred = credentials.Certificate('C:\\Users\\siris\\secure\\vietnamshrimpfarming-9fec7-firebase-adminsdk-dvix3-842ae02018.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://vietnamshrimpfarming-9fec7-default-rtdb.firebaseio.com/'
})

# Set up serial connection
ser = serial.Serial('COM3', 115200)  # Replace 'COM_PORT' with your port, e.g., 'COM3' or '/dev/ttyUSB0'

try:
    while True:
        if ser.in_waiting > 0:
            line = ser.readline().decode('utf-8').strip()
            print(f"Received: {line}")
            try:
                data = json.loads(line)
                db.reference('/IMU_LSM6DS3').push(data)
                print("Data successfully pushed to Firebase!")
            except json.JSONDecodeError:
                print("Invalid JSON data received.")
            except Exception as e:
                print(f"Error pushing data to Firebase: {e}")
            time.sleep(2)
except KeyboardInterrupt:
    print("Script terminated by user.")
finally:
    ser.close()  # Close the serial connection when exiting