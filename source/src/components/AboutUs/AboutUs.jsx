import React from "react";
import "./AboutUs.css";
import Infographic1 from "../../assets/About Us/aboutus4.jpg";
import Infographic2 from "../../assets/About Us/aboutus5.webp";

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="AboutUs-container">
        <h1>FPT Climbing</h1>
        <div className="AboutUs-container-content">
          <p>
            Welcome to FPT Climbing - where the passion for conquering nature
            and peaks blend into an endless journey.
          </p>
          <img src={Infographic1}lt="Infographic 1" className="about-image" />
          <p>
            At FPT Climbing, we are not simply people who love climbing, but
            also people who believe that every mountain has a story, every peak
            a challenge, and every path is a journey of self-discovery. We are
            committed to providing the best products and services to those who
            crave exploration, from beginners to professional climbers.
          </p>
          <img src={Infographic2} alt="Infographic 2" className="about-image" />
          <h2 className="haha">Contact Information</h2>
          <div className="About-container-contact">
            <p className="About-container-border"></p>
            <p>123 ABC Street, XYZ District, Ho Chi Minh City, Vietnam</p>
            <p>Tel +84 123 456 789</p>
            <p>Email: support@FPT Climbing.com</p>
          </div>
        </div>
        <div className="About-container-about">
          <div className="">
            <p className="About-container-border">
              Interested in joining our team?
            </p>
            <p>We’re hiring! Visit FPT Climbing Careers portal.</p>
          </div>
          <div className="">
            <p className="About-container-border">
              Need help with our games or your FPT Climbing account?{" "}
            </p>
            <p>Visit our support center.</p>
          </div>
          <p className="About-container-border-question">
            Frequently Asked Questions
          </p>
        </div>
        <div className="About-question-contents">
          <div className="">
            <p className="About-container-border">Can I visit your studio?</p>
            <p>
              With an experienced and dedicated team, we understand the
              importance of careful preparation and safety in every trip. We
              constantly seek and develop high quality products, from climbing
              equipment, specialized clothing to training courses, to help you
              confidently overcome all challenges and conquer the peaks. new.
            </p>
          </div>
          <div className="">
            <p className="About-container-border">Do you offer internships?</p>
            <p>
              Internship opportunities, if available, will be posted on our
              careers portal.
            </p>
          </div>
          <div className="">
            <p className="About-container-border">
              Can I submit my game idea to you?
            </p>
            <p>
              We do not accept unsolicited submissions. Please refrain from
              sending us your ideas, as we cannot legally review them.
            </p>
          </div>
          <div className="">
            <p className="About-container-border">
              Can I create a fan site for your games?
            </p>
            <p>
              Absolutely! We encourage fans to create content based on our
              games. Please ensure you follow our Fan Content Policy.
            </p>
          </div>
          <div className="">
            <p className="About-container-border">
              Where can I play your games?
            </p>
            <p>
              Visit our downloads page to see where you can access our games
              like "Heroes of VNG" and "Legendary Battles."
            </p>
          </div>
          <div className="">
            <p className="About-container-border">
              Can I monetize gameplay videos featuring your games?
            </p>
            <p>Yes, we support the monetization of gameplay videos.</p>
          </div>
          <div className="">
            <p className="About-container-border">
            Alpine Ascents sponsor gaming tournaments?
            </p>
            <p>
              We currently do not offer sponsorships for gaming competitions and
              tournaments.
            </p>
          </div>
          <div className="">
            <p className="About-container-border">
            Alpine Ascents offer scholarships?
            </p>
            <p>We do not offer scholarships at this time.</p>
          </div>
          <div className="">
            <p className="About-container-border">
              Can I interview one of your developers for my school project?
            </p>
            <p>
              Due to high demand, we generally do not participate in student
              interviews. However, feel free to use the numerous interviews with
              our team members available online.
            </p>
          </div>
          <div className="">
            <p className="About-container-border">
              Can my company collaborate with you to create content based on
              your games?
            </p>
            <p>
              While we appreciate your interest, we are not looking for
              additional licensing partners at this time. Please refer to our
              Fan Content Policy for more information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
