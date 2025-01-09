"use client";

import Link from "next/link";
import styles from "./Home.module.css";
import aboutImg from "./images/about.jpg";
import urbanImg from "./images/Urbanization.webp"; // Add this image in your folder
import growthImg from "./images/growth.png"; // Add this image in your folder
import solutionsImg from "./images/solutions.jpg"; // Add this image in your folder
import Image from "next/image";

const Home = () => {
  return (
    <main className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.overlay}>
          <h1 className={styles.heroTitle}>Welcome to Urbanization in Freetown</h1>
          <p className={styles.heroText}>
            Exploring the Impact of Urbanization and Population Growth on the City
            of Freetown.
          </p>
        </div>
      </header> 

      <section className={styles.intro}>
        <h2 className={styles.introTitle}>About This Project</h2>
        <div className={styles.introContent}>
          <div className={styles.introText}>
          <p className="pb-8 px-0 leading-7">
              This website delves into the multifaceted issues and prospects that
              urbanization and population growth present in Freetown, Sierra Leone. 
              Our analysis is grounded in a comprehensive examination of how these 
              dynamics are reshaping the citys socio-economic fabric and environmental 
              landscape.
            </p>
            <hr />
            <p className="pt-8 px-0 leading-7">
              Urbanization in Freetown has accelerated rapidly, driven by factors such 
              as economic opportunities, rural-to-urban migration, and natural population 
              increase. This growth, while offering potential benefits like enhanced 
              economic activity and improved infrastructure, also poses significant 
              challenges. We explore how these challenges manifest in areas such as 
              housing shortages, transportation congestion, and environmental degradation.
            </p>
            
          </div>
          <div className={styles.introImage}>
            <Image src={aboutImg} alt="Urbanization" />
          </div>
        </div>
      </section>

{/* Key Issues Section */}
    <section className={styles.keyIssues}>
        <h2 className={styles.sectionTitle}>Key Issues of Urbanization</h2>
        <div className={styles.issuesGrid}>
          <div className={styles.issueCard}>
            <Image src={urbanImg} alt="Housing Crisis" className={styles.issueImage} />
            <h3 className={styles.issueTitle}>Housing Shortages</h3>
            <p className={styles.issueText}>
              The influx of people has resulted in overcrowded living conditions and a lack of affordable housing.
            </p>
          </div>
          <div className={styles.issueCard}>
            <Image src={growthImg} alt="Transportation" className={styles.issueImage} />
            <h3 className={styles.issueTitle}>Transportation Congestion</h3>
            <p className={styles.issueText}>
              Traffic congestion has worsened as the city&apos;s infrastructure struggles to accommodate the growing population.
            </p>
          </div>
          <div className={styles.issueCard}>
            <Image src={solutionsImg} alt="Environmental Impact" className={styles.issueImage} />
            <h3 className={styles.issueTitle}>Environmental Degradation</h3>
            <p className={styles.issueText}>
              Rapid urbanization is leading to deforestation, poor waste management, and increased pollution.
            </p>
          </div>
        </div>
    </section>

      {/* Research Findings Section */}
      <section className={styles.researchFindings}>
  <h2 className={styles.sectionTitle}>Research Findings</h2>
  <div className={styles.researchContent}>
    <p>
      Our research on urbanization in Freetown sheds light on the socio-economic 
      and environmental challenges the city faces due to rapid population growth. 
      Here are key findings that address these issues and propose actionable solutions.
    </p>

    <div className={styles.findingsCards}>
      <div className={styles.findingCard}>
        <h3 className={styles.findingTitle}>Infrastructure Deficiency</h3>
        <p className={styles.findingText}>
          There is an urgent need for investment in housing and transportation 
          to address the growing demand. Our research identifies critical areas 
          for development that will ensure sustainable growth.
        </p>
      </div>
      
      <div className={styles.findingCard}>
        <h3 className={styles.findingTitle}>Environmental Sustainability</h3>
        <p className={styles.findingText}>
          Rapid urban expansion has led to deforestation, flooding, and 
          inadequate waste management. Our proposed solutions focus on 
          environmental conservation and the adoption of green technologies.
        </p>
      </div>

      <div className={styles.findingCard}>
        <h3 className={styles.findingTitle}>Social Services</h3>
        <p className={styles.findingText}>
          A lack of access to healthcare, education, and sanitation is evident 
          in many parts of the city. Expanding these services is crucial to 
          improving the quality of life for residents and reducing urban poverty.
        </p>
      </div>
    </div>
  </div>
      </section>

      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>Learn More</h2>
        <p>
          Explore our in-depth analysis, research, and findings on how urbanization
          is shaping the future of Freetown. From its impact on infrastructure to
          the environment, we cover it all.
        </p>
        <Link href="/about" className={styles.ctaBtn}>
          Learn More
        </Link>
      </section>  
    </main>
  );
};

export default Home;
