import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const leftVariants = {
  initial: { x: -500, y: 100, opacity: 0 },
  animate: (i) => ({
    x: 0,
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.6 },
  }),
};

const rightVariants = {
  initial: { x: 500, y: 100, opacity: 0 },
  animate: (i) => ({
    x: 0,
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.6 },
  }),
};

// Data logo slider dengan sumber logo yang sudah berwarna
const logos = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', alt: 'JavaScript' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg', alt: 'Python' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png', alt: 'Dart' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg', alt: 'PHP' },
  { src: 'https://upload.wikimedia.org/wikipedia/de/d/dd/MySQL_logo.svg', alt: 'MySQL' },
  { src: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png', alt: 'Java' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', alt: 'Tailwind CSS' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', alt: 'React JS' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg', alt: 'Laravel' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/flutter.svg', alt: 'Flutter', invertOnDark: true },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/threedotjs.svg', alt: 'Three.js', invertOnDark: true },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/alpinedotjs.svg', alt: 'Alpine.js', invertOnDark: true },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg', alt: 'Matplotlib' },
  { src: 'https://seaborn.pydata.org/_images/logo-wide-lightbg.svg', alt: 'Seaborn' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg', alt: 'Scikit-learn' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg', alt: 'NumPy' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg', alt: 'Pandas' },
];

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const isMobile = window.innerWidth <= 768;

  const extendedLogos = [...logos, ...logos];

  return (
    <motion.div
      className="services"
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      ref={ref}
    >
      <div className="top-container">
        <motion.div className="skillset-title-container" custom={-1} variants={leftVariants}>
          <h1 className="skillset-title">Skillset</h1>
        </motion.div>
        <div className="logo-slider-wrapper">
          <div className="logo-slider">
            <div className="logo-track">
              {extendedLogos.map((logo, index) => (
                <div className="slide" key={index}>
                  <img 
                    src={logo.src} 
                    alt={logo.alt}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <motion.div className="textContainer" custom={0} variants={leftVariants}>
        <p>
          I can focus on your brand’s branding
          <br /> and move forward
        </p>
        <hr />
      </motion.div>

      <motion.div className="titleContainer" custom={1} variants={leftVariants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "#04507f" }}>The</motion.b> Solution
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "#04507f" }}>For Your</motion.b> Business.
          </h1>
          <button>
            <motion.b whileHover={{ color: "#04507f" }}>WHAT I CAN DO?</motion.b>
          </button>
        </div>
      </motion.div>

      <motion.div className="listContainer">
        {[...Array(4)].map((_, i) => (
          <motion.div
            className="box"
            key={i}
            custom={i + 2}
            variants={i % 2 === 0 ? leftVariants : rightVariants}
            whileHover={
              isMobile
                ? {}
                : {
                    background: "linear-gradient(360deg, #ffffff, #04508f)",
                    color: "#61b6eb",
                    scale: 0.95,
                  }
            }
          >
            <h2>{["Company Profile Web/App", "MSME Web/App", "Business Web/App", "Portfolio Web/App"][i]}</h2>
            <p>
              {[
                "Build your company's professional image with a modern web/app. Using React, Laravel, Next.js, and Three.js for 3D visuals. Your solution includes a mobile version and can be integrated with Machine Learning.",
                "Expand your MSME's market reach with an effective web/app. Built with React and Laravel, optimized for mobile, and can be enhanced with Machine Learning for product or customer analysis.",
                "Drive your business growth with a dynamic Web or App for e-commerce or corporate needs. Built with React, Next.js, Laravel, 3D visuals from Three.js, and Machine Learning support. A mobile version is always included.",
                "Showcase your best work with a stunning portfolio web/app. Using use React, Next.js, and Three.js for impressive 3D effects. Your solution will be responsive on mobile and can be enhanced with unique Machine Learning features."
              ][i]}
            </p>
            <button>Go</button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;