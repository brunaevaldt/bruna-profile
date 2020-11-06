import styles from "./feedback.module.css";

const feedbackData = [
    {
        description:
            "Brings the team together and goes beyond her roles and responsibilities",
        name: "Anna",
        role: "Product Owner",
    },
    {
        description:
            "Bruna likes to, not only test and ensure quality, but also mediates between developers.",
        name: "Giwan",
        role: "Front-end Developer",
    },
    {
        description:
            "A pleasure to work with in both her roles as scrum master and tester...",
        name: "Ioannis",
        role: "iOS Developer",
    },
];

const Feedback = () => {
    return (
        <div className={styles.feedbackContainer}>
            {feedbackData.map((feedback) => (
                <div key={feedback.description} className={styles.feedbackItem}>
                    <div className={styles.feedbackDescription}>
                        {feedback.description}
                    </div>
                    <label>{feedback.name}</label>
                    <label>{feedback.role}</label>
                </div>
            ))}
        </div>
    );
};

export default Feedback;
