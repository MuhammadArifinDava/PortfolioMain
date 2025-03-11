/* eslint-disable no-unused-vars */
import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const leftVariants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: (i) => ({
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.6, 
    },
  }),
};

const rightVariants = {
  initial: {
    x: 500,
    y: 100,
    opacity: 0,
  },
  animate: (i) => ({
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.6, 
    },
  }),
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const isMobile = window.innerWidth <= 768;

  return (
    <motion.div
      className="services"
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      ref={ref}
    >
      <motion.div className="textContainer" custom={0} variants={leftVariants}>
        <p>
          I can focus on your brand&rsquo;s branding
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" custom={1} variants={leftVariants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "#04507f" }}>My</motion.b> Ideas
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
                    background: "linear-gradient(360deg, #ffffff,rgb(109, 229, 250))",
                    color: "#61b6eb",
                    scale: 0.95,
                  }
            }
          >
            <h2>{["Social Media Editing", "VideoGraphy Editing", "Website Programming", "Invitation Website"][i]}</h2>
            <p>
              {[
                "Make your own Business interesting by some of my editing touch. C'mon, people maybe skip your account if your account feel flat. Use some of my editing touch so That will make your Social Media account be growth !.",
                "I'm sure that boring video with flat editing was make yours viewers feel bored. You need to add some editing to make your viewers feeling curious until the video end.   Don't be shy to contact me below :D",
                "You didn't have any website for your company?? and confuse how to publish your company to people?? Or want to make your shop/store own website with online programming to make the purchase easier? Contact me below from email or instagram, feel happy to work with you.",
                "Do you have any help to make Wedding invitation? Birthday invitation ? Event invitation ? or make about your own website ? Yeah, you've came to the right person. Contact me below from email or instagram, feel happy to work with you."
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
