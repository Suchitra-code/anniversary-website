import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Invitation.css";

function Invitation() {
  const navigate = useNavigate();

  return (
    <div className="page">

      <Navbar />

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        📜 Wedding Invitation
      </motion.h2>

      <motion.p
        className="quote"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Every beautiful love story has a beautiful beginning...
      </motion.p>

      <div className="cards">

        <motion.img
          src="/invitation1.jpg"
          alt="Invitation 1"
          className="card-img"
        />

        <motion.img
          src="/invitation2.jpg"
          alt="Invitation 2"
          className="card-img"
        />

      </div>

      <h3
        style={{
          color: "#FFD700",
          textAlign: "center",
          marginTop: "25px"
        }}
      >
        💛 27 August 2005 💛
      </h3>

      <p className="quote">
        The day two beautiful hearts became one.
        <br />
        And a beautiful family journey began ❤️
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
          marginBottom: "60px"
        }}
      >
        <button
          onClick={() => navigate("/parents")}
          style={{
            padding: "15px 40px",
            backgroundColor: "gold",
            color: "black",
            border: "none",
            borderRadius: "30px",
            fontSize: "20px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Next ❤️
        </button>
      </div>

    </div>
  );
}

export default Invitation;