import ContactForm from "./ContactForm"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-2xl mx-auto"
      >
        {/* Glass card */}
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12">
          {/* Header */}
          <div className="flex flex-col gap-2 mb-8 text-center">
            <span className="text-xs tracking-[0.2em] uppercase text-orange-text">Contact</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              {"Let's Work Together"}
            </h2>
            <p className="text-white/50 text-sm mt-2">
              Have a project in mind? {"I'd"} love to hear about it.
            </p>
          </div>

          <ContactForm />
        </div>
      </motion.div>
    </div>
  )
}

export default Contact
