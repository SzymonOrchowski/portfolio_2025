import React from 'react';
import styles from './Skills.module.scss';
import SkillsSphere from '../common/SkillsSphere';

const Skills = () => {
  const leftSkills = ['JavaScript', 'NodeJS', 'ReactJS', 'HTML', 'CSS', 'SQL', 'Git'];
  const rightSkills = ['Express.js', 'Firebase', 'Jest', 'PostgreSQL', 'Mocha', 'Three.js', 'npm'];

  return (
    <div className={styles.skillsContainer}>
      <header>
        <h1>Skills</h1>
      </header>
      <div className={styles.skillsMain}>
        <div className={styles.skillsColumn}>
          <ul>
            {leftSkills.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </div>
        <div className={styles.skillsCenter}>
          <SkillsSphere />
        </div>
        <div className={styles.skillsColumn}>
          <ul>
            {rightSkills.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
