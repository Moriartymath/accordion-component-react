import Accordion from "./Accordion/Accordion.tsx";
import styles from "./AccordionList.module.css";

type AccordionListProps = {
  qaList: Array<{ title: string; text: string }>;
};

function AccordionList({ qaList }: AccordionListProps) {
  return (
    <div className={styles.list}>
      {qaList.map((qaItem, index) => (
        <Accordion qaItem={qaItem} qaNumber={index + 1} key={index} />
      ))}
    </div>
  );
}

export default AccordionList;
