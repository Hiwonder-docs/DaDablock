# 4. Software and Hardware Guide

## 4.1 ESP32 Controller

### 4.1.1 Introduction to the ESP32 Controller

This is a smart controller powered by the ESP32 chip, supporting both block-based graphical programming and Python programming. Enclosed in a PC plastic shell, the board features integrated electronic modules including PWM servo ports, motor ports, programmable buttons, and a buzzer. It also features reserved sensor ports for high expandability. The uniform 4-pin anti-reverse ports make connecting with the full line of Hiwonder sensors convenient and safe.

<img src="../_static/media/chapter_2/section_1/image1.png" class="inline-icon" width="400px">

### 4.1.2 ESP32 Controller Port Overview

<img src="../_static/media/chapter_2/section_1/image2.png" class="inline-icon" width="800px">

### 4.1.3 ESP32 Controller Specifications

| Parameter | Description |
| :---: | :---: |
| Product name | ESP32 controller |
| Dimensions | 88.0 x 55.5 x 42.5 mm |
| Charging voltage | 5 V |
| Charging current | 1500 mA |
| Charging time | 3.5 h |
| Battery capacity | Two 1200 mAh 3.7 V lithium batteries |
| Maximum operating voltage | 8.4 V |
| Rated operating voltage | 7.4 V |

## 4.2 WonderCode Programming Software

### 4.2.1 Platform Overview

WonderCode is a dedicated Scratch-based programming software tool for Hiwonder products. The software supports automatic conversion between graphical instruction blocks and Python code. Code can be written by dragging and dropping instruction blocks, making it highly suitable for beginners to learn programming.

<img src="../_static/media/chapter_4/section_0/image0.png" class="inline-icon" width="100px">

### 4.2.2 Platform Interface Overview

The diagram below illustrates the functional areas of the WonderCode software: ① Menu bar, ② Blocks area, ③ Script area, and ④ Code display and upload area.

<img src="../_static/media/chapter_4/section_0/image1.png" class="inline-icon" width="800px">

The corresponding functions are described in the table below:

| Icon | Function |
| :---: | :---: |
| <img src="../_static/media/chapter_4/section_0/image2.png" class="inline-icon" width="100"> | Creates, saves, and opens program files. |
| <img src="../_static/media/chapter_4/section_0/image3.png" class="inline-icon" width="100"> | Used for online mode, which is only for informational purposes and does not need to be mastered. |
| <img src="../_static/media/chapter_4/section_0/image4.png" class="inline-icon" width="100"> | Connects or disconnects the device and software, and confirms the connection port. |
| <img src="../_static/media/chapter_4/section_0/image5.png" class="inline-icon" width="100"> | Provides access to help materials, software updates, and driver installation. |
| <img src="../_static/media/chapter_4/section_0/image6.png" class="inline-icon" width="100"> | Displays the program file name. If programming has not started or the file has not been saved, **Scratch Project** will be displayed. |
| <img src="../_static/media/chapter_4/section_0/image7.png" class="inline-icon" width="100"> | Interface switch button used to switch between **OnlineMode** and **UploadMode**. |
| <img src="../_static/media/chapter_4/section_0/image8.png" class="inline-icon" width="100"> | Selects the display language, with support for English. |
| <img src="../_static/media/chapter_4/section_0/image9.png" class="inline-icon" width="100"> | Undoes or redoes actions during programming. |
| <img src="../_static/media/chapter_4/section_0/image10.png" class="inline-icon" width="100"> | Switches the edit mode. **Auto** automatically converts block programs into Python format, while **Python Coding** allows direct editing in Python. |
| <img src="../_static/media/chapter_4/section_0/image11.png" class="inline-icon" width="100"> | Saves the program as Python code. |
| <img src="../_static/media/chapter_4/section_0/image12.png" class="inline-icon" width="100"> | Opens saved Python files. |
| <img src="../_static/media/chapter_4/section_0/image13.png" class="inline-icon" width="100"> | Enables device interaction and downloads programs to the controller. |
| <img src="../_static/media/chapter_4/section_0/image14.png" class="inline-icon" width="100"> | Adds device extension packages. |
| <img src="../_static/media/chapter_4/section_0/image15.png" class="inline-icon" width="100"> | Zooms in, zooms out, or restores the default size of the code editing interface. |

### 4.2.3 Basic Blocks Overview

<table>
<tr><th>Block</th><th>Category</th><th>Function Description</th></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_1/image1.png" class="inline-icon" width="200"></td><td rowspan="10"><img src="../_static/media/chapter_5/section_0/subsection_1/image.png"></td><td>Pauses program execution for a specified duration before proceeding to the next instruction. This is used for action intervals and delay buffering.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_1/image2.png" class="inline-icon" width="200"></td><td>Reads the total runtime of the device in milliseconds since powering on. This is used for timing and delay logic determination.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_1/image3.png" class="inline-icon" width="200"></td><td>Runs the code inside the loop for a specified number of times and exits the loop upon completion.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_1/image4.png" class="inline-icon" width="200"></td><td>Runs the nested instructions inside a loop indefinitely. The program continuously repeats the logic inside the loop.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_1/image5.png" class="inline-icon" width="200"></td><td>Basic conditional statement. Executes the code inside if the condition is met. Otherwise, skips it.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_1/image6.png" class="inline-icon" width="200"></td><td>Dual-branch conditional statement. Executes the code in the `then` branch if the condition is met. Otherwise, executes the code in the `else` branch.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_1/image7.png" class="inline-icon" width="200"></td><td>Pauses program execution for a custom duration.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_1/image8.png" class="inline-icon" width="200"></td><td>Repeatedly executes the code inside the loop until the specified condition is met, then exits the loop.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_1/image9.png" class="inline-icon" width="200"></td><td>Terminates the current loop early and exits to execute the subsequent program.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_1/image10.png" class="inline-icon" width="200"></td><td>Used inside a custom function to return specified data to the function caller.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_2/image1.png" class="inline-icon" width="200"></td><td rowspan="15"><img src="../_static/media/chapter_5/section_0/subsection_2/image.png"></td><td>Adds two values and returns the result.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_2/image2.png" class="inline-icon" width="200"></td><td>Subtracts one value from another and returns the result.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_2/image3.png" class="inline-icon" width="200"></td><td>Multiplies two values and returns the result.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_2/image4.png" class="inline-icon" width="200"></td><td>Divides one value by another and returns the result.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_2/image5.png" class="inline-icon" width="200"></td><td>Compares two numbers and returns a boolean value of true or false.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_2/image6.png" class="inline-icon" width="200"></td><td>Logical AND operation. The overall result is true only when all conditions are met simultaneously.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_2/image7.png" class="inline-icon" width="200"></td><td>Logical OR operation. The overall result is true if any of the conditions are met.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_2/image8.png" class="inline-icon" width="200"></td><td>Logical NOT operation, which reverses the boolean value, making true become false and vice versa.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_2/image9.png" class="inline-icon" width="200"></td><td>Boolean logical statement that evaluates the input condition as true or false, or performs a NOT operation.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_2/image12.png" class="inline-icon" width="200"></td><td>Checks whether a specified element exists inside a list, tuple, or dictionary, and returns a boolean result.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_2/image13.png" class="inline-icon" width="300"></td><td>Extracts the value associated with the specified key in a dictionary.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_2/image14.png"></td><td>Linearly maps the input value from its original range to a target range to complete the value range conversion.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_2/image10.png" class="inline-icon" width="150"></td><td>Enters or calls text content to generate string data that can be used for concatenation, logic checks, or display.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_2/image15.png" class="inline-icon" width="200"></td><td>Concatenates two strings to output a combined text string.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_2/image16.png"></td><td>Converts the input numerical value into text format, which is used for display or string concatenation.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_3/image1.png"></td><td rowspan="8"><img src="../_static/media/chapter_5/section_0/subsection_3/image.png"></td><td>Creates a custom variable to store a single piece of data, such as a number or text.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_3/image3.png" class="inline-icon" width="200"></td><td>Reads the data stored in a variable for operations such as calculation, comparison, or output.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_3/image4.png" class="inline-icon" width="250"></td><td>Assigns a value to the specified variable, overwriting the original data.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_3/image6.png"></td><td>Increments a numerical variable by adding a specified number to its current value.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_3/image2.png"></td><td>Creates an empty list with a custom name to store multiple sets of data.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_3/image8.png" class="inline-icon" width="100"></td><td>Generates an empty list container that can hold various types of data, such as numbers and text, for subsequent operations.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_3/image11.png" class="inline-icon" width="200"></td><td>Clears all stored elements in the target list to reset it.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_3/image12.png" class="inline-icon" width="250"></td><td>Inserts custom content at the specified index in the target list.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_4/image4.png" class="inline-icon" width="250"></td><td rowspan="5"><img src="../_static/media/chapter_5/section_0/subsection_4/image.png"></td><td>Creates a custom function block, sets the function name, and defines input parameters of number or text type to package and reuse program logic.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_4/image5.png" class="inline-icon" width="200"></td><td>Provides a number or text parameter input value for the custom function.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_4/image6.png" class="inline-icon" width="200"></td><td>Calls the defined custom function block to execute the encapsulated program code.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_4/image2.png" class="inline-icon" width="150"></td><td>Creates a custom function block to encapsulate a segment of reusable program logic.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_4/image3.png" class="inline-icon" width="100"></td><td>Calls the defined custom function to execute the encapsulated program code.</td></tr>
</table>


### 4.2.4 ESP32 Controller Extension Library Blocks Overview

<table>
<tr><th>Block</th><th>Category</th><th>Function Description</th></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_5/image1.png" class="inline-icon" width="200"></td><td rowspan="15"><img src="../_static/media/chapter_5/section_0/subsection_5/image.png"></td><td>The main program loop container. It continuously executes the code inside in a loop after the power-on initialization is completed.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_5/image2.png" class="inline-icon" width="200"></td><td>Executes only once after the device is powered on. This is used for startup logic such as hardware initialization and parameter configuration.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_5/image3.png"></td><td>Drives the buzzer to play music of a specified pitch and beat. Running in background mode does not block the execution of subsequent programs.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_5/image4.png"></td><td>Adjusts the volume of the buzzer, with a range of 0 to 100. Larger values indicate higher volume.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_5/image5.png" class="inline-icon" width="200"></td><td>Stops the buzzer from sounding immediately, terminating the currently playing tone or music.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_5/image6.png" class="inline-icon" width="300"></td><td>Controls the RGB light at the specified index, or all RGB lights, to light up in the selected color.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_5/image7.png"></td><td>Customizes the light color using RGB three-channel values to control the corresponding RGB light to output mixed color light.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_5/image8.png"></td><td>Makes the specified RGB light perform a brightness-fading breathing effect in the selected color, with a customizable dimming cycle.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_5/image9.png" class="inline-icon" width="200"></td><td>Enables the flowing RGB lighting effect that automatically cycles through a multi-color gradient.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_5/image10.png" class="inline-icon" width="200"></td><td>Turns off the specified RGB light or all RGB lights to cut off the light output.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_5/image11.png" class="inline-icon" width="250"></td><td>Prints custom text strings to the computer through the serial port to view debugging information.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_5/image12.png" class="inline-icon" width="250"></td><td>Prints specified numerical values to the computer through the serial port for data debugging.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_5/image13.png" class="inline-icon" width="250"></td><td>Immediately stops the rotation of the 360° block servo on the specified port.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_5/image14.png" class="inline-icon" width="300"></td><td>Controls the 360° block servo on the specified port to rotate continuously at a custom speed.</td></tr>
<tr><td><img src="../_static/media/chapter_5/section_0/subsection_5/image15.png"></td><td>Controls the 270° block servo on the specified port to rotate smoothly to the target angle within a set duration, automatically waiting for the servo to complete the action.</td></tr>
</table>

<p id ="anther4.3"></p>

## 4.3 Electronic Modules Overview

### 4.3.1 360° Block Motor

#### (1) Sensor Overview

This is a servo that works with a wide range of LEGO-compatible building blocks. It is typically controlled using PWM, or Pulse Width Modulation. Because it is a continuous-rotation servo, the PWM signal controls the rotation speed and direction, but not a specific rotation angle.

<img src="../_static/media/chapter_3/section_1/image1.png"  class="inline-icon" style="width:250px;" >

#### (2) Specifications

| Item | Specification |
| :-: | :-: |
| Operating voltage | DC 4.8-6 V |
| Rated torque | 1 N.m |
| Rotation range | 0-360° |
| Cable length | 25 cm |
| Dimensions | 40 x 16 mm |

#### (3) Wiring Diagram

Connect the motor to the controller port S1. Make sure the yellow wire is connected to S, the red wire to 5V, and the brown wire to GND, as shown below:

<img src="../_static/media/chapter_3/section_1/image2.png"  class="inline-icon" style="width:400px;" >

#### (4) Test Demo

Once the program has been downloaded and is running, the block motor rotates forward at a speed of 50 for 2 seconds, then reverses at the same speed for 2 seconds, and finally stops.

#### (5) Program Screenshot

<img src="../_static/media/chapter_3/section_1/image3.png"  class="inline-icon" style="width:400px;" >

- The program uses the block **Set servo ID S1 rotate at a speed of 50** because the block motor must be controlled with a PWM signal, and the controller outputs PWM through ports S1-S6. In this example, S1 is used to send the control signal to the block motor.

### 4.3.2 270° Block Servo

#### (1) Sensor Overview

This is a servo that works with a wide range of LEGO-compatible building blocks. It is generally controlled using PWM, or Pulse Width Modulation. Unlike a continuous-rotation servo, this is a limited-rotation servo, which means it can control angle position within a restricted range of 0-270°.

<img src="../_static/media/chapter_3/section_2/image1.png"  class="inline-icon" style="width:300px;" >

#### (2) Specifications

| Item | Specification |
| :-: | :-: |
| Operating voltage | DC 4.8-6 V |
| Rated torque | 1 N·m |
| Rotation range | 0-270° |
| Cable length | 25 cm |
| Dimensions | 40 x 16 mm |

#### (3) Wiring Diagram

<img src="../_static/media/chapter_3/section_2/image2.png"  class="inline-icon" style="width:400px;" >

#### (4) Test Demo

Once the program has been downloaded and is running, the block servo first rotates to 135° for 2 seconds, then to 0° for 2 seconds, then to 270° for 2 seconds, and finally stops.

#### (5) Program Screenshot

<img src="../_static/media/chapter_3/section_2/image3.png"  class="inline-icon" style="width:400px;" >

### 4.3.3 Button Sensor

#### (1) Sensor Overview

This is a common button module with a white button cap. It is widely used in DIY projects such as environmental monitoring, electronic scales, smart cars, and robots.

<img src="../_static/media/chapter_3/section_3/image1.png"  class="inline-icon" style="width:300px;" >

#### (2) Specifications

| Item | Specification |
| :-: | :-: |
| Operating voltage | DC 5 V |
| Operating current | 5 mA |
| Connector type | 5264-4AW |
| Dimensions | 39.5 x 23.5 x 24 mm |

#### (3) Wiring Diagram

<img src="../_static/media/chapter_3/section_3/image2.png"  class="inline-icon" style="width:400px;" >

#### (4) Test Demo

Once the program has been downloaded and is running, the button sensor state is tested through the onboard buzzer. When the button is not pressed, the buzzer remains silent. When the button is pressed, the buzzer sounds.

#### (5) Program Screenshot

<img src="../_static/media/chapter_3/section_3/image3.png"  class="inline-icon" style="width:400px;" >

- The program uses the **wait 0.2 seconds** block because when a physical button is pressed or released, its metal contacts briefly bounce. This causes the signal level to switch back and forth repeatedly in a short time, so the program may interpret a single press as multiple presses. Waiting 0.2 seconds allows the button's mechanical bounce to settle, ensuring that the program detects one stable button-press signal and preventing the tone from being played repeatedly by mistake.

### 4.3.4 Touch Sensor

#### (1) Sensor Overview

This is a touch sensor based on capacitive sensing. It can be used for switch control in devices, such as controlling lights or touch-enabled doorbells. The sensor features LEGO-compatible mounting holes, making it suitable for more creative DIY projects.

<img src="../_static/media/chapter_3/section_4/image1.png"  class="inline-icon" style="width:300px;" >

#### (2) Specifications

| Item | Specification |
| :-: | :-: |
| Operating voltage | DC 5 V |
| Operating current | 5 mA |
| Connector type | 5264-4AW |
| Dimensions | 39.5 x 23.5 x 24 mm |

#### (3) Wiring Diagram

<img src="../_static/media/chapter_3/section_4/image2.png"  class="inline-icon" style="width:400px;" >

#### (4) Test Demo

Once the program has been downloaded and is running, the touch sensor state is tested with the onboard RGB light. When the sensor is not touched, the RGB light remains off. When the sensor is touched, the RGB light turns red.

#### (5) Program Screenshot

<img src="../_static/media/chapter_3/section_4/image3.png"  class="inline-icon" style="width:400px;" >

- To use the touch sensor, the interface must be initialized at startup. It can be connected to any of P5, P6, P7, or P8.

### 4.3.5 Sound Sensor

#### (1) Sensor Overview

This is a sensor for detecting the intensity of external sound. It is widely used in projects such as sound-controlled robots, sound-activated switches, and sound alarms. The sensor features LEGO-compatible mounting holes, making it suitable for more creative DIY projects.

<img src="../_static/media/chapter_3/section_5/image1.png"  class="inline-icon" style="width:300px;" >

#### (2) Specifications

| Item | Specification |
| :-: | :-: |
| Operating voltage | DC 5 V |
| Operating current | 5 mA |
| Microphone type | Electret condenser |
| Connector type | 5264-4AW |
| Dimensions | 39.5 x 23.5 x 24 mm |

#### (3) Wiring Diagram

<img src="../_static/media/chapter_3/section_5/image2.png"  class="inline-icon" style="width:400px;" >

#### (4) Test Demo

Once the program has been downloaded and is running, the sound sensor is tested through the onboard buzzer. When the sound sensor detects a sound level greater than 30, the buzzer sounds for 1 second and then stops. The detection state is refreshed every 0.05 seconds to keep the response timely.

#### (5) Program Screenshot

<img src="../_static/media/chapter_3/section_5/image3.png"  class="inline-icon" style="width:400px;" >

### 4.3.6 Ultrasonic Sensor

#### (1) Sensor Overview

This is a glowy ultrasonic sensor that uses an industrial-grade ultrasonic ranging chip. The chip integrates the ultrasonic transmitting circuit, ultrasonic receiving circuit, digital processing circuit, and more. The module uses an I2C communication interface, allowing the measured distance to be read through I2C communication. The module features LEGO-compatible mounting holes, making it suitable for more creative DIY projects.

<img src="../_static/media/chapter_3/section_6/image1.png"  class="inline-icon" style="width:300px;" >

#### (2) Specifications

| Item | Specification |
| :-: | :-: |
| Operating voltage | DC 5 V |
| Operating current | 2 mA |
| Operating frequency | 40 kHz |
| Effective ranging distance | 2 cm-400 cm |
| Communication method | I2C |
| Connector type | 5264-4AW |
| Dimensions | 55.5 x 23.5 x 23.8 mm |

#### (3) Wiring Diagram

<img src="../_static/media/chapter_3/section_6/image2.png"  class="inline-icon" style="width:400px;" >

#### (4) Test Demo

Once the program has been downloaded and is running, if the ultrasonic sensor detects an obstacle within 15 cm, both indicator lights on the ultrasonic sensor turn red at the same time. When the distance is greater than 15 cm, both lights turn off. The detection state is refreshed every 0.1 seconds to keep the response timely.

#### (5) Program Screenshot

<img src="../_static/media/chapter_3/section_6/image3.png"  class="inline-icon" style="width:400px;" >

- To use the ultrasonic sensor, the interface must be initialized at startup. It can be connected to any of P1, P2, P3, or P4. The program in the figure uses the **Turn off all lights on the Glowy Ultrasonic Sensor** block because the ultrasonic sensor lights up blue when powered on.

### 4.3.7 IMU Sensor

#### (1) Sensor Overview

This is a common IMU acceleration sensor. It is widely used in applications such as handheld gaming devices, 3D controllers, and portable navigation devices. The sensor features LEGO-compatible mounting holes, making it suitable for more creative DIY projects.

<img src="../_static/media/chapter_3/section_7/image1.png"  class="inline-icon" style="width:300px;" >

#### (2) Specifications

| Item | Specification |
| :-: | :-: |
| Operating voltage | DC 5 V |
| Data interface | I2C bus, with a maximum clock frequency of 400 kHz |
| Connector type | 5264-4AW |
| Dimensions | 39.5 x 23.5 x 24 mm |

#### (3) Wiring Diagram

<img src="../_static/media/chapter_3/section_7/image2.png"  class="inline-icon" style="width:400px;" >

#### (4) Test Demo

Once the program has been downloaded and is running, the X-axis and Y-axis values of the IMU sensor are displayed through the serial port.

#### (5) Program Screenshot

<img src="../_static/media/chapter_3/section_7/image3.png"  class="inline-icon" style="width:500px;" >

- To use the IMU sensor, the interface must be initialized at startup. It can be connected to any of P1, P2, P3, or P4. The program in the figure uses the **Wait 2 seconds** block because the IMU sensor requires calibration.

### 4.3.8 Infrared Obstacle Avoidance Sensor

#### (1) Sensor Overview

This is a sensor used to detect whether an obstacle is present in front of it. It includes an infrared transmitter and an infrared receiver. When the sensor encounters an obstacle, the infrared light is reflected back and received by the receiver. The sensor is widely used and features LEGO-compatible mounting holes, making it suitable for more creative DIY projects.

<img src="../_static/media/chapter_3/section_8/image1.png"  class="inline-icon" style="width:300px;" >

#### (2) Specifications

| Item | Specification |
| :-: | :-: |
| Operating voltage | DC 5 V |
| Operating current | 40 mA |
| Effective detection range | 2-25 cm |
| Detection range adjustment | Micro potentiometer adjustment |
| Connector type | 5264-4AW |
| Dimensions | 39.5 x 23.5 x 10 mm |

#### (3) Wiring Diagram

<img src="../_static/media/chapter_3/section_8/image2.png"  class="inline-icon" style="width:400px;" >

#### (4) Test Demo

Once the program has been downloaded and is running, the infrared sensor is tested using the onboard buzzer. When no obstacle is detected, the buzzer remains silent. When an obstacle is detected, the buzzer sounds.

#### (5) Program Screenshot

<img src="../_static/media/chapter_3/section_8/image3.png"  class="inline-icon" style="width:600px;" >

### 4.3.9 Light Sensor

#### (1) Sensor Overview

This is a sensor for detecting ambient light intensity. It is commonly used in interactive projects that respond to changes in light intensity, such as automatic roadside lighting systems and environmental monitoring systems. The sensor features LEGO-compatible mounting holes, making it suitable for more creative DIY projects.

<img src="../_static/media/chapter_3/section_9/image1.png"  class="inline-icon" style="width:300px;" >

#### (2) Specifications

| Item | Specification |
| :-: | :-: |
| Operating voltage | DC 5 V |
| Operating current | 5 mA |
| Connector type | 5264-4AW |
| Dimensions | 39.5 x 23.5 x 17.3 mm |

#### (3) Wiring Diagram

<img src="../_static/media/chapter_3/section_9/image2.png"  class="inline-icon" style="width:400px;" >

#### (4) Test Demo

Once the program has been downloaded and is running, the light intensity value detected by the light sensor is displayed through the serial port.

#### (5) Program Screenshot

<img src="../_static/media/chapter_3/section_9/image3.png"  class="inline-icon" style="width:400px;" >

### 4.3.10 4-Channel Line Follower Sensor

#### (1) Sensor Overview

The 4-channel line follower sensor can be used for line tracking. It features LEGO-compatible mounting holes, making it suitable for more creative DIY projects.

<img src="../_static/media/chapter_3/section_10/image1.png"  class="inline-icon" style="width:300px;" >

#### (2) Specifications

| Item | Specification |
| :-: | :-: |
| Operating voltage | DC 5 V |
| Effective range | 8-16 mm |
| Interface type | I2C |
| Connector type | 5264-4AW |
| Dimensions | 71.7 x 31.2 x 9 mm |

#### (3) Wiring Diagram

<img src="../_static/media/chapter_3/section_10/image2.png"  class="inline-icon" style="width:400px;" >

#### (4) Learning Mode

The 4-channel line follower module can learn both the map background and the black line to be followed by pressing the button on the sensor. Follow the steps below to complete the learning process:

<img src="../_static/media/chapter_3/section_10/image4.png"  class="inline-icon" style="width:400px;" >

① Point the sensor probes at the background area of the map and press and hold the learning button. When the indicator lights for sensors 1-4 flash at the same time, the background learning process is complete.
② Point the sensor probes at the line that will be followed and press the learning button once briefly. When the indicator lights for sensors 1-4 flash at the same time, line learning is complete.
③ When the middle two indicator lights on the 4-channel line follower sensor flash, the learning process is complete.

> [!NOTE]
> **During use, keep the sensor probes 8 mm to 16 mm above the ground. After learning is completed successfully, the middle two sensor probes flash. When the sensor probes detect the track, the corresponding indicator light turns on.**

#### (5) Test Demo

Once the program has been downloaded and is running, the 4-channel line follower module tests each sensor probe separately. When a black line is detected, the corresponding sensor number is output.

#### (6) Program Screenshot

<img src="../_static/media/chapter_3/section_10/image3.png"  class="inline-icon" style="width:500px;" >

- To use the 4-channel line follower sensor, the interface must be initialized at startup. It can be connected to any of P1, P2, P3, or P4.

### 4.3.11 Dot Matrix Module

#### (1) Module Overview

This is an LED dot matrix display module with high brightness, flicker-free display, and convenient wiring. It can display numbers, text, patterns, and more. The module also features LEGO-compatible mounting holes, making it suitable for more creative DIY projects.

<img src="../_static/media/chapter_3/section_11/image1.png"  class="inline-icon" style="width:300px;" >

#### (2) Specifications

| Item | Specification |
| :-: | :-: |
| Operating voltage | DC 5 V |
| Operating current | 45 mA |
| Matrix pixels | 8 x 16 dot matrix |
| Matrix brightness | 8 adjustable brightness levels |
| Connector type | 5264-4AW |
| Dimensions | 55.5 x 23.5 x 18.1 mm |

#### (3) Wiring Diagram

<img src="../_static/media/chapter_3/section_11/image2.png"  class="inline-icon" style="width:400px;" >

#### (4) Test Demo

Once the program has been downloaded and is running, the dot matrix display switches among "Hi", "123", and "❤".

#### (5) Program Screenshot

<img src="../_static/media/chapter_3/section_11/image3.png"  class="inline-icon" style="width:400px;" >

- To use the dot matrix module, the interface must be initialized at startup. It can be connected to any of P5, P6, P7, or P8.
