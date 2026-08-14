
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Letter.css";

function Letter() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <section className="letter-page">

        <AnimatePresence mode="wait">

          {!open ? (

            /* =========================
               ENVELOPE SCREEN
            ========================= */

            <motion.div
              className="envelope-screen"

              initial={{
                opacity: 0,
                scale: 0.9
              }}

              animate={{
                opacity: 1,
                scale: 1
              }}

              exit={{
                opacity: 0,
                scale: 1.08
              }}

              transition={{
                duration: 1
              }}
            >

              <motion.div
                className="letter-heading"

                initial={{
                  opacity: 0,
                  y: -30
                }}

                animate={{
                  opacity: 1,
                  y: 0
                }}

                transition={{
                  delay: 0.4,
                  duration: 1
                }}
              >

                <span>
                  For Two Beautiful Hearts
                </span>

                <h1>
                  A Letter From Us ❤️
                </h1>

                <p>
                  A few words from your daughters...
                </p>

              </motion.div>


              {/* =========================
                  ENVELOPE
              ========================= */}

              <motion.div
                className="envelope"

                initial={{
                  opacity: 0,
                  y: 40
                }}

                animate={{
                  opacity: 1,
                  y: 0
                }}

                transition={{
                  delay: 0.8,
                  duration: 1
                }}
              >

                <div className="envelope-back"></div>

                <div className="envelope-paper">

                  <span>
                    With Love
                  </span>

                  <strong>
                    ❤️
                  </strong>

                </div>

                <div className="envelope-flap"></div>

                <div className="envelope-front"></div>

                <div className="envelope-heart">
                  ❤️
                </div>

              </motion.div>


              {/* =========================
                  OPEN BUTTON
              ========================= */}

              <motion.button
                className="open-letter-btn"

                onClick={() => setOpen(true)}

                initial={{
                  opacity: 0,
                  y: 20
                }}

                animate={{
                  opacity: 1,
                  y: 0
                }}

                transition={{
                  delay: 1.5,
                  duration: 0.8
                }}

                whileHover={{
                  scale: 1.05
                }}

                whileTap={{
                  scale: 0.96
                }}
              >
                Open Letter ❤️
              </motion.button>

            </motion.div>

          ) : (

            /* =========================
               OPENED LETTER
            ========================= */

            <motion.div
              className="opened-letter-screen"

              initial={{
                opacity: 0
              }}

              animate={{
                opacity: 1
              }}

              transition={{
                duration: 1
              }}
            >

              {/* GOLDEN SPARKLES */}

              <div className="letter-sparkles">
                ✦　✧　✦　✧　✦
              </div>


              {/* =========================
                  LETTER
              ========================= */}

              <motion.div
                className="love-letter"

                initial={{
                  opacity: 0,
                  y: 80,
                  scale: 0.9
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1
                }}

                transition={{
                  delay: 0.4,
                  duration: 1.2,
                  ease: "easeOut"
                }}
              >

                <div className="letter-border">

                  <div className="letter-content">

                    <div className="letter-top-heart">
                      ❤️
                    </div>

                    <p className="letter-small">
                      OUR DEAREST
                    </p>

                    <h1>
                      Amma & Daddy
                    </h1>

                    <div className="gold-divider">
                      ✦
                    </div>


                    <p>
                      Twenty-one years ago, two hearts
                      decided to walk through life together.
                      Today, that beautiful journey has become
                      a family filled with love, laughter,
                      memories and countless precious moments.
                    </p>

                    <p>
                      Amma, your love has always been the warmth
                      of our home. Daddy, your strength has always
                      been the foundation of our family.
                    </p>

                    <p>
                      Everything beautiful we have today carries
                      a little piece of both of you.
                    </p>

                    <p>
                      You taught us that love is not just about
                      beautiful moments. It is about standing
                      beside each other through every season of
                      life, holding hands and choosing each other
                      every single day.
                    </p>

                    <p>
                      We are so lucky to call you our parents.
                      Your story is one of the most beautiful
                      stories we will ever know.
                    </p>


                    {/* DATE */}

                    <div className="special-line">
                      27 • 08 • 2005
                    </div>


                    {/* ANNIVERSARY */}

                    <h2>
                      Happy 21st Wedding Anniversary ❤️
                    </h2>

                    <p>
                      May your love continue to grow,
                      your smiles never fade, and your journey
                      together remain beautiful forever.
                    </p>


                    {/* SIGNATURE */}

                    <div className="letter-signature">

                      <span>
                        With all our love,
                      </span>

                      <strong>
                        Suchitra & Gowthami ❤️
                      </strong>

                    </div>

                  </div>

                </div>

              </motion.div>


              {/* =========================
                  FOREVER MESSAGE
              ========================= */}

              <motion.p
                className="forever-message"

                initial={{
                  opacity: 0
                }}

                animate={{
                  opacity: 1
                }}

                transition={{
                  delay: 1.8,
                  duration: 1
                }}
              >
                Some love stories are meant to last forever. ❤️
              </motion.p>


              {/* =========================
                  CONTINUE TO FINAL
              ========================= */}

              <motion.button
                className="continue-forever-btn"

                onClick={() => navigate("/final")}

                initial={{
                  opacity: 0,
                  y: 20
                }}

                animate={{
                  opacity: 1,
                  y: 0
                }}

                transition={{
                  delay: 2.4,
                  duration: 1
                }}

                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 0 35px rgba(220,175,70,0.45)"
                }}

                whileTap={{
                  scale: 0.96
                }}
              >
                Continue to Forever ❤️
              </motion.button>

            </motion.div>

          )}

        </AnimatePresence>

      </section>
    </>
  );
}

export default Letter;
