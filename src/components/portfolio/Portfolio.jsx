import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "CoffeeShop Web",
    img: "/11.png", 
    desc: "This is my Main Portfolio Website to show all of my works, my skills, and my contact to get in touch with me from email or social media.",
    url: "https://davaportfolio.netlify.app/",
  },
  {
    id: 2,
    title: "Santap Rambutan Web",
    img: "/22.png", 
    desc: "This Web is a simple website that i was created for my own business, a small business that sell Rambutan fruit with online order system.",
    url: "https://santaprambutan.netlify.app/",
  },
  {
    id: 3,
    title: "PortFolio Web",
    img: "/33.png", 
    desc: "This is my first ever website that i was created, just a simple website about mine or yourself.",
    url: "https://chipseyy.netlify.app/",
  },
  {
    id: 4,
    title: "Portfolio Web",
    img: "/44.png", 
    desc: " This is my Main Portfolio Website to show all of my works, my skills, and my contact to get in touch with me from email or social media ",
    url: "https://chipsey.netlify.app/",
  },
  {
    id: 5,
    title: "Data Mining",
    img: "/55.png", 
    desc: " A Data Mining Program with Python Languange that use to analyst data from any data source, and visualize it to be a report.",
    url: "https://davaportfolio.netlify.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2 className={item.id === 1 || item.id === 2 ? "white-text" : ""}>{item.title}</h2>
            <p className={item.id === 1 || item.id === 2 ? "white-text" : ""}>
              {item.desc}
            </p>
            <button onClick={() => window.open(item.url, "_blank")}>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;