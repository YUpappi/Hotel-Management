import PropTypes from "prop-types";
import { motion } from "framer-motion";

function FeatureCard({ icon, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -12, scale: 1.05 }}
      className="w-[90%] bg-gray-100 border border-gray-300 rounded-[20px] shadow-lg p-6 text-center transition duration-300"
    >
      <div className="text-amber-700 mb-4 flex justify-center">{icon}</div>
      <h3 className="text-gray-900 text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] mb-2 font-serif text-amber-700 ">
        {title}
      </h3>
      <p className="text-gray-600 text-[1.5rem] opacity-90 leading-relaxed mb-5">
        {desc}
      </p>
    </motion.div>
  );
}

export default FeatureCard;

FeatureCard.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  desc: PropTypes.string,
};
