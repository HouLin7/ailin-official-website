"use client";
import { motion } from "framer-motion";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={styles.hero}
    >
      <h1>儿童脑电创新中心</h1>
      <p>基于 AI 的脑电监测与智能分析平台</p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={styles.btn}
      >
        了解更多
      </motion.button>
    </motion.section>
  );
}
