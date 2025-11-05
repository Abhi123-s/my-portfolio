import { motion } from "framer-motion";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

export default function Portfolio() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-100 text-gray-800 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-24 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-indigo-700"
        >
          Abhinand R Nair
        </motion.h1>
        <p className="text-lg md:text-2xl text-indigo-500 mb-6">
          Full Stack Developer | MERN Stack
        </p>
        <p className="text-gray-600 max-w-2xl mb-6">
          Full Stack Developer specializing in the MERN stack with a focus on
          building efficient, maintainable, and high-quality web applications.
          Passionate about creating performant and scalable digital experiences.
        </p>
        <div className="flex gap-4">
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=abhinandrnair22@gmail.com&su=Let's Connect&body=Hi Abhinand,"
  target="_blank"
  rel="noopener noreferrer"
  className="px-5 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition cursor-pointer"
>
  Contact Me
</a>

  <a
    href="/resume.pdf"
    download
    className="px-5 py-2 bg-gray-200 text-indigo-700 rounded-lg shadow-md hover:bg-gray-300 transition cursor-pointer"
  >
    Download Resume
  </a>
</div>

      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 bg-white text-center shadow-md">
        <h2 className="text-3xl font-semibold mb-8 text-indigo-700">
          Technical Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-3 text-gray-700">
          {[
            "JavaScript",
            "Python",
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "MySQL",
            "REST APIs",
            "Git",
            "Postman",
            "JWT",
            "Agile",
            "SDLC",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-indigo-100 px-4 py-2 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8 text-indigo-700">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card className="bg-white shadow-lg text-left border border-indigo-100">
            <CardContent>
              <h3 className="text-2xl font-bold mb-2 text-indigo-700">
                GYMNASIUM Fitness Platform
              </h3>
              <p className="text-gray-600 mb-2">
                Full Stack Developer | Node.js, Express.js, MongoDB, JWT
              </p>
              <ul className="list-disc ml-6 text-gray-500 text-sm">
                <li>Developed backend modules following SDLC best practices.</li>
                <li>Implemented JWT authentication and CRUD operations.</li>
                <li>Conducted API integration tests using Postman.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg text-left border border-indigo-100">
            <CardContent>
              <h3 className="text-2xl font-bold mb-2 text-indigo-700">
                Movie Explorer Web Application
              </h3>
              <p className="text-gray-600 mb-2">
                Frontend Developer | React.js, TMDB API, Context API
              </p>
              <ul className="list-disc ml-6 text-gray-500 text-sm">
                <li>Designed responsive UI and integrated third-party APIs.</li>
                <li>Handled structured debugging and performance optimization.</li>
                <li>Developed reusable React components for scalability.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-6 bg-indigo-50 text-center">
        <h2 className="text-3xl font-semibold mb-8 text-indigo-700">
          Certifications
        </h2>
        <div className="flex flex-col items-center gap-2 text-gray-700">
          <p>Full Stack Web Development (MERN Stack) – UNSTOP</p>
          <p>Node.js and Express.js Specialization</p>
          <p>Intel AI Aware Badge</p>
          <p>Generative AI Masterclass – OUTSKILL</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-700">
          Get in Touch
        </h2>
        <p className="text-gray-600 mb-6">
          Let's connect and build something great together!
        </p>
        <div className="flex justify-center gap-6 text-indigo-600 font-medium">
           <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=abhinandrnair22@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-indigo-800 transition"
      >
        Email
      </a>
          <a
            href="https://linkedin.com/in/abhinand-r-nair-128604222"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-800 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Abhi123-s"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-800 transition"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm bg-gradient-to-r from-indigo-100 to-purple-100 border-t border-indigo-200">
        © {new Date().getFullYear()} Abhinand R Nair. All rights reserved.
      </footer>
    </div>
  );
}
