import { useState } from "react";
import styles from "./Accordion.module.css";

type AccordionProps = {
  qaItem: { title: string; text: string };
  qaNumber: number;
};

function Accordion({ qaItem, qaNumber }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <h3 className={styles.qaNumber}>0{qaNumber}</h3>
      <main className={styles.mainContainer}>
        <h3 className={styles.title}>{qaItem.title}</h3>
        <p className={styles.text}>{qaItem.text}</p>
      </main>
      <span className={styles.sign}>{!isOpen ? "+" : "-"}</span>
    </div>
  );
}

export default Accordion;
