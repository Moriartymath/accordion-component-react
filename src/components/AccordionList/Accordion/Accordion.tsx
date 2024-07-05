import { useState } from "react";
import styles from "./Accordion.module.css";

type AccordionProps = {
  qaItem: { title: string; text: string };
  qaNumber: number;
};

function Accordion({ qaItem, qaNumber }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const textColor = isOpen ? "#00b700" : "";

  return (
    <div
      className={`${styles.container} ${isOpen ? styles.opened : ""}`}
      onClick={() => setIsOpen((currIsOpen) => !currIsOpen)}
    >
      <h3
        className={styles.qaNumber}
        style={{ color: isOpen ? textColor : "#80808096" }}
      >
        0{qaNumber}
      </h3>
      <main className={styles.mainContainer}>
        <h3 className={styles.title} style={{ color: textColor }}>
          {qaItem.title}
        </h3>
        {isOpen ? <p className={styles.text}>{qaItem.text}</p> : null}
      </main>
      <span className={styles.sign}>
        {!isOpen ? <>&#x2b;</> : <>&minus;</>}
      </span>
    </div>
  );
}

export default Accordion;
