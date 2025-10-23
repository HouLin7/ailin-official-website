"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./TeamGallery.module.css";

const photos = [
  "/people/p1.png",
  "/people/p2.png",
  "/people/p3.png",
  "/people/p4.png",
  "/people/p5.png",
  "/people/p6.png",
  "/people/p7.png",
  "/people/p8.png",
  "/people/p9.png",
  "/people/p10.png",
];

export default function TeamGallery() {
  return (
    <>
      <div className={styles.container}>
        {photos.map((src, index) => (
          <motion.div
            key={src}
            className={styles.card}
            initial={{ opacity: 0, scale: 0.9 }}
            //   animate={{ opacity: 1, scale: 1 }}
            //   transition={{
            //     duration: 0.6,
            //     delay: index * 0.1,
            //     ease: "easeOut",
            //   }}
            animate={{
              opacity: 1,
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "mirror",
              delay: index * 0.15,
            }}
            whileHover={{
              y: -8,
              boxShadow: "0 10px 18px rgba(0,0,0,0.15)",
            }}
          >
            <Image
              src={src}
              alt="team member"
              width={200}
              height={200}
              className={styles.image}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
}
