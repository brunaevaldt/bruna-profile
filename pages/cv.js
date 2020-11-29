import MetaHead from "../components/MetaHead/MetaHead";
import CvHeader from "../components/cv/CvHeader";
import CvPhoto from "../components/cv/CvPhoto";
import CvSummary from "../components/cv/CvSummary";
import Skills from "../components/cv/Skills";
import styles from "../styles/cv.module.css";
import cvdata from "../components/cv/resume.json";

const Cv = () => (
    <article className={styles.cv}>
        <MetaHead />

        <CvHeader info={cvdata.basics} />
        <CvPhoto imgUrl={cvdata.basics.image} />
        <main>
            <CvSummary summary={cvdata.basics.summary} />
        </main>
        <aside>
            <Skills skills={cvdata.skills} />
        </aside>
    </article>
);

export default Cv;
