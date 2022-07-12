import styles from "./cvphoto.module.css";

const CvPhoto = ({ imgUrl }) => (
    <div className={styles.cvphoto}>
        <img src={imgUrl} alt="Bruna profile" width="200px" height="200px" />
    </div>
);

export default CvPhoto;
