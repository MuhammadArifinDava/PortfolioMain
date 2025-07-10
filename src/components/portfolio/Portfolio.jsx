import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Company Profile Website",
    img: "/portfolio1.jpg",
    desc: "This project is a comprehensive, public-facing company profile website designed to establish a strong and professional digital presence. It strategically presents essential business information, including a detailed company profile, product offerings, key competitive advantages, and contact details.",
  },
  {
    id: 2,
    title: "Internal Company Website",
    img: "/portfolio2.jpg",
    desc: "This project's internal website is designed for strategic decision-making, and my primary responsibility was developing the frontend. I built its dynamic dashboard, featuring interactive, filterable charts used to analyze sales performance, product trends, and company-client purchasing histories.",
  },
  {
    id: 3,
    title: "Museum Website",
    img: "/portfolio3.jpg",
    desc: "This website serves as the digital gateway to the Mulawarman Museum, offering a comprehensive look into the rich cultural heritage of East Kalimantan. Visitors can delve into the region's past by exploring the fascinating history of the Kertanegara Kingdom and Browse diverse collections of historical artifacts and cultural arts.",
  },
  {
    id: 4,
    title: "Coffee Shop Website",
    img: "/portfolio4.jpg",
    desc: "This project is a visually-driven website for 'Kemarin Coffee,' designed to establish a strong online brand identity. It provides customers with essential information through key sections like an engaging 'Our Story' and an attractive product menu. To streamline the ordering process, customers are seamlessly directed to the admin's WhatsApp for direct communication and purchase. The website's clean, minimalist aesthetic and high-quality imagery create a sophisticated and welcoming digital atmosphere.",
  },
  {
    id: 5,
    title: "UMKM Santap Rambutan Website",
    img: "/portfolio5.jpg",
    desc: "This project is an website developed for 'Santap Rambutan,' a brand specializing in innovative rambutan-based dessert products. The website serves as the primary digital storefront, showcasing a variety of unique desserts, providing detailed brand information, and outlining product advantages. Notably, this project and its underlying business concept were developed and submitted as part of the PKM (Student Creativity Program) for the national Simbelmawa competition, highlighting its strong foundation in digital entrepreneurship.",
  },
  {
    id: 6,
    title: "Mobile Apps",
    img: "/portfolio6.jpg",
    desc: "This project is an Instagram-inspired social media app providing full CRUD (Create, Read, Update, Delete) functionality for posts. Its core social features include a friend system with user search, follow capabilities, and profile viewing. The app was built on a modern stack, using Flutter for the cross-platform UI, Supabase as its Backend-as-a-Service (BaaS), and FlutterFlow to accelerate visual development.",
  },
  {
    id: 7,
    title: "Mobile App",
    img: "/portfolio7.jpg",
    desc: "This project is an Instagram-inspired social media app providing full CRUD (Create, Read, Update, Delete) functionality for posts. Its core social features include a friend system with user search, follow capabilities, and profile viewing. The app was built on a modern stack, using Flutter for the cross-platform UI, Supabase as its Backend-as-a-Service (BaaS), and FlutterFlow to accelerate visual development.",
  },
  {
    id: 8,
    title: "Samarinda News App ",
    img: "/portfolio8.jpg",
    desc: "Stay connected to the pulse of Samarinda. We deliver the news that matters to you, from major political and economic updates to hyperlocal stories about your community. Covering everything from health and technology to local events and policies, our app is your essential source for understanding what's happening in Samarinda, East Kalimantan.",
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
            <h2 className={item.id <= 3 ? "white-text" : "blue-text"}>{item.title}</h2>
            <p className={item.id <= 3 ? "white-text" : "black-text"}>
              {item.desc}
            </p>
            <button>See Demo</button>
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