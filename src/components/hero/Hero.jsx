import "./hero.scss";
import { motion } from "framer-motion";


const scrollToId = (id) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  }
};

const Hero = () => {
  const handleSeeLatestWorksClick = () => {
    scrollToId("Portfolio");
  };

  const handleContactMeClick = () => {
    scrollToId("Contact");
  };

  const textVariants = {
    initial: {
      x: -600,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: [0, -5, 0, 5, 0],
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.4,
      },
    },
    wave: {
      x: [0, -20, 20, -20, 20, -10, 10, 0],
      transition: {
        repeat: Infinity,
        duration: 1.5,
      },
    },
    scrollButton: {
      opacity: 0.2,
      y: 20,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 18,
      },
    },
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Hello Everyone 👋</motion.h2>
          <motion.h1 variants={textVariants}>
            Dava, Junior FrontEnd WebDev
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button
              variants={textVariants}
              onClick={handleSeeLatestWorksClick}
            >
              See the Latest Works
            </motion.button>
            <motion.button
              variants={textVariants}
              onClick={handleContactMeClick}
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            className="scrollButton"
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        FrontEnd BackEnd Editor
      </motion.div>
      <div className="imageContainer">
        <img src="/hero2.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
