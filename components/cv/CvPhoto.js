import styles from "./cvphoto.module.css";

const CvPhoto = ({ imgUrl }) => (
    <div className={styles.cvphoto}>
        <img src={imgUrl} alt="Bruna profile" />
    </div>
);

export default CvPhoto;
