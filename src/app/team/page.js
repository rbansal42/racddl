'use client'
import Image from 'next/image';
import styles from './team.module.css';

const Team = () => {
    const teamMembers = [
      {
        name: "Rtr. Rajat Kapoor",
        position: "Immediate Past President",
        image: "rajat.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "Ayush Aggarwal",
        position: "Club President",
        image: "ayush.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ];

    const coreMembers = [
        {
          name: "Rahul Bansal",
          position: "Secretary",
          image: "/rahul.png", // Dummy image
        },
        {
          name: "Maanya Jain",
          position: "Vice President",
          image: "/maanya.png", // Dummy image
        },
        {
          name: "Kanan Mittal",
          position: "Joint Secretary",
          image: "/kanan.png", // Dummy image
        },
        {
          name: "Chirangini Oberoi",
          position: "Cheif-Aid to President",
          image: "/maanya.png", // Dummy image
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
        <div className={styles.coreTeamGrid}>
        {coreMembers.map((coreMember, index) => (
          <div className={styles.coreTeamMember} key={index}>
            <div className={styles.squareContainer}>
              <h2 className={styles.coreMemberName}>{coreMember.name}</h2>
              <h3 className={styles.coreMemberPosition}>{coreMember.position}</h3>
            </div>
            <img src={coreMember.image} alt={coreMember.name} className={styles.coreMemberImage} />
          </div>
        ))}
      </div>
      </div>
    );
  };

  export default Team;