import styles from "./projectItem.module.css";
import Image from "next/image";

const ProjectItem = ({ project }) => (
    <div className={styles.projectItem}>
        <ProjectItemCompany company={project.company} />
        <article>
            <h3 className={styles.projectItemTitle}>{project.role}</h3>
            <p className={styles.projectItemDescription}>
                {project.description}
            </p>
        </article>
    </div>
);

export default ProjectItem;

const ProjectItemCompany = ({ company }) => (
    <div className={styles.projectItemCompanyContainer}>
        <div className={styles.projectItemCompany}>
            <div className={styles.projectItemImageContainer}>
                <Image
                    className={styles.projectItemImage}
                    src={company.logo}
                    alt={company.name}
                    width={company.logoSize[0]}
                    height={company.logoSize[1]}

                />
            </div>
            <p className={styles.projectItemCompanyDescription}>
                {company.description}
            </p>
        </div>
    </div>
);
