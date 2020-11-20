import { useState } from "react";
import styles from "./profileImage.module.css";

const ProfileImage = () => {
    const [isText, updateImage] = useState(false);
    const handleClick = () => {
        updateImage(!isText);
    };
    if (isText) {
        return (
            <div onClick={handleClick} className={styles.profileImageText}>
                <span>
                    I'm Bruna and this is "My Toori"
                    <br />
                    <sup>It means my story in Surinamese</sup>
                </span>
            </div>
        );
    }
    return (
        <img
            alt="Bruna Evaldt Carlos profile"
            src="/images/bruna-profile.png"
            onClick={handleClick}
        />
    );
};

export default ProfileImage;
