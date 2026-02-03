// src/components/Hero.tsx
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Download, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import logo from '../asset/portfolio logo.png';

// Floating orb component
const Orb = ({ size = 200, color = "rgba(59,130,246,0.3)", x = 0, y = 0, speed = 20 }) => (
  <motion.div
    className="absolute rounded-full"
    style={{ width: size, height: size, background: color, top: y, left: x }}
    animate={{ x: [0, speed, -speed, 0], y: [0, -speed, speed, 0] }}
    transition={{ duration: 15 + Math.random() * 10, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
  />
);

export const Hero = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-500 flex items-center justify-center px-6 md:px-12">
    

      {/* Floating Orbs */}
      <Orb size={300} color="rgba(59,130,246,0.4)" x={50} y={100} speed={30} />
      <Orb size={200} color="rgba(16,185,129,0.3)" x={500} y={200} speed={20} />
      <Orb size={250} color="rgba(239,68,68,0.2)" x={200} y={400} speed={25} />
      <Orb size={150} color="rgba(168,85,247,0.3)" x={700} y={100} speed={15} />

      {/* Main content: Two columns */}
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-7xl items-center md:items-start gap-10">

        {/* Left Column */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-light mb-2 text-gray-700 dark:text-gray-300">
            Hello, I'm
          </h2>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            Zainab
          </h1>

          <TypeAnimation
            sequence={[
              "Aspiring Java Developer", 2000,
              "AI/ML Enthusiast", 2000,
            ]}
            wrapper="h3"
            cursor={true}
            repeat={Infinity}
            className="text-blue-500 dark:text-blue-400 font-semibold text-2xl md:text-3xl mb-6"
          />

          {/* Resume & Social Icons */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mb-6">
            <a
              href="https://drive.google.com/file/d/1UTJt6uWv4FQ_6NJhmjc-5_E7sQNQ4CpC/view?usp=drive_link"
              download
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition"
            >
              <Download size={20} /> Resume
            </a>
            <a
              href="https://github.com/ZainabNisa"
              target="_blank"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
            >
              <Github size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/zainab-nisa-j-32b87b275/"
              target="_blank"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
            >
              <Linkedin size={30} />
            </a>
          </div>

          {/* Unique Quote */}
          <TypeAnimation
            sequence={[
              "Turning complexity into intelligent simplicity.", 5000,
            ]}
            wrapper="p"
            cursor={true}
            repeat={Infinity}
            className="italic text-gray-600 dark:text-gray-400 text-lg md:text-xl"
          />
        </div>

        {/* Right Column: Technical Java-like code */}
        <div className="flex-1 w-full max-w-md">
          <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg px-6 py-6 font-mono text-left shadow-xl overflow-x-auto">
            <TypeAnimation
              sequence={[
                `public class Skills {\n  public static void main(String[] args) {\n    String[] skills = {"Java", "Spring Boot", "MySQL", "C#", "React(Basics)"};\n    for(String skill : skills) {\n      System.out.println(skill);\n    }\n  }\n}`, 5000,
              ]}
              
              cursor={true}
              repeat={Infinity}
              className="whitespace-pre-wrap"
            />
          </div>
        </div>

      </div>
    </section>
  );
};