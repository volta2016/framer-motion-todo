import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <motion.div
        className="box"
        initial={{ scale: 1 }}
        transition={{ duration: 2 }}
        animate={{ scale: 2, rotate: 45 }}
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

export default App;
