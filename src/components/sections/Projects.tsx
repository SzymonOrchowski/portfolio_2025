import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects, Project } from '@/data/projects'; // Adjusted path
import styles from './Projects.module.scss';
import iconmonstrGithub from '@/img/icons/iconmonstrGithub.png'; // Adjusted path

const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      <header>
        <h1>My Projects</h1>
      </header>
      <div className={styles.projectsAll}>
        {projects.map((project: Project, index: number) => (
          <div className={styles.projectCardContainer} key={project.id}>
            {index % 2 === 0 && (
              <div className={styles.projectCardImageDiv}>
                <Image
                  className={styles.projectCardImage}
                  src={`/img/dev-projects${project.imageLink}`} // Path needs to be from /public
                  alt={project.name}
                  width={500}
                  height={300}
                  objectFit="cover"
                />
              </div>
            )}
            <div className={styles.projectCardDescription}>
              <div className={styles.projectName}>{project.name}</div>
              <div className={styles.projectSubheading}>
                {project.subheading}
              </div>
              <div className={styles.projectDescription}>
                {project.description}
              </div>
              <div className={styles.projectLinks}>
                {project.deployedLink && (
                  <Link
                    href={project.deployedLink}
                    className={styles.projectRunAppButton}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    App
                  </Link>
                )}
                <Link
                  href={project.repoLink}
                  className={styles.projectRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={iconmonstrGithub}
                    alt="Github Link"
                    width={40}
                    height={40}
                  />
                </Link>
              </div>
            </div>
            {index % 2 === 1 && (
              <div className={styles.projectCardImageDiv}>
                <Image
                  className={styles.projectCardImage}
                  src={`/img/dev-projects${project.imageLink}`}
                  alt={project.name}
                  width={500}
                  height={300}
                  objectFit="cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
