'use client'
import Image from 'next/image';
import styles from './team.module.css';

const TeamClient = () => {
    const teamMembers = [
      {
        name: "Rtr. Rajat Kapoor",
        position: "Immediate Past President",
        image: "/rajat.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "Ayush Aggarwal",
        position: "Club President",
        image: "/ayush.png",
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
          image: "/chirangini.png", // Dummy image
        },
      ];

      // const advisors = [
      //   {
      //     name: "Advisor 1",
      //     position: "Senior Advisor",
      //     image: "/rahul.png", // Dummy image
      //   },
      //   {
      //     name: "Advisor 2",
      //     position: "Senior Advisor",
      //     image: "/rahul.png", // Dummy image
      //   },
      //   {
      //     name: "Advisor 3",
      //     position: "Senior Advisor",
      //     image: "/rahul.png", // Dummy image
      //   },
      //   {
      //     name: "Advisor 4",
      //     position: "Senior Advisor",
      //     image: "/rahul.png", // Dummy image
      //   },
      // ];


  // const directors = [
  //   {
  //     name: "Director 1",
  //     position: "Director",
  //     image: "/rahul.png", // Dummy image
  //   },
  //   {
  //     name: "Director 2",
  //     position: "Director",
  //     image: "/rahul.png", // Dummy image
  //   },
  //   {
  //     name: "Director 3",
  //     position: "Director",
  //     image: "/rahul.png", // Dummy image
  //   },
  //   {
  //     name: "Director 4",
  //     position: "Director",
  //     image: "/rahul.png", // Dummy image
  //   },
  //   {
  //     name: "Director 5",
  //     position: "Director",
  //     image: "/rahul.png", // Dummy image
  //   },
  //   {
  //       name: "Director 6",
  //       position: "Director",
  //       image: "/rahul.png", // Dummy image
  //     },
  //     {
  //       name: "Director 7",
  //       position: "Director",
  //       image: "/rahul.png", // Dummy image
  //     },
  //     {
  //       name: "Director 8",
  //       position: "Director",
  //       image: "/rahul.png", // Dummy image
  //     },
  //     {
  //       name: "Director 9",
  //       position: "Director",
  //       image: "/rahul.png", // Dummy image
  //     },
  //     {
  //       name: "Director 10",
  //       position: "Director",
  //       image: "/rahul.png", // Dummy image
  //     },
  //     {
  //       name: "Director 11",
  //       position: "Director",
  //       image: "/rahul.png", // Dummy image
  //     },
  //     {
  //       name: "Director 12",
  //       position: "Director",
  //       image: "/rahul.png", // Dummy image
  //     },
  //     {
  //       name: "Director 13",
  //       position: "Director",
  //       image: "/rahul.png", // Dummy image
  //     },
  //     {
  //       name: "Director 14",
  //       position: "Director",
  //       image: "/rahul.png", // Dummy image
  //     },
  //     {
  //       name: "Director 15",
  //       position: "Director",
  //       image: "/rahul.png", // Dummy image
  //     },
  //   ];
  
    return (
      <div className={styles.teamContainer}>
        <h1 className={styles.heading}>Meet Our Team</h1>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div className={styles.teamMember} key={index}>
              <Image 
                src={member.image} 
                alt={member.name} 
                width={300}
                height={300}
                className={styles.memberImage} 
              />
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
            <Image 
              src={coreMember.image} 
              alt={coreMember.name} 
              width={200}
              height={200}
              className={styles.coreMemberImage} 
            />
          </div>
        ))}
      </div>

      
      {/* Advisory Section */}
      {/* <h1 className={styles.subheading}>Club Advisory</h1>
      <div className={styles.advisoryGrid}>
        {advisors.map((advisor, index) => (
          <div className={styles.advisoryMember} key={index}>
            <Image 
              src={advisor.image} 
              alt={advisor.name} 
              width={150}
              height={150}
              className={styles.advisoryImage} 
            />
            <h2 className={styles.advisoryName}>{advisor.name}</h2>
            <h3 className={styles.advisoryPosition}>{advisor.position}</h3>
          </div>
        ))}
      </div> */}

      {/* Directors Section */}
      {/* <h1 className={styles.subheading}>Board of Directors</h1>
      <div className={styles.directorsGrid}>
        {directors.map((director, index) => (
          <div className={styles.directorMember} key={index}>
            <Image 
              src={director.image} 
              alt={director.name} 
              width={120}
              height={120}
              className={styles.directorImage} 
            />
            <h2 className={styles.directorName}>{director.name}</h2>
            <h3 className={styles.directorPosition}>{director.position}</h3>
          </div>
        ))}
      </div> */}
      </div>
    );
  };
  
  export default TeamClient; 