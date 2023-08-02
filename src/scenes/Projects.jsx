import LineGradient from "../components/LineGradient"
import { motion } from "framer-motion"
import project1 from "../assets/project-1.jpeg"
import project2 from "../assets/project-2.jpeg"
import project3 from "../assets/project-3.jpeg"
import project4 from "../assets/project-4.jpeg"
import project5 from "../assets/project-5.jpeg"
import project6 from "../assets/project-6.jpeg"
import project7 from "../assets/project-7.jpeg"

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
}

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}

const Project = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-airPlant z-30 flex flex-col justify-center items-center text-center p-16 text-gold`

  let imageSrc
  switch (title) {
    case "Project 1":
      imageSrc = project1
      break
    case "Project 2":
      imageSrc = project2
      break
    case "Project 3":
      imageSrc = project3
      break
    case "Project 4":
      imageSrc = project4
      break
    case "Project 5":
      imageSrc = project5
      break
    case "Project 6":
      imageSrc = project6
      break
    case "Project 7":
      imageSrc = project7
      break
    default:
      // Set a fallback image source in case the title doesn't match any image
      imageSrc = project1
  }

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">I'll figure out what I want here later.</p>
      </div>
      <img src={imageSrc} alt={imageSrc} />
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-Franklin font-semibold text-4xl">
            <span className="text-gold">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>

        <LineGradient width="w-1/3" />
        <p className="mt-10 mb-10">
          Feast your eyes on this small selection of my many projects.
        </p>
      </motion.div>
      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {/* ROW 1 */}
          <div className="flex justify-center text-center items-center p-10 bg-gold max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            BEAUTIFUL USER INTERFACES
          </div>

          <Project title="Project 1" />
          <Project title="Project 2" />
          {/* ROW 2 */}
          <Project title="Project 3" />
          <Project title="Project 4" />
          <Project title="Project 5" />
          {/* ROW 3 */}
          <Project title="Project 6" />
          <Project title="Project 7" />
          <div className="flex justify-center text-center items-center p-10 bg-paladiumBlue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
