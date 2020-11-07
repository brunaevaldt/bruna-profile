import React, { useState } from "react";
import styles from "./postIt.module.css";

const card1Data = [
    {
        img: "/images/cypress-logo.png",
        imgDescription: "cypress logo",
        description:
            "I started using cypress.io at Edia and loved it's ease of use",
    },
    {
        img: "/images/selenium-logo.png",
        imgDescription: "selenium logo",
        description: "while experienced with it, I would prefer Cypress",
    },
    {
        img: "/images/k6-logo.png",
        imgDescription: "cypress logo",
        description: "It helped me pickup performance testing at Chama",
    },
];

const Card1 = () => (
    <div className={styles.postIt}>
        {card1Data.map((cardItem) => (
            <div key={cardItem.description} className={styles.card1Item}>
                <img src={cardItem.img} alt={cardItem.imgDescription} />
                <div>{cardItem.description}</div>
            </div>
        ))}
    </div>
);

const Card2 = () => (
    <div className={styles.postIt}>
        She wanted post-its. I said:,
        <br />
        <br />
        I'm the designer.
        <br />
        No Post-It.
    </div>
);

const Card3 = () => (
    <div className={styles.postIt}>
        The couch is fine!
        <br />I actually like the couch. :|
    </div>
);

// TODO: not sure why the order of the list is so weird.
// It works though.
const PostItStack = () => {
    const [postItStackList, updateList] = useState([
        <Card2 />,
        <Card3 />,
        <Card1 />,
    ]);
    const handleClick = () => {
        const listCopy = [...postItStackList];
        const sheet = listCopy.shift();
        listCopy.push(sheet);
        updateList([...listCopy]);
    };
    return (
        <div className={styles.postItStack} onClick={handleClick}>
            {postItStackList.map((item, i) => (
                <div key={`card${i}`}>{item}</div>
            ))}
        </div>
    );
};

export default PostItStack;
