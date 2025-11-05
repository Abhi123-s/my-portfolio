import React from "react";
import ThemeToggle from "./components/ThemeToggle";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { motion } from "framer-motion";

const fadeUp = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-cream dark:bg-slate-900 transition-colors">
      {/* NAV / HERO */}
      <header className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="text-xl font-bold text-indigo-700 dark:text-indigo-300">Abhinand R Nair</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">MERN Stack Developer</div>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/Abhi123-s" target="_blank" rel="noreferrer" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">GitHub</a>
          <a href="https://linkedin.com/in/abhinand-r-nair-128604222" target="_blank" rel="noreferrer" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">LinkedIn</a>
          <ThemeToggle />
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="py-12">
            <motion.h1 initial="hidden" animate="visible" variants={fadeUp} transition={{delay:0.05}} className="text-4xl md:text-5xl font-extrabold text-white dark:text-white leading-tight">
               Full Stack Developer specializing in the  
           <span className="text-indigo-300"> MERN</span>  stack
            </motion.h1>

            <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{delay:0.15}} className="mt-6 text-gray-200 max-w-xl">
              with a focus on
          building efficient, maintainable, and high-quality web applications.
          Passionate about creating performant and scalable digital experiences.  
            </motion.p>

            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{delay:0.25}} className="mt-8 flex gap-4">
             <Button
  onClick={() => {
    const section = document.getElementById("projects");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  }}
  className="bg-indigo-600 hover:scale-105 text-white transform-gpu"
>
  View Projects
</Button>


              <Button
                href="https://mail.google.com/mail/?view=cm&fs=1&to=abhinandrnair22@gmail.com&su=Let's%20connect&body=Hi%20Abhinand"
                target="_blank"
                rel="noreferrer"
                className="bg-white/90 text-indigo-700 hover:scale-105"
              >
                Contact Me
              </Button>
            </motion.div>
          </div>

          {/* Hero image */}
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{delay:0.3}} className="flex justify-center md:justify-end">
            <div className="w-72 h-96 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/10">
              <img src="/profile.jpg" alt="Abhinand" className="object-cover w-full h-full" />
            </div>
          </motion.div>
        </div>

        <div className="mt-10 border-t border-white/5"></div>
      </section>

      {/* SERVICES / SKILLS */}
      <section className="container mx-auto px-6 py-12">
        <motion.h2
  initial="hidden"
  animate="visible"
  variants={fadeUp}
  className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
>
  Skills
</motion.h2>


        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Frontend", desc: "React, HTML, CSS , Javascript , Responsive UI" },
            { title: "Backend", desc: "Node.js, Express, Python, REST APIs, JWT" },
            { title: "Database", desc: "MongoDB, Mongoose, Mysql, Aggregation" }
          ].map((s) => (
            <motion.div key={s.title} initial="hidden" animate="visible" variants={fadeUp} className="bg-white/5 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-indigo-300">{s.title}</h3>
              <p className="mt-3 text-gray-200">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
     <section id="projects" className="container mx-auto px-6 py-12">
  <motion.h2
    initial="hidden"
    animate="visible"
    variants={fadeUp}
    className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
  >
    Projects
  </motion.h2>

  <div className="grid md:grid-cols-2 gap-6">
    {/* GYMNASIUM */}
    <Card className="bg-white/5 rounded-2xl text-center py-10 hover:scale-[1.02] transition-transform duration-300">
      <CardContent>
        <h3 className="text-2xl font-bold text-indigo-300 mb-3">GYMNASIUM Fitness Platform</h3>
        <p className="text-gray-300 max-w-md mx-auto">
          A Full Stack MERN web app that allows users to manage workouts, authentication with JWT, and CRUD operations using Node.js, Express, and MongoDB.
        </p>
        <div className="mt-5">
          <a
            href="https://github.com/Abhi123-s/fitness-app"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:scale-105 transition"
          >
            View Source
          </a>
        </div>
      </CardContent>
    </Card>

    {/* MOVIE EXPLORER */}
    <Card className="bg-white/5 rounded-2xl text-center py-10 hover:scale-[1.02] transition-transform duration-300">
      <CardContent>
        <h3 className="text-2xl font-bold text-indigo-300 mb-3">Movie Explorer</h3>
        <p className="text-gray-300 max-w-md mx-auto">
          A React-based application using the TMDB API to browse and search for movies, with responsive design and efficient state management via Context API.
        </p>
        <div className="mt-5">
          <a
            href="https://github.com/Abhi123-s/movie-project"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:scale-105 transition"
          >
            View Source
          </a>
        </div>
      </CardContent>
    </Card>
  </div>
</section>


      {/* ABOUT */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3
  className="text-4xl font-extrabold  mb-10 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
>
  About Me
</h3>

            <p className="mt-4 text-gray-200">Full Stack Developer specializing in MERN stack. I previously worked as a Civil Engineer and transitioned to software development by building multiple web projects. I enjoy building reusable components and improving performance.</p>
            <div className="mt-6">
              <a href="/resume.pdf" download className="px-4 py-2 rounded-md bg-white/90 text-indigo-700">Download Resume</a>
            </div>
          </div>

          <div>
            <div className="bg-white/5 p-6 rounded-2xl">
              <h4 className="text-xl font-semibold text-indigo-300">Contact</h4>
              <p className="text-gray-200 mt-2">Email : abhinandrnair22@gmail.com</p>
              <p className="text-gray-200 mt-1">Phone : +91 8281337639</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 mt-8 border-t border-white/5">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <div className="mb-3">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=abhinandrnair22@gmail.com" target="_blank" rel="noreferrer" className="hover:underline">abhinandrnair22@gmail.com</a>
          </div>
          <div>© {new Date().getFullYear()} Abhinand R Nair. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
