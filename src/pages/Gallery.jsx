
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Gallery.css";

function Gallery() {

  // =====================================================
  // WEDDING PHOTOS - 7
  // =====================================================

  const weddingPhotos = [
    "/gallery/Weeding/weeding1.jpg",
    "/gallery/Weeding/weeding2.jpg",
    "/gallery/Weeding/weeding3.jpg",
    "/gallery/Weeding/weeding4.jpg",
    "/gallery/Weeding/weeding5.jpg",
    "/gallery/Weeding/weeding6.jpg",
    "/gallery/Weeding/weeding7.jpg",
  ];

  // =====================================================
  // RING PHOTOS - 2
  // =====================================================

  const ringPhotos = [
    "/gallery/rings/rings1.jpg",
    "/gallery/rings/rings2.jpg",
  ];

  // =====================================================
  // FAMILY PHOTOS - 4
  // =====================================================

  const familyPhotos = [
    "/gallery/family/family1.jpg",
    "/gallery/family/family2.jpg",
    "/gallery/family/family3.jpg",
    "/gallery/family/family4.jpg",
  ];

  // =====================================================
  // PARENTS PHOTOS - 17
  // =====================================================

  const parentsPhotos = [
    "/gallery/parents/parents1.jpg",
    "/gallery/parents/parents2.jpg",
    "/gallery/parents/parents3.jpg",
    "/gallery/parents/parents4.jpg",
    "/gallery/parents/parents5.jpg",
    "/gallery/parents/parents6.jpg",
    "/gallery/parents/parents7.jpg",
    "/gallery/parents/parents8.jpg",
    "/gallery/parents/parents9.jpg",
    "/gallery/parents/parents10.jpg",
    "/gallery/parents/parents11.jpg",
    "/gallery/parents/parents12.jpg",
    "/gallery/parents/parents13.jpg",
    "/gallery/parents/parents14.jpg",
    "/gallery/parents/parents15.jpg",
    "/gallery/parents/parents16.jpg",
    "/gallery/parents/parents17.jpg",
  ];

  // =====================================================
  // DAUGHTER PHOTOS - 13
  // =====================================================

  const daughterPhotos = [
    "/gallery/daughters/dau1.jpg",
    "/gallery/daughters/dau2.jpg",
    "/gallery/daughters/dau3.jpg",
    "/gallery/daughters/dau4.jpg",
    "/gallery/daughters/dau5.jpg",
    "/gallery/daughters/dau6.jpg",
    "/gallery/daughters/dau7.jpg",
    "/gallery/daughters/dau8.jpg",
    "/gallery/daughters/dau9.jpg",
    "/gallery/daughters/dau10.jpg",
    "/gallery/daughters/dau11.jpg",
    "/gallery/daughters/dau12.jpg",
    "/gallery/daughters/dau13.jpg",
  ];

  // =====================================================
  // MEMORIES PHOTOS - 12
  // =====================================================

  const memoriesPhotos = [
    "/gallery/memories/mem1.jpg",
    "/gallery/memories/mem2.jpg",
    "/gallery/memories/mem3.jpg",
    "/gallery/memories/mem4.jpg",
    "/gallery/memories/mem5.jpg",
    "/gallery/memories/mem6.jpg",
    "/gallery/memories/mem7.jpg",
    "/gallery/memories/mem8.jpg",
    "/gallery/memories/mem9.jpg",
    "/gallery/memories/mem10.jpg",
    "/gallery/memories/mem11.jpg",
    "/gallery/memories/mem12.jpg",
  ];

  // =====================================================
  // STATES
  // =====================================================

  const [intro, setIntro] = useState(true);

  const [section, setSection] = useState("wedding");

  const [currentPhoto, setCurrentPhoto] = useState(0);

  const [currentRing, setCurrentRing] = useState(0);

  const [currentFamily, setCurrentFamily] = useState(0);

  const [currentParents, setCurrentParents] = useState(0);

  const [currentDaughter, setCurrentDaughter] = useState(0);

  const [currentMemory, setCurrentMemory] = useState(0);

  // =====================================================
  // INTRO
  // =====================================================

  useEffect(() => {

    const introTimer = setTimeout(() => {
      setIntro(false);
    }, 3500);

    return () => clearTimeout(introTimer);

  }, []);

  // =====================================================
  // WEDDING
  // =====================================================

  useEffect(() => {

    if (intro || section !== "wedding") return;

    const timer = setInterval(() => {

      setCurrentPhoto((prev) => {

        if (prev === weddingPhotos.length - 1) {
          setCurrentRing(0);
          setSection("rings");
          return prev;
        }

        return prev + 1;

      });

    }, 4000);

    return () => clearInterval(timer);

  }, [intro, section]);

  // =====================================================
  // RINGS
  // =====================================================

  useEffect(() => {

    if (intro || section !== "rings") return;

    const timer = setInterval(() => {

      setCurrentRing((prev) => {

        if (prev === ringPhotos.length - 1) {
          setCurrentFamily(0);
          setSection("family");
          return prev;
        }

        return prev + 1;

      });

    }, 4000);

    return () => clearInterval(timer);

  }, [intro, section]);

  // =====================================================
  // FAMILY
  // =====================================================

  useEffect(() => {

    if (intro || section !== "family") return;

    const timer = setInterval(() => {

      setCurrentFamily((prev) => {

        if (prev === familyPhotos.length - 1) {
          setCurrentParents(0);
          setSection("parents");
          return prev;
        }

        return prev + 1;

      });

    }, 4000);

    return () => clearInterval(timer);

  }, [intro, section]);

  // =====================================================
  // PARENTS
  // =====================================================

  useEffect(() => {

    if (intro || section !== "parents") return;

    const timer = setInterval(() => {

      setCurrentParents((prev) => {

        if (prev === parentsPhotos.length - 1) {
          setCurrentDaughter(0);
          setSection("daughter");
          return prev;
        }

        return prev + 1;

      });

    }, 4000);

    return () => clearInterval(timer);

  }, [intro, section]);

  // =====================================================
  // DAUGHTERS
  // =====================================================

  useEffect(() => {

    if (intro || section !== "daughter") return;

    const timer = setInterval(() => {

      setCurrentDaughter((prev) => {

        if (prev === daughterPhotos.length - 1) {
          setCurrentMemory(0);
          setSection("memories");
          return prev;
        }

        return prev + 1;

      });

    }, 4000);

    return () => clearInterval(timer);

  }, [intro, section]);

  // =====================================================
  // MEMORIES
  // =====================================================

  useEffect(() => {

    if (intro || section !== "memories") return;

    const timer = setInterval(() => {

      setCurrentMemory((prev) => {

        if (prev === memoriesPhotos.length - 1) {
          return 0;
        }

        return prev + 1;

      });

    }, 4000);

    return () => clearInterval(timer);

  }, [intro, section]);

  // =====================================================
  // PAGE
  // =====================================================

  return (

    <section className="gallery-page">

      <AnimatePresence mode="wait">

        {/* ================================================= */}
        {/* INTRO */}
        {/* ================================================= */}

        {intro && (

          <motion.div
            className="memories-intro"

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            exit={{
              opacity: 0,
              scale: 1.08
            }}

            transition={{
              duration: 1.2
            }}
          >

            <div className="intro-line"></div>

            <motion.p
              initial={{
                opacity: 0,
                y: 20
              }}

              animate={{
                opacity: 1,
                y: 0
              }}

              transition={{
                delay: 0.5,
                duration: 1
              }}
            >
              A Journey Through
            </motion.p>

            <motion.h1
              initial={{
                opacity: 0,
                scale: 0.8
              }}

              animate={{
                opacity: 1,
                scale: 1
              }}

              transition={{
                delay: 0.9,
                duration: 1.2
              }}
            >
              OUR MEMORIES
            </motion.h1>

            <motion.div
              className="intro-heart"

              initial={{
                opacity: 0,
                scale: 0
              }}

              animate={{
                opacity: 1,
                scale: 1
              }}

              transition={{
                delay: 1.5,
                duration: 0.8
              }}
            >
              ❤️
            </motion.div>

            <motion.p
              className="intro-subtitle"

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
              Love • Laughter • Forever
            </motion.p>

            <div className="intro-line"></div>

          </motion.div>

        )}

        {/* ================================================= */}
        {/* WEDDING */}
        {/* ================================================= */}

        {!intro && section === "wedding" && (

          <GallerySection
            title="💍 Wedding Memories"
            caption="A beautiful beginning of a lifetime together ❤️"
            image={weddingPhotos[currentPhoto]}
            alt={`Wedding Memory ${currentPhoto + 1}`}
            current={currentPhoto}
            total={weddingPhotos.length}
          />

        )}

        {/* ================================================= */}
        {/* RINGS */}
        {/* ================================================= */}

        {!intro && section === "rings" && (

          <GallerySection
            title="💍 Ring Ceremony"
            caption="A promise of love, together forever ❤️"
            image={ringPhotos[currentRing]}
            alt={`Ring Ceremony ${currentRing + 1}`}
            current={currentRing}
            total={ringPhotos.length}
          />

        )}

        {/* ================================================= */}
        {/* FAMILY */}
        {/* ================================================= */}

        {!intro && section === "family" && (

          <GallerySection
            title="👨‍👩‍👧‍👧 Family Moments"
            caption="Where love becomes a beautiful family ❤️"
            image={familyPhotos[currentFamily]}
            alt={`Family Memory ${currentFamily + 1}`}
            current={currentFamily}
            total={familyPhotos.length}
          />

        )}

        {/* ================================================= */}
        {/* PARENTS */}
        {/* ================================================= */}

        {!intro && section === "parents" && (

          <GallerySection
            title="❤️ Amma & Daddy"
            caption="Two hearts, one beautiful journey, forever together ❤️"
            image={parentsPhotos[currentParents]}
            alt={`Amma and Daddy Memory ${currentParents + 1}`}
            current={currentParents}
            total={parentsPhotos.length}
          />

        )}

        {/* ================================================= */}
        {/* DAUGHTERS */}
        {/* ================================================= */}

        {!intro && section === "daughter" && (

          <GallerySection
            title="👧🏻👧🏻 Our Daughters"
            caption="The beautiful smiles that made our family complete ❤️"
            image={daughterPhotos[currentDaughter]}
            alt={`Daughter Memory ${currentDaughter + 1}`}
            current={currentDaughter}
            total={daughterPhotos.length}
          />

        )}

        {/* ================================================= */}
        {/* MEMORIES */}
        {/* ================================================= */}

        {!intro && section === "memories" && (

          <motion.div
            className="cinematic-gallery"

            initial={{
              opacity: 0,
              scale: 0.94
            }}

            animate={{
              opacity: 1,
              scale: 1
            }}

            transition={{
              duration: 1.3
            }}
          >

            <GalleryHeader />

            <motion.h2
              initial={{
                opacity: 0,
                scale: 0.9
              }}

              animate={{
                opacity: 1,
                scale: 1
              }}

              transition={{
                delay: 0.3,
                duration: 0.8
              }}
            >
              ✨ Beautiful Memories
            </motion.h2>

            <motion.p
              className="section-caption"

              initial={{
                opacity: 0
              }}

              animate={{
                opacity: 1
              }}

              transition={{
                delay: 0.5,
                duration: 1
              }}
            >
              Little moments that became our greatest memories ❤️
            </motion.p>

            <div className="cinematic-frame">

              <AnimatePresence mode="wait">

                <motion.img
                  key={currentMemory}

                  src={memoriesPhotos[currentMemory]}

                  alt={`Beautiful Memory ${currentMemory + 1}`}

                  initial={{
                    opacity: 0,
                    scale: 1.08
                  }}

                  animate={{
                    opacity: 1,
                    scale: 1
                  }}

                  exit={{
                    opacity: 0,
                    scale: 0.97
                  }}

                  transition={{
                    duration: 1.4,
                    ease: "easeInOut"
                  }}
                />

              </AnimatePresence>

            </div>

            <div className="photo-counter">

              <span>
                {String(currentMemory + 1).padStart(2, "0")}
              </span>

              <span className="counter-line">
                /
              </span>

              <span>
                {String(memoriesPhotos.length).padStart(2, "0")}
              </span>

            </div>

            <div className="photo-dots">

              {memoriesPhotos.map((_, index) => (

                <span
                  key={index}

                  className={
                    index === currentMemory
                      ? "dot active"
                      : "dot"
                  }
                ></span>

              ))}

            </div>

            <motion.p
              className="memory-text"

              key={currentMemory}

              initial={{
                opacity: 0,
                y: 15
              }}

              animate={{
                opacity: 1,
                y: 0
              }}

              transition={{
                duration: 1
              }}
            >
              Every moment is a memory worth keeping forever ❤️
            </motion.p>

            <motion.div
              className="family-hearts"

              initial={{
                opacity: 0,
                scale: 0.8
              }}

              animate={{
                opacity: 1,
                scale: 1
              }}

              transition={{
                delay: 0.8,
                duration: 1
              }}
            >
              ✨ ❤️ ✨
            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}


// =====================================================
// COMMON GALLERY SECTION
// =====================================================

function GallerySection({
  title,
  caption,
  image,
  alt,
  current,
  total
}) {

  return (

    <motion.div
      className="cinematic-gallery"

      initial={{
        opacity: 0,
        scale: 0.95
      }}

      animate={{
        opacity: 1,
        scale: 1
      }}

      transition={{
        duration: 1.2
      }}
    >

      <GalleryHeader />

      <motion.h2
        initial={{
          opacity: 0,
          scale: 0.9
        }}

        animate={{
          opacity: 1,
          scale: 1
        }}

        transition={{
          delay: 0.3,
          duration: 0.8
        }}
      >
        {title}
      </motion.h2>

      <motion.p
        className="section-caption"

        initial={{
          opacity: 0
        }}

        animate={{
          opacity: 1
        }}

        transition={{
          delay: 0.5,
          duration: 1
        }}
      >
        {caption}
      </motion.p>

      <div className="cinematic-frame">

        <AnimatePresence mode="wait">

          <motion.img
            key={image}

            src={image}

            alt={alt}

            initial={{
              opacity: 0,
              scale: 1.08
            }}

            animate={{
              opacity: 1,
              scale: 1
            }}

            exit={{
              opacity: 0,
              scale: 0.97
            }}

            transition={{
              duration: 1.4,
              ease: "easeInOut"
            }}
          />

        </AnimatePresence>

      </div>

      <div className="photo-counter">

        <span>
          {String(current + 1).padStart(2, "0")}
        </span>

        <span className="counter-line">
          /
        </span>

        <span>
          {String(total).padStart(2, "0")}
        </span>

      </div>

      <div className="photo-dots">

        {Array.from({ length: total }).map((_, index) => (

          <span
            key={index}

            className={
              index === current
                ? "dot active"
                : "dot"
            }
          ></span>

        ))}

      </div>

    </motion.div>
  );
}


// =====================================================
// GALLERY HEADER
// =====================================================

function GalleryHeader() {

  return (

    <motion.div
      className="gallery-header"

      initial={{
        opacity: 0,
        y: -30
      }}

      animate={{
        opacity: 1,
        y: 0
      }}

      transition={{
        duration: 1
      }}
    >

      <h1>
        📸 Our Precious Gallery
      </h1>

      <p>
        Every Picture Holds a Beautiful Memory ❤️
      </p>

    </motion.div>
  );
}

export default Gallery;

