import styles from "./projectItem.module.css";

const ProjectItem = ({ project }) => (
    <div className={styles.projectItem}>
        <h3>{project.role}</h3>
        <p>{project.description}</p>
        <ProjectItemCompany company={project.company} />
    </div>
);

export default ProjectItem;

const ProjectItemCompany = ({ company }) => (
    <div className={styles.projectItemCompany}>
        <img src={company.logo} alt={company.name} />
        <p>{company.description}</p>
    </div>
);
