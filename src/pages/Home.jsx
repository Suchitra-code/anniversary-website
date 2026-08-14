import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Home.css";

function Home() {

  const navigate = useNavigate();

  return (

    <div className="page">

      <Navbar />

      <motion.p
        className="special-day"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        ✨ A Special Day... ✨
      </motion.p>

      <motion.h1
        className="title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <span>Celebrating</span>

        <span className="gold">
          21 Glorious Years
        </span>

        <span>of Love ❤️</span>
      </motion.h1>

           <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/invitation")}
      >
        Start Journey ❤️
      </motion.button>

    </div>

  );
}

export default Home;