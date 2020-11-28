import styles from "./cvsummary.module.css";

const CvSummary = ({ summary }) => (
    <section className={styles.cvsummary}>
        <h4>Summary</h4>
        <p>{summary}</p>
    </section>
);

export default CvSummary;
