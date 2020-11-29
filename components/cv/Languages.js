import styles from "./languages.module.css";

const Languages = ({ languages }) => (
    <section className={styles.languages}>
        <h4>Languages</h4>
        <ol>
            {languages.map((language) => (
                <li className={styles.languageItem}>
                    <p>{language.name}</p>
                    <label>{language.level}</label>
                </li>
            ))}
        </ol>
    </section>
);

export default Languages;
