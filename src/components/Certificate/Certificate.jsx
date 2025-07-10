import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import './certificate.scss';

const collectionData = [
  { img: "/certificate1.png", title: "Dicoding - Basic Web Programming" },
  { img: "/certificate2.png", title: "DataCamp - Containerization and Virtualization Concepts" },
  { img: "/certificate3.png", title: "Huawei - HCIA-Datacom V1.0 Course" },
  { img: "/certificate4.png", title: "Oracle - Database Design" },
  { img: "/certificate5.png", title: "Oracle - Database Programming with SQL" },
  { img: "/certificate6.png", title: "DataCamp - Introduction to Tableau" },
  { img: "/certificate7.png", title: "DataCamp - PostgreSQL Summary Stats and Windows Functions" },
  { img: "/certificate8.png", title: "DataCamp - Case Study: Analyzing Job Market Data in Tableau" },
  { img: "/certificate9.png", title: "DataCamp - Statistical Techniques in Tableau" },
];

const Certificate = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    itemRefs.current.forEach((item, index) => {
      const overlay = item.querySelector(".overlay");
      const menu = item.querySelector(".menu");
      
      gsap.to(item, {
        width: activeIndex === index ? "25vw" : "8vw",
        duration: 1.2,
        ease: "elastic(1, 0.5)",
      });

      gsap.to([overlay, menu], {
        opacity: activeIndex === index ? 1 : 0,
        duration: 1.2,
        ease: "power1.out",
      });
    });
  }, [activeIndex]);

  const handleItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="Certificate">
      <h2>
        My Certificate<br/>Collection
      </h2>

      <div className="group">
        {collectionData.map((item, index) => (
          <div
            className="item"
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            style={{ '--url': `url('${item.img}')` }}
            onClick={() => handleItemClick(index)}
          >
            <div className="overlay"></div>
            <div className="menu">
              <label>
                {item.title.split(' - ')[0]}
                <br />
                {item.title.split(' - ')[1]}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;