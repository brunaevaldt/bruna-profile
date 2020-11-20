import Head from "next/head";
import Intro from "../components/Intro/Intro";
import Feedback from "../components/Feedback/Feedback";
import TestAutomation from "../components/TestAutomation/TestAutomation";
import ScrumMaster from "../components/ScrumMaster/ScrumMaster";
import Projects from "../components/Projects/Projects";
import styles from "./index.module.css";

export default function Home() {
    return (
        <main className={styles.mainContainer}>
            <Head>
                <title>Bruna Evaldt Carlos</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Bruna Evaldt Carlos, role: Quality Assurance Engineer, city: Amsterdam, country: netherlands"
                />
            </Head>
            <Intro />
            <Feedback />
            <TestAutomation />
            <ScrumMaster />
            <Projects />
        </main>
    );
}
