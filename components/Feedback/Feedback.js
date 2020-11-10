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
            "A pleasure to work with in both her roles as scrum master and tester...",
        name: "Ioannis",
        role: "iOS Developer",
    },
    {
        description:
            "Bruna not only ensures quality, she also mediates for better team dynamics.",
        name: "Giwan",
        role: "Front-end Developer",
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
                    <label>
                        {feedback.name} - {feedback.role}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default Feedback;
