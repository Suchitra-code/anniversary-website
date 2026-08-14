import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Timeline.css";

function Timeline() {

  const [step, setStep] = useState(0);

  useEffect(() => {
    const times = [
      setTimeout(() => setStep(1), 1500),
      setTimeout(() => setStep(2), 4000),
      setTimeout(() => setStep(3), 6500),
      setTimeout(() => setStep(4), 9000),
      setTimeout(() => setStep(5), 11500),
      setTimeout(() => setStep(6), 14000),
    ];

    return () => times.forEach(clearTimeout);
  }, []);

  return (
    <section className="timeline">

      <h1 className="title">❤️ Our Beautiful Journey ❤️</h1>

      <p className="subtitle">
        A Timeline of Love, Laughter & Memories
      </p>
      
      <div className="lights">
  <span className="light l1"></span>
  <span className="light l2"></span>
  <span className="light l3"></span>
  <span className="light l4"></span>
  <span className="light l5"></span>
  <span className="light l6"></span>
  <span className="light l7"></span>
  <span className="light l8"></span>
  <span className="light l9"></span>
  <span className="light l10"></span>
</div>
<div className="hearts">
  <span className="heart h1">❤️</span>
  <span className="heart h2">❤️</span>
  <span className="heart h3">💛</span>
  <span className="heart h4">❤️</span>
  <span className="heart h5">💛</span>
  <span className="heart h6">❤️</span>
</div>

      <AnimatePresence>

        {step === 1 && (
          <motion.div
            className="story-card"
            initial={{ opacity:0,x:-150 }}
            animate={{ opacity:1,x:0 }}
            exit={{ opacity:0,x:150 }}
          >
            <img src="/wedding.jpg" />
            <h2>❤️ 27 August 2005</h2>
            <h3>The Beginning of Forever</h3>
            <p>Two hearts became one and a beautiful journey began...</p>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            className="story-card"
            initial={{ opacity:0,x:150 }}
            animate={{ opacity:1,x:0 }}
            exit={{ opacity:0,x:-150 }}
          >
            <img src="/daughter1.jpg" />
            <h2>👧 01 December 2006</h2>
            <h3>Our First Blessing</h3>
            <p>A little princess filled our lives with endless joy.</p>
            <h4 className="baby-name">Suchitra ❤️</h4>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            className="story-card"
            initial={{ opacity:0,x:-150 }}
            animate={{ opacity:1,x:0 }}
            exit={{ opacity:0,x:150 }}
          >
            <img src="/daughter2.jpg" />
            <h2>👧 11 October 2008</h2>
            <h3>Our Second Blessing</h3>
            <p>Another little angel made our family complete.</p>
           <h4 className="baby-name">Gowthami ❤️</h4>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div
            className="story-card"
            initial={{ opacity:0,x:150 }}
            animate={{ opacity:1,x:0 }}
            exit={{ opacity:0,x:-150 }}
          >
            <img src="/family.jpg" />
            <h2>🏡 Beautiful Family</h2>
            <h3>Through The Years</h3>
            <p>Built with love, care and beautiful memories.</p>
          </motion.div>
        )}

        {step === 5 && (
          <motion.div
            className="story-card"
            initial={{ opacity:0,x:-150 }}
            animate={{ opacity:1,x:0 }}
            exit={{ opacity:0,x:150 }}
          >
            <img src="/anniversary.jpg" />
            <h2>❤️ 27 August 2026</h2>
            <h3>21 Years of Togetherness</h3>
            <p>21 beautiful years filled with love and happiness.</p>
          </motion.div>
        )}

        {step === 6 && (
          <motion.div
            className="story-card"
            initial={{ opacity:0,scale:.5 }}
            animate={{ opacity:1,scale:1 }}
          >
            <h1>THANK U ❤️</h1>
            <p>We Love You Amma & Daddy ❤️</p>
          </motion.div>
        )}

      </AnimatePresence>

    </section>
  );
}

export default Timeline;