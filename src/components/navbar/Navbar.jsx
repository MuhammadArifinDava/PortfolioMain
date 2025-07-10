import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Arifin Dava
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/muhammad-arifin-dava/" target="_blank" 
          className="icons" rel="noreferrer" >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
            </svg>
          </a>
          <a href="https://www.canva.com/design/DAGratBeOpI/c0AaT6FN597_zuacWQN4yg/edit?utm_content=DAGratBeOpI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" 
          className="icons" rel="noreferrer" >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
            <path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M24.109,39.954 c-6.781,0-11.176-5.086-11.176-12.782c0-9.942,6.888-17.128,14.639-17.128c4.69,0,7.486,2.361,7.486,5.573 c0,3.313-2.395,5.658-4.436,5.658c-0.508,0-0.764-0.249-0.764-0.661c0-0.917,1.478-2.295,1.478-4.896 c0-2.192-1.338-3.569-3.53-3.569c-4.69,0-10.029,5.541-10.029,15.124c0,5.657,2.809,9.753,7.346,9.753 c3.924,0,7.314-2.816,9.277-6.797c0.174-0.35,0.341-0.51,0.531-0.51c0.275,0,0.538,0.236,0.538,0.75 C35.467,32.793,31.306,39.954,24.109,39.954z"></path>
            </svg>
          </a>
          <a href="https://Instagram.com/rfdapp.art" target="_blank" 
          className="icons" rel="noreferrer" >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
            </svg>
          </a>


        </div>
      </div>
    </div>
  );
};

export default Navbar;
