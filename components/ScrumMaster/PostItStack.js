import React, { useState } from "react";
import styles from "./postItStack.module.css";

const textList = [
    "Having a difficult conversation is better than no conversation",
    "Sometimes 'no conversation' is really what a guy wants.",
    "Don’t tell her I said that though. ",
    "You’re going to tell her, aren’t you?",
];

const PostItSheet = () => {
    const [index, updateIndex] = useState(0);
    const handleClick = () => {
        const val = index >= textList.length - 1 ? 0 : index + 1;
        updateIndex(val);
    };
    return (
        <div className={styles.postItStack} onClick={handleClick}>
            <div className={styles.postItSheet}>{textList[index]}</div>
        </div>
    );
};

export default PostItSheet;
