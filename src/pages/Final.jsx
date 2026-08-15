
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/final.css";

function Final() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <section className="final-page">

        {/* =========================
            FLOATING HEARTS
        ========================= */}

        <div className="final-hearts">
          <span>❤️</span>
          <span>♡</span>
          <span>❤️</span>
          <span>✦</span>
          <span>♡</span>
          <span>❤️</span>
        </div>


        {/* =========================
            MAIN CONTENT
        ========================= */}

        <motion.div
          className="final-content"

          initial={{
            opacity: 0,
            y: 40
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 1.2
          }}
        >


          {/* SMALL TITLE */}

          <motion.p
            className="final-small-title"

            initial={{
              opacity: 0
            }}

            animate={{
              opacity: 1
            }}

            transition={{
              delay: 0.4
            }}
          >
            A LOVE STORY WORTH CELEBRATING
          </motion.p>


          {/* MAIN TITLE */}

          <motion.h1
            initial={{
              opacity: 0,
              scale: 0.9
            }}

            animate={{
              opacity: 1,
              scale: 1
            }}

            transition={{
              delay: 0.7,
              duration: 1
            }}
          >
            21 Years Down...
          </motion.h1>


          {/* SUB TITLE */}

          <motion.h2
            initial={{
              opacity: 0
            }}

            animate={{
              opacity: 1
            }}

            transition={{
              delay: 1.1
            }}
          >
            Forever To Go ❤️
          </motion.h2>


          {/* DIVIDER */}

          <div className="final-divider">
            <span>✦</span>
            <div></div>
            <span>❤️</span>
            <div></div>
            <span>✦</span>
          </div>


          {/* =========================
              FAMILY PHOTO
          ========================= */}

          <motion.div
            className="final-photo-frame"

            initial={{
              opacity: 0,
              scale: 0.85
            }}

            animate={{
              opacity: 1,
              scale: 1
            }}

            transition={{
              delay: 1.4,
              duration: 1
            }}
          >

            <div className="final-photo-inner">

              <img
                src="/gallery/family/family3.jpg"
                alt="Our Beautiful Family"
              />

            </div>


            <div className="photo-corner top-left"></div>

            <div className="photo-corner top-right"></div>

            <div className="photo-corner bottom-left"></div>

            <div className="photo-corner bottom-right"></div>

          </motion.div>


          {/* =========================
              DATE
          ========================= */}

          <motion.div
            className="final-date"

            initial={{
              opacity: 0,
              letterSpacing: "2px"
            }}

            animate={{
              opacity: 1,
              letterSpacing: "6px"
            }}

            transition={{
              delay: 1.8,
              duration: 1
            }}
          >
            27 • 08 • 2005
          </motion.div>


          {/* =========================
              FINAL MESSAGE
          ========================= */}

          <motion.p
            className="final-message"

            initial={{
              opacity: 0,
              y: 20
            }}

            animate={{
              opacity: 1,
              y: 0
            }}

            transition={{
              delay: 2.1,
              duration: 1
            }}
          >
            Twenty-one beautiful years of love,
            laughter, togetherness and memories.

            <br />

            And this is only another chapter
            of your beautiful forever.
          </motion.p>


          {/* =========================
              LOVE MESSAGE
          ========================= */}

          <motion.p
            className="final-love-message"

            initial={{
              opacity: 0
            }}

            animate={{
              opacity: 1
            }}

            transition={{
              delay: 2.6,
              duration: 1
            }}
          >
            Thank you for showing us what

            <br />

            <strong>
              true love looks like.
            </strong>
          </motion.p>


          {/* =========================
              FOREVER TEXT
          ========================= */}

          <motion.div
            className="forever-text"

            initial={{
              opacity: 0,
              scale: 0.8
            }}

            animate={{
              opacity: 1,
              scale: 1
            }}

            transition={{
              delay: 3,
              duration: 1
            }}
          >
            Forever & Always

            <span>
              ❤️
            </span>
          </motion.div>


          {/* =========================
              DAUGHTERS SIGNATURE
          ========================= */}

          <motion.p
            className="daughters-signature"

            initial={{
              opacity: 0
            }}

            animate={{
              opacity: 1
            }}

            transition={{
              delay: 3.4
            }}
          >
            With endless love,

            <br />

            <strong>
              Suchitra & Gowthami
            </strong>
          </motion.p>


          {/* =========================
              REPLAY BUTTON
          ========================= */}

          <motion.button
            className="replay-btn"

            onClick={() => navigate("/")}

            initial={{
              opacity: 0,
              y: 20
            }}

            animate={{
              opacity: 1,
              y: 0
            }}

            transition={{
              delay: 3.8
            }}

            whileHover={{
              scale: 1.05,

              boxShadow:
                "0 0 35px rgba(220,175,70,0.45)"
            }}

            whileTap={{
              scale: 0.95
            }}
          >
            ↻ &nbsp; Replay Our Journey
          </motion.button>


        </motion.div>


        {/* =========================
            BOTTOM GLOW
        ========================= */}

        <div className="final-bottom-glow"></div>


      </section>
    </>
  );
}

export default Final;

