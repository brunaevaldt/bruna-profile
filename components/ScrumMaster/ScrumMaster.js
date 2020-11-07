import PostItStack from "./PostItStack";
import styles from "./scrumMaster.module.css";

const ScrumMaster = () => {
    return (
        <section className={styles.scrumMasterContainer}>
            <h2>Scrum Master</h2>
            <PostItStack />
            <div>
                <p>
                    Strive for clean maintainable code. Don’t push to production
                    on Friday. People over process.{" "}
                </p>
                <p>
                    These are not just empty idioms. They help guide the team
                    when everyone is working hard to make that next deadline.
                    They help guide the quality process.{" "}
                </p>
            </div>
        </section>
    );
};

export default ScrumMaster;
