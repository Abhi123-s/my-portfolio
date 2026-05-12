import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import ComingSoonProject from "./ComingSoonProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ProjectsMain = () => {
  return (
    <div
      id="projects"
      className="w-full max-w-screen-xl mx-auto px-2 sm:px-4 py-10 sm:py-20"
    >
      <motion.div
        variants={fadeIn("top", 0.05)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>

      <div className="flex flex-col gap-20 sm:gap-32 w-full max-w-6xl mx-auto mt-16">
        <motion.div
          variants={fadeIn("right", 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
        >
          <SingleProject
            name="AI-Integrated Patient Pathway Platform"
            year="2025 - 2026"
            align="right"
            image="/images/website-img-1.jpg"
            link="#"
            hideDemo={true}
          />
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
        >
          <SingleProject
            name="AI Social Media Content Generator"
            year="2025"
            align="left"
            image="/images/wesite.png"
            link="https://ai-saas-app-3a5y.vercel.app/"
          />
        </motion.div>

        <motion.div
          variants={fadeIn("right", 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
        >
          <SingleProject
            name="Movie Explorer Web App"
            year="2025"
            align="right"
            image="/images/vite-project-05-12-2026_11_05_AM.png"
            link="https://movie-project-phi-three.vercel.app/"
          />
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn("up", 0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="mt-20"
      >
        <ComingSoonProject />
      </motion.div>
    </div>
  );
};

export default ProjectsMain;