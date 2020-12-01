import styles from "./work.module.css";

const getDate = (date) => {
    if (date === "present") return date;
    const event = new Date(date);
    return event.toLocaleDateString("en-UK", {
        year: "numeric",
        month: "short",
    });
};

const Work = ({ work }) => {
    return (
        <section className={styles.work}>
            <h4>Work experience</h4>
            {work.map((workItem) => (
                <div className={styles.workItem}>
                    <div className={styles.role}>
                        <h4>{workItem.position}</h4>
                        <label>
                            {getDate(workItem.startDate)} -{" "}
                            {getDate(workItem.endDate)}
                        </label>
                    </div>
                    <p>{workItem.company}</p>
                    <ul>
                        {workItem.summary.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
};

export default Work;
