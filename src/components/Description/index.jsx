/* eslint-disable react-hooks/rules-of-hooks */
import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import Rounded from "../../common/RoundedButton";
export default function index() {
  const phrase =
    "Founded in 2024, JAA Consulting Firm is dedicated to providing strategic and operational solutions for individuals, startups, and corporations. Guided by our 'Triple C' values—Creative, Credent, Credible—we’re committed to our clients’ success.";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div ref={description} className={styles.description}>
      <div className={styles.body}>
        <p>
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
          We build lasting partnerships while fulfilling our role as a
          responsible corporate citizen through Corporate Social Responsibility
          (CSR) and Corporate Social Investment (CSI) initiatives.
        </motion.p>
        <div data-scroll data-scroll-speed={0.1}>
          <Rounded className={styles.button}>
            <p>About us</p>
          </Rounded>
        </div>
      </div>
    </div>
  );
}
