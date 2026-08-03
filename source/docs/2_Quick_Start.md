# 2. Quick Start Guide

## 2.1 Hardware Preparation

### 2.1.1 Powering On

1. Make sure the controller power switch is set to **OFF**. Install the battery in the battery compartment of the controller.

> [!NOTE]
> **Make sure the positive and negative terminals are not reversed.**

<img src="../_static/media/chapter_2/section_1/image.png"  class="inline-icon" style="width:400px;" >

2. Turn on the power switch. The power indicator LED on the controller lights red, indicating a successful power-on.

<img src="../_static/media/chapter_2/section_1/image2.png"  class="common_img" style="width:200px;" >

### 2.1.2 Charging

1. Make sure the controller power switch is set to **OFF**. Install the battery in the battery compartment of the controller.

> [!NOTE]
>
> * **Make sure the positive and negative terminals are not reversed.**
>
> * **When powering on for the first time, follow the steps in "2.1.2 Charging" to charge at the charging port for about 5 seconds to activate the built-in battery protection chip. Once activated, reactivation is not required unless the battery is unplugged.**

<img src="../_static/media/chapter_2/section_1/image.png"  class="inline-icon" style="width:400px;" >

2. Connect a USB data cable to the charging port on the controller, and connect the other end to a charger.

<img src="../_static/media/chapter_2/section_1/image3.png"  class="inline-icon" style="width:400px;" >

3. While charging, the controller LED lights up blue. When charging is complete, the LED turns off. Disconnect the power cable promptly after charging to avoid overcharging.

<img src="../_static/media/chapter_2/section_1/image4.png"  class="inline-icon" style="width:400px;" >

## 2.2 WonderCode Installation

1. Open **[WonderCode setup.exe](https://www.hiwonder.net/pc-programming-software)**.

<img src="../_static/media/chapter_2/section_2/image1.png"  class="inline-icon" style="width:80px;" >

2. Select the installation language, then click **OK**.

<img src="../_static/media/chapter_2/section_2/image2.png"  class="inline-icon" style="width:350px;" >

3. Select the installation location, then click **Next**.

<img src="../_static/media/chapter_2/section_2/image3.png"  class="inline-icon" style="width:450px;" >

4. Click **Next**.

<img src="../_static/media/chapter_2/section_2/image4.png"  class="inline-icon" style="width:450px;" >

5. Click **Install**.

<img src="../_static/media/chapter_2/section_2/image5.png"  class="inline-icon" style="width:450px;" >

<img src="../_static/media/chapter_2/section_2/image6.png"  class="inline-icon" style="width:450px;" >

6. After the installation is complete, click **Finish**.

<img src="../_static/media/chapter_2/section_2/image7.png"  class="inline-icon" style="width:450px;" >

## 2.3 Starter Project 1: Blinking Onboard RGB Lights

### 2.3.1 Programming Steps

1. **Open the software**: Start the programming software and create a new project.

<img src="../_static/media/chapter_2/section_3/image1.png"  class="inline-icon" style="width:700px;" >

2. **Add the extension**

- Open the **Choose an Extension** interface by clicking the icon in the lower-left corner of the software.

<img src="../_static/media/chapter_2/section_4/image2.png"  class="inline-icon" style="width:700px;" >

- In **Choose an Extension**, choose **Controller** and add **K12 ESP32**.

<img src="../_static/media/chapter_2/section_3/image3.png"  class="inline-icon" style="width:700px;" >

- After the extension is added successfully, the added package appears in the WonderCode interface.

<img src="../_static/media/chapter_2/section_3/image4.png"  class="inline-icon" style="width:700px;" >

3. **Write the program**: Drag the required blocks from the command area into the script area to create the program. After the program is completed, the converted Python code appears in the code display and upload area.

<img src="../_static/media/chapter_2/section_3/image5.png"  class="inline-icon" style="width:500px;" >

### 2.3.2 Program Download Steps

1. Set the controller power switch to **ON**, then connect a USB data cable to the program download port on the controller.

<img src="../_static/media/chapter_2/section_1/image5.png"  class="inline-icon" style="width:400px;" >

2. Plug the other end of the cable into a USB port on the computer.

<img src="../_static/media/chapter_2/section_3/image7.png"  class="inline-icon" style="width:200px;" >

3. Click **Connect** and select the corresponding port.

<img src="../_static/media/chapter_2/section_3/image8.png"  class="inline-icon" style="width:400px;" >

> [!NOTE]
> **The port number is not fixed. The example in this section uses COM3, but COM1 should not be selected because it is usually reserved for system communication. If multiple COM ports are shown and the correct one is unclear, right-click This PC, select Properties > Device Manager, and check the port assigned to the controller. The correct port typically includes the CH340 identifier.**

<img src="../_static/media/chapter_2/section_3/image9.png"  class="inline-icon" style="width:350px;" >

### 2.3.3 Downloading the Program

1. Click **Connect** and select the corresponding port.
   
2. Click the **Download** button in the upper-right corner to download the program to the controller.

> [!NOTE]
> **If no COM port appears after the controller is connected, check whether the USB cable is a data cable, or try another USB data port on the computer.**

## 2.4 Starter Project 2: Multi-Electronic Module Control


### 2.4.1 Learning Objectives

1. Understand the touch sensor, button module, sound sensor, 360° block servo, and glowy ultrasonic sensor module, and master the basic wiring and initialization operations of each module.
2. Master the programming logic of using buttons to control the start and stop of the 360° block servo via the ESP32 controller, and understand using conditional statements to control servo rotation speed.
3. Master the sound sensor volume threshold judgment programming to trigger the glowy ultrasonic sensor RGB lights to display a fixed single color when the volume exceeds the threshold.
4. Master the control logic of the touch sensor triggering the glowy ultrasonic sensor RGB lights into dazzling color mode, and understand the execution order of multi-layer nested conditional programs.

### 2.4.2 Wiring Diagram

Connect the glowy ultrasonic sensor cable to port P1 of the ESP32 controller;

Connect the touch sensor cable to port P5 of the ESP32 controller;

Connect the button module cable to port P6 of the ESP32 controller;

Connect the sound sensor module cable to port P7 of the ESP32 controller;

Connect the 360° continuous rotation block servo cable to port S1 of the ESP32 controller, inserting the orange signal wire of the servo into the white signal pin of S1.

As shown in the diagram:

<img src="../_static/media/chapter_2/section_4/image1.png"  class="common_img" style="width:500px" >

### 2.4.3 Programming

#### (1) Add Extension Libraries

Select **Sensor** in the **Choose an Extension** interface to add **Glowy ultrasonic sensor**, **Touch sensor**, **Sound sensor**, and **Button module**.

<img src="../_static/media/chapter_2/section_4/image2.png"  class="common_img" style="width:800px" >

#### (2) Complete Program

<img src="../_static/media/chapter_2/section_4/image3.png"  class="common_img" style="width:500px" >

### 2.4.4 Downloading the Program

1. Click **Connect** and select the corresponding port.
2. Click the **Download** button in the upper-right corner to download the program to the controller.

### 2.4.5 Program Outcome

Once the program starts running, initialize the glowy ultrasonic sensor port and touch sensor port. Then, execute the loop: when detecting that the button module at port 6 is pressed, the 360° block servo at port S1 rotates at a speed of 50 and stops when released. Detect the volume of the sound sensor at port 7: when the volume is greater than 70, all RGB lights of the glowy ultrasonic sensor light up red. When the volume is less than or equal to 70, pressing the touch sensor switches the RGB lights of the glowy ultrasonic sensor to dazzling color mode, with a 0.1-second interval for each loop.

## 2.5 Starter Project 3: Infrared Obstacle Avoidance and Light Display


### 2.5.1 Learning Objectives

1. Understand the dot matrix module, light sensor, infrared obstacle avoidance sensor, and 270° block servo, and master the initialization and basic wiring methods of each module.
2. Master the method of controlling the 270° block servo to rotate to fixed positions using the ESP32 controller, and understand the logic of servo angle and delay operation.
3. Master the usage of the dot matrix module reading sensor values and displaying numbers in real time, and learn to use sensor variables as dot matrix display content.
4. Master the obstacle detection judgment logic of the infrared obstacle avoidance sensor, and understand the program structure of conditional branches controlling the servo to switch between different angles.

### 2.5.2 Wiring Diagram

Connect the dot matrix module cable to port P5 of the ESP32 controller;

Connect the infrared obstacle avoidance sensor cable to port P6 of the ESP32 controller;

Connect the light sensor cable to port P7 of the ESP32 controller;

Connect the 270° block servo cable to port S1 of the ESP32 controller, inserting the orange wire of the servo into the white pin of S1.

As shown in the diagram:

<img src="../_static/media/chapter_2/section_5/image1.png"  class="common_img" style="width:500px" >

### 2.5.3 Programming

#### (1) Add Extension Libraries

- Select **Sensor** in the **Choose an Extension** interface to add **Light sensor** and **Infrared obstacle avoidance sensor**.

<img src="../_static/media/chapter_2/section_5/image2.png"  class="common_img" style="width:800px" >

- Select **Output modules** in the **Choose an Extension** interface to add **Dot matrix module**.

<img src="../_static/media/chapter_2/section_5/image3.png"  class="common_img" style="width:800px" >

#### (2) Complete Program

<img src="../_static/media/chapter_2/section_5/image4.png"  class="common_img" style="width:500px" >

### 2.5.4 Downloading the Program

1. Click **Connect** and select the corresponding port.

2. Click the **Download** button in the upper-right corner to download the program to the controller.

### 2.5.5 Program Outcome

Once the program starts running, initialize the dot matrix module port, and rotate the 270° block servo connected to port S1 to 135°. Then, execute the loop: the dot matrix module displays the brightness value of the light sensor at port 7 in real time. When the infrared obstacle avoidance sensor detects an obstacle, the 27When0° servo at port S1 rotates to 270°. When no obstacle is detected, the servo rotates back to 135°, with a 0.1-second interval for each loop.

## 2.6 Starter Project 4: Line Follower, IMU, Sound and Light Alarm


### 2.6.1 Learning Objectives

1. Understand the IMU sensor, 4-channel line follower sensor, onboard RGB lights, and buzzer module, and master the initialization and basic wiring methods of each module.
2. Master the method of the ESP32 controller reading the X-axis angle value of the IMU sensor, and understand the logic of threshold judgment triggering the onboard buzzer to sound.
3. Master the black line recognition judgment logic of the 4-channel line follower sensor, and learn to use conditional branches to control the onboard RGB light switch.
4. Master the programming usage of the buzzer playing tones and beats in the background, and understand the program structure of multi-layer conditional judgments synchronously controlling sound and light modules.

### 2.6.2 Wiring Diagram

Connect the 4-channel line follower sensor cable to port P1 of the ESP32 controller.

Connect the IMU sensor cable to port P2 of the ESP32 controller.

As shown in the diagram:

<img src="../_static/media/chapter_2/section_6/image1.png"  class="common_img" style="width:500px" >

### 2.6.3 Programming

#### (1) Add Extension Libraries

Select **Sensor** in the **Choose an Extension** interface to add **4-channel line follower sensor** and **IMU sensor**.

<img src="../_static/media/chapter_2/section_6/image2.png"  class="common_img" style="width:800px" >

#### (2) Complete Program

<img src="../_static/media/chapter_2/section_6/image3.png"  class="common_img" style="width:500px" >

### 2.6.4 Downloading the Program

1. Click **Connect** and select the corresponding port.

2. Click the **Download** button in the upper-right corner to download the program to the controller.

### 2.6.5 Program Outcome

Once the program starts running, initialize the ports of the IMU sensor and 4-channel line follower sensor. Then, execute the loop: when the 4-channel line follower detects a black line, all RGB lights turn red, and when no black line is detected, all RGB lights turn off. When the X-axis angle value obtained by the IMU sensor is greater than 30, play the A3 tone for 1/2 beat in the background, and when the angle value is not greater than 30, turn off the buzzer, with a 0.1-second interval for each loop.
