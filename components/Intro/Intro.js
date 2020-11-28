import Link from "next/link";
import styles from "./intro.module.css";
import ProfileImage from "./ProfileImage";

const Intro = () => (
    <section className={styles.introContainer}>
        <div className={styles.photoContainer}>
            <ProfileImage />
        </div>
        <div className={styles.introDetailsContainer}>
            <h2 className={styles.name}>Bruna Evaldt Carlos</h2>
            <h1 className={styles.jobTitle}>QA Engineer</h1>
            <div className={styles.actionRow}>
                <a
                    href="mailto:bruna.evaldt@gmail.com?subject=Hi Bruna!&body=Hi Bruna,"
                    alt="send me an email"
                    className={styles.actionButton}
                >
                    <svg
                        width="40"
                        height="30"
                        viewBox="0 0 50 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M45.6055 0L4.39453 0C1.97139 0 0 2.20871 0 4.92357L0 33.4564C0 36.1713 1.97139 38.38 4.39453 38.38L45.6055 38.38C48.0286 38.38 50 36.1713 50 33.4564V4.92357C50 2.20871 48.0286 0 45.6055 0ZM45.0319 3.28238L44.4454 3.82955L26.7436 20.3444C25.7332 21.2869 24.2666 21.2869 23.2564 20.3444L5.55459 3.82955L4.96807 3.28238L45.0319 3.28238ZM2.92969 5.65204L17.3527 19.1079L2.92969 29.8624L2.92969 5.65204ZM45.6055 35.0976L4.39453 35.0976C3.68672 35.0976 3.09473 34.5322 2.95908 33.7835L19.7018 21.2994L21.3818 22.8668C22.4301 23.8447 23.7151 24.3337 25.0001 24.3337C26.2851 24.3337 27.57 23.8447 28.6184 22.8668L30.2984 21.2994L47.041 33.7834C46.9053 34.5323 46.3133 35.0976 45.6055 35.0976ZM47.0703 29.8624L32.6473 19.1081L47.0703 5.65204V29.8624Z"
                            fill="black"
                        />
                        <path
                            d="M45.6055 0L4.39453 0C1.97139 0 0 2.20871 0 4.92357L0 33.4564C0 36.1713 1.97139 38.38 4.39453 38.38L45.6055 38.38C48.0286 38.38 50 36.1713 50 33.4564V4.92357C50 2.20871 48.0286 0 45.6055 0ZM45.0319 3.28238L44.4454 3.82955L26.7436 20.3444C25.7332 21.2869 24.2666 21.2869 23.2564 20.3444L5.55459 3.82955L4.96807 3.28238L45.0319 3.28238ZM2.92969 5.65204L17.3527 19.1079L2.92969 29.8624L2.92969 5.65204ZM45.6055 35.0976L4.39453 35.0976C3.68672 35.0976 3.09473 34.5322 2.95908 33.7835L19.7018 21.2994L21.3818 22.8668C22.4301 23.8447 23.7151 24.3337 25.0001 24.3337C26.2851 24.3337 27.57 23.8447 28.6184 22.8668L30.2984 21.2994L47.041 33.7834C46.9053 34.5323 46.3133 35.0976 45.6055 35.0976ZM47.0703 29.8624L32.6473 19.1081L47.0703 5.65204V29.8624Z"
                            fill="white"
                        />
                    </svg>
                </a>
                <Link
                    href="/cv"
                    alt="show and print my resume"
                    className={styles.actionButton}
                >
                    Show & Print CV
                </Link>
            </div>
            Amsterdam, The Netherlands
        </div>
    </section>
);

export default Intro;
