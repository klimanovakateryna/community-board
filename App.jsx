import React from "react";
import "./App.css";
import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <div className="header">
        <h1>TECH EVENTS IN NEW YORK</h1>
      </div>
      <div className="cards-container">
        <Card
          imageUrl="./pictures/tech-up-for-women.jpg"
          imageAlt="Tech Event"
          title="Tech Up For Women Conference NYC"
          date="Tuesday, May 6"
          description="Join the 8th Annual Tech Up For Women Conference NYC on May 6, 2025, for a dynamic one-day event featuring tech insights, networking, and career advancement opportunities."
          buttonUrl="https://www.womentech.net/"
        />

        <Card
          imageUrl="./pictures/sbj-tech-week.jpg"
          imageAlt="Tech Event"
          title="SBJ Tech Conference"
          date="Wednesday, March 5"
          description="The SBJ Tech Conference brings together sports industry leaders to explore the latest trends and technologies shaping the future of sports."
          buttonUrl="https://www.thetimescenter.com/"
        />

        <Card
          imageUrl="./pictures/aj-summit-nyc.avif"
          imageAlt="Tech Event"
          title="AI Summit NYC"
          date="Thursday, May 15"
          description="AI Summit NYC bridges the gap between technology and other industries, offering valuable insights and practical knowledge for professionals from diverse backgrounds."
          buttonUrl="https://www.eventbrite.com/"
        />

        <Card
          imageUrl="./pictures/nyc_tech_biz_meetup.avif"
          imageAlt="NYC Tech & Biz Reporters Meetup Photo"
          title="NYC Tech & Biz Reporters Meetup"
          date="Wednesday, March 5"
          description="Join NYC tech and business reporters for an informal meetup with no agenda, no pressure, and a cash bar. Let's meet, laugh, and commiserate. If it's fun, we'll do it again!"
          buttonUrl="https://lu.ma/52cdum5u"
        />

        <Card
          imageUrl="./pictures/techfinance-networking-event.avif"
          imageAlt="New York Tech & Finance Networking Event Photo"
          title="New York Tech & Finance Networking Event"
          date="Wednesday, March 5"
          description="A focused event where innovation meets investment. Designed for tech enthusiasts, finance professionals, entrepreneurs, and industry leaders exploring the intersection of cutting-edge technology and financial opportunities."
          buttonUrl="https://www.eventbrite.ca/e/new-york-tech-finance-networking-event-tickets-1233881756549?aff=erelexpmlt"
        />

        <Card
          imageUrl="./pictures/brainstation-event.avif"
          imageAlt="BrainStation Event Photo"
          title="New York Tech Social | BrainStation Event"
          date="Wesnesday, March 19"
          description="New York Tech Social is the definitive networking event for the local community. Make new, meaningful connections over drinks in BrainStation’s state-of-the-art campus in the heart of SoHo."
          buttonUrl="https://www.eventbrite.com/e/new-york-tech-social-brainstation-event-tickets-1115815316649?aff=ebdssbdestsearch"
        />

        <Card
          imageUrl="./pictures/space-tech-summit.png"
          imageAlt="Space Tech Summit Photo"
          title="Space Tech Summit"
          date="Friday, September 19"
          description="A global gathering of entrepreneurs and innovators addressing humanity's challenges through space technology, connecting industry stakeholders with mainstream audiences and featuring 100 global speakers annually."
          buttonUrl="https://spacetechsummit.info/"
        />

        <Card
          imageUrl="./pictures/health-ai.jpeg"
          imageAlt="HealthNext AI 2025 Photo"
          title="HealthNext AI 2025"
          date="Monday, March 3"
          description="The HealthNext AI Summit returns to Roosevelt Island in New York City on March 3-4, 2025. Now in its third year, the 2025 Summit will dig deeper into the ways AI is transforming healthcare."
          buttonUrl="https://www.healthnextsummit.com/"
        />

        <Card
          imageUrl="./pictures/health-ai.jpeg"
          imageAlt="TechEmpowerED: K-12 Technology Summit Photo"
          title="TechEmpowerED: K-12 Technology Summit"
          date="Saturday, March 1"
          description="TechEmpowerED is an informative event designed to empower K-12 Charter and Independent schools through innovative technology solutions."
          buttonUrl="https://www.eventbrite.com/e/techempowered-k-12-technology-summit-tickets-1259554323889?aff=ebdssbdestsearch"
        />

        <Card
          imageUrl="./pictures/data-science-day.png"
          imageAlt="Data Science Day 2025 Photo"
          title="Data Science Day 2025"
          date="Wednesday, April 2"
          description="Annual Columbia event connecting industry/government with researchers. 2025 features keynote by Rick Rioboli (Comcast CTO), lightning talks, and 100+ demonstrations."
          buttonUrl="https://datascience.columbia.edu/event/data-science-day-2025/"
        />
      </div>
    </div>
  );
};

export default App;
