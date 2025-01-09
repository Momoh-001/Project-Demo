"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./About.module.css";
import aboutImg from "../images/about.jpg";
import migrationImg from "../images/migration.jpg"; // Add this image
import sustainabilityImg from "../images/sustainability.jpg"; // Add this image

const About = () => {
  return (
    <main className={styles.container}>
      <section className={styles.aboutSection}>
        <div className={styles.textContainer}>
          <h1 className={styles.aboutTitle}>About the Project</h1>
          <p className={styles.aboutText}>
            This project, titled &quot;Urbanization and Population Growth in Freetown: Challenges and Opportunities,&quot;
            explores how rapid urbanization is reshaping Freetown&apos;s socio-economic fabric and environmental landscape.
          </p>
          <p className={styles.aboutText}>
            The study investigates key areas such as housing, infrastructure, economic development, and environmental sustainability. 
            With an increasing population, this research sheds light on the pressures on the city&apos;s resources and offers solutions for future urban planning.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image src={aboutImg} alt="Urbanization in Freetown" className={styles.aboutImage} />
        </div>
      </section>

      {/* New Section: Migration and Urbanization */}
      <section className={styles.migrationSection}>
        <div className={styles.imageContainer}>
          <Image src={migrationImg} alt="Migration and Urbanization" className={styles.aboutImage} />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.sectionTitle}>Migration and Urbanization</h2>
          <p className={styles.aboutText}>
            Freetow&apos;s population growth is driven largely by rural-to-urban migration, with many moving to the city in search of economic opportunities. 
            However, this rapid influx of people has exacerbated housing shortages, increased demand for services, and strained existing infrastructure.
          </p>
          <p className={styles.aboutText}>
            Our research highlights the importance of integrated urban planning to address these challenges and ensure sustainable city growth.
          </p>
        </div>
      </section>

      {/* New Section: Environmental Sustainability */}
      <section className={styles.sustainabilitySection}>
        <div className={styles.textContainer}>
          <h2 className={styles.sectionTitle}>Environmental Sustainability</h2>
          <p className={styles.aboutText}>
            Rapid urbanization poses significant environmental risks, such as deforestation, pollution, and poor waste management.
            The research advocates for policies focused on environmental conservation to ensure that Freetown&apos;s urban growth is sustainable.
          </p>
          <p className={styles.aboutText}>
            Implementing green infrastructure and promoting eco-friendly practices are crucial steps toward achieving sustainability.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image src={sustainabilityImg} alt="Sustainability Efforts" className={styles.aboutImage} />
        </div>
      </section>

      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>Discover More</h2>
        <p className={styles.ctaText}>
          To explore our in-depth research, findings, and recommendations on urbanization in Freetown, visit our full project documentation.
        </p>
        <Link href="/research-document.pdf" target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
        View Documentation
        </Link>

      </section>
    </main>
  );
};

export default About;
