'use client'
import Image from 'next/image';
import styles from './team.module.css';

const Team = () => {
    const teamMembers = [
      {
        name: "Rtr. Rajat Kapoor",
        position: "Immediate Past President",
        image: "1.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "Ayush Aggarwal",
        position: "Club President",
        image: "2.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ];
  
    return (
      <div className={styles.teamContainer}>
        <h1 className={styles.heading}>Meet Our Team</h1>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div className={styles.teamMember} key={index}>
              <img src={member.image} alt={member.name} className={styles.memberImage} />
              <div className={styles.memberInfo}>
                <h2 className={styles.memberName}>{member.name}</h2>
                <h3 className={styles.memberPosition}>{member.position}</h3>
                <p className={styles.memberDescription}>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Team;