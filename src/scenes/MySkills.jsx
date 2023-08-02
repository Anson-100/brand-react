import LineGradient from "../components/LineGradient"
import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion"
import pensive from "../assets/blue-shirt-pensive.jpg"

const MySkills = () => {
  const isAboveMediumScrens = useMediaQuery("(min-width: 1060px)")

  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-Franklin font-semibold text-4xl mb-5">
            MY <span className="text-gold">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            I have the skills to pay the bills. Most of my time is spent
            developing my skills and it shows. Because my skills are so legit,
            they are highly sought after and don't come cheap.
          </p>
        </motion.div>
        <div className="mt-16 md:mt-0">
          {isAboveMediumScrens ? (
            <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10  before:w-full  before:h-2/3 before:border-2 before:border-gold before:z-[-1]">
              <img alt="skills" className="z-10 max-w-[300px]" src={pensive} />
            </div>
          ) : (
            <img alt="skills" className="z-10" src={pensive} />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-Bodini font-semibold text-5xl">01</p>
              <p className="font-Bodini font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-sand absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            I draw from my diverse array of past experiences each and every day.
            I am very wise.
          </p>
        </motion.div>
        {/* INNOVATION */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-Bodini font-semibold text-5xl">02</p>
              <p className="font-Bodini font-semibold text-3xl mt-3">
                Innovation
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-airPlant absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            I don't look to reinvent the wheel, I look to reinvent the world so
            wheels are no longer necessary.
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-Bodini font-semibold text-5xl">03</p>
              <p className="font-Bodini font-semibold text-3xl mt-3">
                Imaginative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-paladiumBlue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Because I have so much experience and skills, my creativity knows no
            bounds.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default MySkills
