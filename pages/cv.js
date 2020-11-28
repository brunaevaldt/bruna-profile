import MetaHead from "../components/MetaHead/MetaHead";
import styles from "../styles/cv.module.css";

const Cv = () => (
    <article className={styles.cv}>
        <MetaHead />

        <header>
            <h1>Bruna Evaldt Carlos</h1>
            <h2>QA Engineer at Chama</h2>
            <address>
                Amsterdam, Netherlands | 0600000000 |{" "}
                <a href="bruna.evaldt@gmail.com">bruna.evaldt@gmail.com</a>
            </address>
        </header>
        <div className={styles.photo}>
            <img src="/images/bruna-profile.png" alt="Bruna profile" />
        </div>
        {/* <main>Summary</main>
        <aside>Skills</aside> */}
    </article>
);

export default Cv;
