import "./About.css";
import profile from "../../../assets/profile-removebg-preview.png";

const About = () => {
  return (
    <main className="about-wrapper">
      <div className="about-basic">
        <div className="profile-img">
          <img src={profile} alt="profile" />
        </div>
        <div className="profile-info">
          <h1>Richard Trofimov</h1>
          <div className="animated-occupation">
            I am a <span></span>
          </div>
        </div>
      </div>
      <div
        style={{
          fontSize: "14px",
          textAlign: "center",
          color: "rgba(192, 193, 193, 0.522)",
        }}
      >
        After dedicating countless hours to mastering programming, I've emerged
        as a proficient full-stack developer. My journey has equipped me with
        the skills to dive into the digital world, ready to tackle challenges
        and craft solutions for my clients. Let's navigate the complexities of
        technology together and bring your digital aspirations to life.
      </div>
    </main>
  );
};

export default About;
