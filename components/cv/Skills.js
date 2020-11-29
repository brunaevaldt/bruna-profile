import styles from "./skills.module.css";

const Skills = ({ skills }) => (
    <section className={styles.skills}>
        <h4>Skills</h4>
        <div>
            {skills.map((skill) => (
                <div key={skill.name} className={styles.skillItem}>
                    <p>{skill.name}</p>
                    <ol>
                        {skill.keywords.map((keyword) => (
                            <li key={keyword} className={styles.skillKeyword}>
                                {keyword}
                            </li>
                        ))}
                    </ol>
                </div>
            ))}
        </div>
    </section>
);

export default Skills;
