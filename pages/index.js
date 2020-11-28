import MetaHead from "../components/MetaHead/MetaHead";
import Intro from "../components/Intro/Intro";
import Feedback from "../components/Feedback/Feedback";
import TestAutomation from "../components/TestAutomation/TestAutomation";
import ScrumMaster from "../components/ScrumMaster/ScrumMaster";
import Projects from "../components/Projects/Projects";
import styles from "../styles/index.module.css";

export default function Home() {
    return (
        <main className={styles.mainContainer}>
            <MetaHead />
            <Intro />
            <Feedback />
            <TestAutomation />
            <ScrumMaster />
            <Projects />
        </main>
    );
}
