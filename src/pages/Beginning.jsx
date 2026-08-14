import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Beginning.css";

function Beginning() {

  const navigate = useNavigate();

  return (

    <div className="page">

      <Navbar />

      <motion.p
        className="story"
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ duration:1 }}
      >
        ✨ Every beautiful love story has a beginning...
      </motion.p>

      <motion.img
        src="/invitation1.jpg"
        alt="Wedding Invitation"
        className="invitation"
        initial={{ opacity:0, scale:0.9 }}
        animate={{ opacity:1, scale:1 }}
        transition={{ duration:1.5 }}
      />

      <motion.button
        whileHover={{ scale:1.05 }}
        whileTap={{ scale:0.95 }}
        onClick={() => navigate("/invitation")}
      >
        📖 Open Invitation
      </motion.button>

    </div>

  );

}

export default Beginning;