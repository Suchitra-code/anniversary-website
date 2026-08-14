import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import "../styles/Wedding.css";

function Wedding() {
  return (
    <>
      <Navbar />

      <section className="wedding-page">
        <div className="sparkles">
  <span>✨</span>
  <span>✨</span>
  <span>✨</span>
  <span>✨</span>
  <span>✨</span>
</div>

<div className="floating-hearts">
  <span>❤️</span>
  <span>🤍</span>
  <span>❤️</span>
  <span>💛</span>
  <span>❤️</span>
</div>

        {/* TITLE */}

        <motion.div
          className="wedding-title"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <h1>💍 The Beginning of Forever</h1>

          <h2>27 • 08 • 2005</h2>

          <p>
            A beautiful journey of love, trust and togetherness began ❤️
          </p>

        </motion.div>



        {/* PARENTS MEMORY */}

        <motion.div
          className="parents-memory"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <motion.div
            className="parent-card"
            whileHover={{ scale: 1.05 }}
          >

            <img 
              src="/daddy2.jpg"
              alt="Daddy Memory"
            />

            <h3>❤️ The Handsome Groom</h3>

            <p>
              A new journey was about to begin...
            </p>

          </motion.div>



          <motion.div
            className="parent-card"
            whileHover={{ scale: 1.05 }}
          >

            <img 
              src="/amma2.jpg"
              alt="Amma Memory"
            />

            <h3>❤️ The Beautiful Bride</h3>

            <p>
              The beginning of a beautiful forever...
            </p>

          </motion.div>

        </motion.div>




        {/* MAIN WEDDING PHOTO */}

        <motion.div
          className="main-wedding-card"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >

          <img
            src="/wedding.jpg"
            alt="Wedding Memory"
          />

          <h2>❤️ Our Wedding Day</h2>

          <p>
            27 August 2005 — A day where two hearts became one ✨
          </p>

        </motion.div>




        {/* RING GALLERY */}

        <div className="ring-gallery">


          <motion.div
            className="ring-card"
            whileHover={{ scale: 1.05 }}
          >

            <img 
              src="/ring1.jpg"
              alt="Ring Memory"
            />

            <h3>💍 A Promise Made</h3>

            <p>
              Two hearts, one beautiful promise ❤️
            </p>

          </motion.div>



          <motion.div
            className="ring-card"
            whileHover={{ scale: 1.05 }}
          >

            <img 
              src="/ring2.jpg"
              alt="Ring Memory"
            />

            <h3>✨ A New Chapter</h3>

            <p>
              Forever started with this magical moment ❤️
            </p>

          </motion.div>


        </div>




        {/* FINAL MESSAGE */}

        <motion.div
          className="wedding-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >

          <p>
            "Two souls became one,
            and a lifetime of memories was created." ❤️
          </p>

        </motion.div>


      </section>
    </>
  );
}

export default Wedding;