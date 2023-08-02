import LineGradient from "../components/LineGradient"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"

import cowboyFront from "../assets/cowboy-front-serious.jpg"

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm()

  const onSubmit = async e => {
    const isValid = await trigger()
    if (!isValid) {
      e.preventDefault()
    }
  }

  return (
    <section id="contact" className="py-48">
      {/* HEADINGS */}
      <motion.div
        className="flex justify-end w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        {" "}
        <div>
          <p className="font-Franklin font-semibold text-4xl">
            <span className="text-gold">CONTACT ME</span> TO GET STARTED
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>
      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          className="basis-1/2 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img src={cowboyFront} className="max-w-[300px]" alt="cowboyFront" />
        </motion.div>
        <motion.div
          className="basis-1/2 mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/c77e070b8fe323830e7325f2b3311ae3"
            method="POST"
          >
            <input
              className="w-full bg-airPlant font-semibold placeholder-black p-3"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-gold mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}
            <input
              className="w-full bg-airPlant font-semibold placeholder-black p-3 mt-5"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-gold mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}
            <textarea
              className="w-full bg-airPlant font-semibold placeholder-black p-3 mt-5"
              type="text"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-gold mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "pattern" &&
                  "Max length is 2000 char."}
              </p>
            )}
            <button
              type="submit"
              className="p-5 bg-purple font-semibold text-gold mt-5 hover:bg-paladiumBlue hover:text-white transition duration-500"
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
