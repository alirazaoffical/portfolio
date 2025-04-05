import React from "react";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      {/* Hero Section */}
      <section className="text-center py-20">
        <div className="flex flex-col items-center">
          <Image
            src="/profile.jpg" 
            alt="Ali Raza"
            width={150}
            height={150}
            className="rounded-full border-4 border-blue-400 shadow-lg"
          />
          <h1 className="text-5xl font-extrabold text-blue-400 mt-4">Hi, I&apos;m Ali Raza</h1>

          <p className="text-xl mt-4 text-gray-300">MERN Stack Developer</p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["React", "Tailwind CSS", "Next.js", "React Native", "Firebase", "Firestore"].map((tech) => (
            <span
              key={tech}
              className="bg-gray-800 px-6 py-2 rounded-lg text-gray-200 shadow-md hover:bg-blue-500 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "E-commerce Website", description: "A full-stack MERN application for online shopping." },
            { title: "Portfolio Website", description: "A personal portfolio built with Next.js and Tailwind." },
            { title: "Memes app", description: "Memes app with Next.js and Tailwind." },
            { title: "Online Cab app", description: "Online cab app with React Native." }
          ].map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold text-blue-300">{project.title}</h3>
              <p className="mt-2 text-gray-400">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-400">Get in Touch</h2>
        <p className="text-lg text-gray-300">Email: <a href="mailto:ar93090@gmail.com" className="text-blue-300 hover:underline">ar93090@gmail.com</a></p>
        <p className="text-lg text-gray-300 mt-2">LinkedIn: <a href="https://linkedin.com/in/ali-raza" className="text-blue-300 hover:underline">linkedin.com/in/ali-raza</a></p>
      </section>
    </div>
  );
};

export default Portfolio;
