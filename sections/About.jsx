"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-2 font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Lorem</span> ipsum, dolor
        sit amet consectetur adipisicing elit.{" "}
        <span className="font-extrabold text-white">Autem</span> voluptatem
        quidem repellat illum! Ipsam.
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.4, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-5 h-7 object-contain mt-[28px] animate-bounce border rounded-full px-1 cursor-pointer"
      ></motion.img>
    </motion.div>
  </section>
);

export default About;
