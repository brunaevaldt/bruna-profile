import ProjectItem from "./ProjectItem";
import styles from "./projects.module.css";

const projects = [
    {
        role: "Ensure stability of iOS & Android apps",
        description:
            "Write test ideas for user stories based on acceptance criteria. Kick off API test automation with Cypress to reduce manual regression testing. Coached the team and junior team members making quality everyone’s responsibility.",
        company: {
            logo: "/images/chama-logo.png",
            name: "Chama The App",
            description:
                "Gas bottle delivery app. Allows users to get the best prices from their preferred suppliers. ",
        },
    },
    {
        role: "Connected learning Test Engineer",
        description:
            "As a test engineer in a Scrum team, I write and maintain automated tests using Selenium Webdriver and C#, as well as Cypress in some cases. I also perform manual tests of new functionality. ",
        company: {
            logo: "/images/snappet-logo.png",
            name: "Snappet",
            description: "Online learning app before it was cool. ",
        },
    },
];

const Projects = () => (
    <section className={styles.projects}>
        <h2>Projects</h2>
        {projects.map((p) => (
            <ProjectItem key={p.role} project={p} />
        ))}
    </section>
);

export default Projects;
