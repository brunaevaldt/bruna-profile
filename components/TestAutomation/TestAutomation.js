import PostIt from "./PostIt";
import styles from "./testAutomation.module.css";

const TestAutomation = () => {
    return (
        <div className={styles.testAutomationContainer}>
            <h1>Test automation</h1>
            <section>
                <p>
                    Starting out as a developer I gravitated towards testing.
                    Soon I was testing the work of my fellow developers.
                </p>
                <p>
                    Today I still use my development skills by advocating for
                    and implementing automated tests. I don’t shy away from
                    JavaScript or C#. Well, maybe I'm a little shy with the last
                    one.
                </p>
            </section>
            <section>
                <PostIt />
            </section>
        </div>
    );
};

export default TestAutomation;
