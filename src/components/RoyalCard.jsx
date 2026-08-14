import { motion } from "framer-motion";

function RoyalCard({ image, title, heading, text, name }) {
  return (
    <motion.div
      className="story-card"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="corner tl"></div>
      <div className="corner tr"></div>
      <div className="corner bl"></div>
      <div className="corner br"></div>

      <div className="card-top">
        <span>❦</span>
        <span>❤</span>
        <span>❦</span>
      </div>

      <img src={image} alt={heading} />

      <h2>{title}</h2>

      <h3>{heading}</h3>

      <p>{text}</p>

      {name && <h4 className="baby-name">{name}</h4>}

      <div className="card-bottom">
        <span>❦</span>
        <span>❤</span>
        <span>❦</span>
      </div>
    </motion.div>
  );
}

export default RoyalCard;