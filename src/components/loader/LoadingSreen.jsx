import { motion } from "framer-motion";
import "./LoadingScreen.css";
import logo from '../../assets/images/THSLogo.png'

const LoadingScreen = () => {
  return (
    <div className="loading-container">
     {/* <motion.img
        src={logo}
        alt="Loading Object"
        className="speeding-object"
        initial={{ x: "-100vw", scale: 0.5 }} // Starts small off-screen
        animate={{
          x: ["-100vw", "50vw", "100vw"], // Moves from left -> center -> right
          scale: [0.5, 1.2, 2.5], // Scales up in center, back down on exit
        }}
        transition={{
          times: [0, 0.5, 1],
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      /> */}
     <motion.img
        src={logo}
        alt="Loading Object"
        className="speeding-object"
        initial={{ 
          // x: "-100vw",
           scale: 0.5 }} // Starts small off-screen
        animate={{
          // x: ["-100vw", "50vw", "100vw"], // Moves from left -> center -> right
          scale: [0.5, 1.2, 0.5], // Scales up in center, back down on exit
        }}
        transition={{
          times: [0, 0.5, 1],
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      />
    </div>
  );
};

export default LoadingScreen;
