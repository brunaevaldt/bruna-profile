import Head from "next/head";
import Intro from "../components/Intro/Intro";
import Feedback from "../components/Feedback/Feedback";
import TestAutomation from "../components/TestAutomation/TestAutomation";
import ScrumMaster from "../components/ScrumMaster/ScrumMaster";
import styles from "./index.module.css";

export default function Home() {
    return (
        <main className={styles.mainContainer}>
            <Head>
                <title>Bruna Evaldt Carlos</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Intro />
            <Feedback />
            <TestAutomation />
            <ScrumMaster />
        </main>
    );
}
