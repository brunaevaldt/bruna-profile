import React, { useState } from "react";
import styles from "./postIt.module.css";
import Image from "next/image";

const card1Data = [
    {
        img: "/images/cypress-logo.png",
        imgDescription: "cypress logo",
        imgSize: [121, 41],
        description:
            "I started using cypress.io at Edia and loved it's ease of use",
    },
    {
        img: "/images/selenium-logo.png",
        imgDescription: "selenium logo",
        imgSize: [157, 39],
        description: "while experienced with it, I would prefer Cypress",
    },
    {
        img: "/images/k6-logo.png",
        imgDescription: "cypress logo",
        imgSize: [51, 51],
        description: "K6.io helped me pickup performance testing at Chama",
    },
];

const Card1 = () => (
    <div className={styles.postIt}>
        {card1Data.map((cardItem) => (
            <div key={cardItem.description} className={styles.card1Item}>
                <Image src={cardItem.img} alt={cardItem.imgDescription} width={cardItem.imgSize[0]} height={cardItem.imgSize[1]} />
                <div>{cardItem.description}</div>
            </div>
        ))}
    </div>
);

const Card2 = () => (
    <div className={styles.postIt}>
        She likes post-its.
        <br />
        <br />
        "I'm the designer. No Post-It": I said.
    </div>
);

const Card3 = () => (
    <div className={styles.postIt}>
        The couch is fine!
        <br />I actually like the couch.
        <br />
        You have to be willing to make sacrifices for your design.
        <br />
        :|
    </div>
);

const postItStackList = [<Card1 />, <Card2 />, <Card3 />];

const PostItStack = () => {
    const [index, updateIndex] = useState(0);
    const handleClick = () => {
        updateIndex(index >= postItStackList.length - 1 ? 0 : index + 1);
    };
    return (
        <div className={styles.postItStack} onClick={handleClick}>
            <div className={styles.postItSheet}>{postItStackList[index]}</div>
        </div>
    );
};

export default PostItStack;
