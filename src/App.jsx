import "./App.css";
import { motion, useTransform, useMotionValue } from "framer-motion";

function App() {
  const drag = "drag";
  const y = useMotionValue(0); //sería una props o referencia en style
  const backgroundColor = useTransform(
    y,
    [-100, 0, 100],
    ["#fff", "#999", "#000"]
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <motion.div
        style={{ backgroundColor, y }}
        className="box"
        drag="y"
        dragConstraints={{
          top: -100,
          bottom: 100,
        }}
      >
        {drag}
      </motion.div>
    </div>
  );
}

export default App;
