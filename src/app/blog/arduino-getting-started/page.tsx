import Page from "@/components/ui/pages/Page";
import { Header, Content } from "@/components/feature-blog";
import { ArduinoGettingStarted } from "@/assets/blog-cover-images";

// Content
const title = `Arduino - Getting Started`;
const category = `Technology`;
const coverImg = ArduinoGettingStarted;
const published = `February 28, 2023`;

const content = [
  `# What is Arduino?`,
  `Arduino is an open-source electronics company/platform that designs and manufactures easy-to-use hardware and software for prototyping embedded systems.`,
  `The Arduino project began back in 2005 as a tool aiming to provide a low-cost and intuitive way for builders of all skill levels to create devices capable of interacting with their environment. To date, Arduino has released hundreds of hardware designs, and a handful of software tools for interfacing with them, and has a world-spanning community of makers backing the platform.`,
  `At its most basic, Arduino is a small PCB (Printed Circuit Board) called an Arduino board, a software development environment called the Arduino IDE (Integrated Development Environment), and the code you write to control and read sensors, actuators, and other devices. Today you'll be learning some of the basics of how the Arduino platform accomplishes this and we'll finish off with one of the most popular intro projects, blinking an LED!`,
  `# Why Arduino?`,
  `So why has Arduino become so popular? It has to do with a few simple factors, it's relatively inexpensive, simple to get started with but powerful enough to remain an indispensable tool for advanced users, it works across multiple platforms (Windows, Mac, and Linux), and is open source.`,
  `On top of the many advantages mentioned above, the Arduino platform is rich in content, guides, and tutorials, and you can find new projects being released by people around the world all the time.`,
  `# Hardware`,
  `While there are many flavors of Arduino boards, a few key components can be found across all boards.`,
  `- Microcontroller (MCU)
    - A compact, integrated circuit, that functions as a low-cost low-performance computer designed to control peripheral devices. This device acts as the brain of the Arduino and is what you are programming when you plug your board into a computer and upload a program. 
- USB Port
  - A USB (Universal Serial Bus) port is an industry-standard cable interface commonly used with personal computers and other consumer electronics. USB comes in a variety of form factors and is used for sending power and data. The USB port on the Arduino is used for connecting to a computer for programming the board and providing 3.3V or 5V to power all of the components.
- USB to serial chip
  - A USB to serial chip converts data from a USB protocol to a serial protocol such as [UART](https://www.rohde-schwarz.com/us/products/test-and-measurement/essentials-test-equipment/digital-oscilloscopes/understanding-uart_254524.html#:~:text=UART%20stands%20for%20universal%20asynchronous,and%20receive%20in%20both%20directions.). This is required for translating data coming from a computer to be usable with the microcontroller on the Arduino board
- Digital / Analog IO Pins (Input/output pins)
  - I/O pins are used for connecting peripheral devices such as sensors and actuators
  - Digital pins are used for sending digital logic (0/1 or LOW/HIGH)
  - Analog pins are used to read analog values from peripherals (0-1023)
- Power / VIN / Ground Pins
  - Power - 3.3V and 5V pins are used for powering external components
  - VIN - Voltage-in pin is used for powering an Arduino board from an external power supply
  - GND - Ground pin is used to complete a circuit with a ground level of 0 volts`,
  `Most boards are designed to have a single program running at a time, and that program performs actions synchronously (one action at a time). By writing programs that execute multiple actions in a cycle, you can create increasingly complex behavior.`,
  `Once a program is finished loading to the microcontroller on the Arduino board, the program will begin executing immediately. After removing power, on subsequent power-ups, the loaded program will execute right away. At any time, you can upload a new program onto the microcontroller and update the behavior of the Arduino board.`,
  `# Software`,
  `## Arduino IDE`,
  `To run programs on your Arduino board, you must write a program, compile that program into machine code and send over the machine code to your board, the Arduino IDE facilitates all of this.`,
  `The Arduino IDE is a free, cross-platform application that you can download, or use online to manage all of your code development. There are three Arduino IDEs available:`,
  `- Arduino IDE 1.8.x (legacy editor, first released when Arduino started)
- Arduino IDE 2.0.x (Newer editor released in 2021)
- Arduino Web Editor (A fully online editor usable with a free Arduino account)`,
  `In order to upload code to an Arduino board using the IDE you must complete the following steps:`,
  `1.  Install your board - Install the correct "package" for the board you're using.
2.  Ensure board connection - Correct board and port selected
3.  Create a new sketch - A sketch is your main program file and is the code we want to execute on the microcontroller
4.  Compile your sketch - Check for errors and covert to a binary file (machine code)
5.  Upload your sketch - If the program compiles successfully, you can upload the program to your board`,
  `## Arduino API`,
  `Now that we know how a program is written to the board, how do we write a program? The Arduino API or the "Arduino Programming Language" is a subset of the C/C++ language with additions for easily controlling Arduino hardware. The API can be divided into three main parts:`,
  `- Functions
    - Used to control the Arduino board and perform computations (read/write to a digital output pin)
- Variables
  - Data types (int, boolean, array)
- Structure
  - The elements of the Arduino code (sketch, control structure, arithmetic operations, comparison operations)`,
  `## Sensors, Actuators, and Shields
`,
  `Being able to program an Arduino board is neat and all, but what if we want to connect our board to another device? This is where sensors and actuators come into the mix, they enable the Arduino to sense and respond to changes in its environment.`,
  `### Sensors`,
  `Sensors are devices that can convert a physical change in the environment into an electrical signal that can be read and processed by a microcontroller, like the one on an Arduino board. Some examples of commonly used sensors are temperature, light, proximity, motion, etc...`,
  `### Actuators`,
  `Actuators can take electrical signals and convert them into physical actions. Some common actuators are motors, servos, LEDs, and solenoids.`,
  `### Shields`,
  `An Arduino shield is a printed circuit board designed to be plugged directly into an Arduino board. Shields are a convenient way to add sensors, actuators, and other devices to an Arduino without requiring additional components for wiring such as a breadboard.`,
  `# How to get started`,
  `Getting started with Arduino is relatively straightforward and requires only a few components. Below are some steps on how you can get up and running:`,
  `1.  Purchase an Arduino board - Arduino boards are available in different versions specialized for different tasks. The most popular board for getting started is the Arduino Uno as it's inexpensive, and has an abundant amount of resources
2.  Download the Arduino IDE - The Arduino IDE is available to download for free from the Arduino website
3.  Install the Arduino IDE - After downloading the IDE, follow the instructions for installing the software
4.  Connect your Arduino board - Connect your board using a USB cable. Assuming the cable is capable of sending data, your Arduino board should automatically be recognized by your computer
5.  Write your first program! - Open the Arduino IDE and select File > New to create a new sketch
6.  Verify your program - Click the check mark button to verify there are no bugs in your program, if there are, go back and fix them
7.  Upload your program - Once you've verified the program, upload it to the board and once complete, your Arduino should be running your program
8.  Test - Check to make sure the program is working as expected and all hardware is set up correctly`,
  `Getting up and running with Arduino as a novice is relatively easy and numerous resources are available online.`,
  `# Example project (Blinking an LED)`,
  `Blinking an LED is the "Hello, world" program for Arduino. It's a very simple application, but does a great job showcasing the typical workflow of an Arduino program. Below is a step-by-step guide for getting started:`,
  `Required materials`,
  `- Arduino NANO board (If you have a different board, that will work too)
- LED
- 470-Ω Resistor
- Breadboard
- Computer with Arduino IDE installed
- USB cable`,
  `1.  Set up your hardware - Connect your Arduino board to your computer using the USB cable. Then, connect the circuit as shown below:
2.  Open the Arduino IDE and enter the following code:`,
  "This code sets digital I/O pin 13 of the Arduino nano to OUTPUT mode using the **pinMode()** function in the **setup()** function. In the **loop()** function the **digitalWrite()** function is used to turn the LED on by setting pin 13 to **HIGH**, then the **delay()** function is used to wait for 1000 milliseconds or 1 second, then **digitalWrite()** is used again to set pin 13 to **LOW** followed by another 1-second delay.",
  `3.  Verify the program is error free by clicking the check mark. If there are any bugs, fix them before moving on
4.  Upload the program and when finished uploading, observe the LED blinking with a period of 2 seconds (1 off, 1 on)`,
  `That's it, you've successfully written your first Arduino program! This is a simple but excellent starting point on your journey of building with Arduino.`,
];

export default function Blog() {
  return (
    <Page>
      <div className="flex flex-col w-full h-full items-center gap-8">
        <Header
          title={title}
          category={category}
          coverImg={coverImg}
          published={published}
        />
        <Content content={content} />
      </div>
    </Page>
  );
}
