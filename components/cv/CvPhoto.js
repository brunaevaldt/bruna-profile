import styles from "./cvphoto.module.css";
import Image from "next/image";

const CvPhoto = ({ imgUrl }) => (
    <div className={styles.cvphoto}>
        <Image src={imgUrl} alt="Bruna profile" width={300} height={300} />
    </div>
);

export default CvPhoto;
