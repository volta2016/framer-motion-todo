import "./App.css";
import { motion } from "framer-motion";

function AppExample() {
  return (
    <div className="App">
      <motion.div
        className="box"
        initial={{ scale: 0 }}
        transition={{ duration: 2 }}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
      />

      {/*  <motion.h1
        initial={{ color: "#ffffff" }}
        animate={{ y: 100, color: "#656CFF" }}
        transition={{ duration: 1 }}
      >
        hi
      </motion.h1> */}
    </div>
  );
}

export default AppExample;
