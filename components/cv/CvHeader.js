import styles from "./cvheader.module.css";

const CvHeader = ({ info }) => (
    <header className={styles.cvheader}>
        <h1>{info.name}</h1>
        <h2>{info.label}</h2>
        <address className={styles.address}>
            <span>{info.location.city}</span>
            <span>{info.location.countryCode}</span>
            <span>{info.phone}</span>
            <a href={`mailto:${info.email}`}>{info.email}</a>
        </address>
    </header>
);

export default CvHeader;
