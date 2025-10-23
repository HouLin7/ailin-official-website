"use client";

import { motion } from "framer-motion";
import styles from "./Section3.module.css";

const photos = [
  ["/people/p1.png", "/people/p2.png"],
  ["/people/p3.png", "/people/p4.png"],
  ["/people/p5.png", "/people/p6.png"],
  ["/people/p7.png", "/people/p8.png"],
  ["/people/p9.png", "/people/p10.png"],
  ["/people/p9.png", "/people/p10.png"],
];

const ColumnItem: React.FC<{ src1: string; src2: string; index: number }> = ({
  src1,
  src2,
  index,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        width: 240,
      }}
    >
      <div style={{ height: 30 }}></div>
      <motion.div
        key={src1}
        className={styles.card}
        initial={{ opacity: 0.8, scale: 0.6 }}
        animate={{
          opacity: 1,
          scale: [1, 1.01, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
          delay: index * 0.15,
        }}
        whileHover={{
          y: -8,
          boxShadow: "0 10px 18px rgba(0,0,0,0.15)",
        }}
      >
        <img
          src={src1}
          alt="team member"
          style={{ width: 240, height: index % 2 == 0 ? 240 : 320 }}
          className={styles.image}
        />
      </motion.div>

      <div style={{ height: 30 }}></div>
      <motion.div
        key={src2}
        className={styles.card}
        initial={{ opacity: 0.8, scale: 0.6 }}
        animate={{
          opacity: 1,
          scale: [1, 1.01, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
          delay: index * 0.2,
        }}
        whileHover={{
          y: -8,
          boxShadow: "0 10px 18px rgba(0,0,0,0.15)",
        }}
      >
        <img
          src={src2}
          alt="team member"
          style={{ width: 240, height: index % 2 == 1 ? 240 : 320 }}
          className={styles.image}
        />
      </motion.div>
    </div>
  );
};

export default function Section3() {
  const styles: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#adc6ccff",
    // height: "400px",
    width: "100%",
    backgroundPosition: "center",
  };

  return (
    <div style={styles}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ marginTop: 50 }}> 在这里还有有趣的陌生人。</h1>
        <div>
          {photos.map((pair, index) => (
            <div
              key={index}
              style={{ display: "inline-block", marginRight: 10 }}
            >
              <div
                style={{
                  position: "relative",
                  width: 250,
                  paddingLeft: 5,
                  paddingRight: 5,
                  height: 560,
                  // backgroundColor: "#f5f5f5",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    transform:
                      index % 2 == 0 ? "translateY(80px)" : "translateY(0px)",
                  }}
                >
                  <ColumnItem
                    src1={pair[0]}
                    src2={pair[1]}
                    index={index}
                  ></ColumnItem>
                </div>
              </div>
            </div>
          ))}
          {/* <TeamGallery></TeamGallery> */}
        </div>
      </div>
    </div>
  );
}
