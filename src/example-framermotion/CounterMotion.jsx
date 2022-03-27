import "./App.css";
import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  odd: {
    backgroundColor: "#333",
    color: "#fff",
    scale: 0.8,
  },
  even: {
    backgroundColor: "#999",
    color: "#000",
    scale: 1,
  },
};

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <motion.div
        className="box"
        variants={variants}
        animate={counter % 2 === 0 ? "even" : "odd"}
      >
        {counter}
      </motion.div>

      <button onClick={() => setCounter((counter) => counter + 1)}>add</button>
    </div>
  );
}

export default App;
