import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import "../styles/Parents.css";

function Parents(){

  return(
    <div className="page">

      <Navbar />

      <motion.h2
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1}}
      >
        ❤️ Our Beautiful Family ❤️
      </motion.h2>


      <div className="parents-cards">


        <motion.img
          src="/daddy.jpg"
          className="parent-img"
          alt="Daddy"
          initial={{x:-100, opacity:0}}
          animate={{x:0, opacity:1}}
          transition={{duration:1}}
        />


        <motion.img
          src="/amma.jpg"
          className="parent-img"
          alt="Amma"
          initial={{x:100, opacity:0}}
          animate={{x:0, opacity:1}}
          transition={{duration:1}}
        />


        <motion.img
          src="/wedding.jpg"
          className="parent-img"
          alt="Wedding"
          initial={{scale:0}}
          animate={{scale:1}}
          transition={{duration:1}}
        />


      </div>


      <motion.p
        className="quote"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1}}
      >
        ❤️ The love story that created our beautiful family ❤️
      </motion.p>


    </div>
  )
}

export default Parents;