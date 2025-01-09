"use client";

import Link from "next/link";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <main className={styles.container}>
      <section className={styles.servicesSection}>
        <h1 className={styles.servicesTitle}>Our Services</h1>
        <p className={styles.servicesText}>
          We provide a range of services to help manage and analyze the impacts of urbanization in Freetown. Our team is dedicated to offering insightful data analysis, urban planning consultations, and environmental impact assessments.
        </p>

        <div className={styles.servicesList}>
          <div className={styles.serviceItem}>
            <h2 className={styles.serviceTitle}>Urban Data Analysis</h2>
            <p className={styles.serviceDescription}>
              We help local governments and organizations collect and analyze data on population growth, infrastructure development, and more.
            </p>
          </div>

          <div className={styles.serviceItem}>
            <h2 className={styles.serviceTitle}>Consultation on Urban Planning</h2>
            <p className={styles.serviceDescription}>
              Our expert consultants offer guidance on sustainable urban planning to ensure the city&apos;s development is both inclusive and environmentally friendly.
            </p>
          </div>

          <div className={styles.serviceItem}>
            <h2 className={styles.serviceTitle}>Environmental Impact Assessments</h2>
            <p className={styles.serviceDescription}>
              We conduct comprehensive environmental impact assessments to measure the effects of urban growth and recommend mitigation strategies.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>Interested in Our Services?</h2>
        <p className={styles.ctaText}>
          Contact us to learn more about how we can assist in making Freetown&apos;s urban growth sustainable and beneficial to all.
        </p>
        <Link href="/contact" className={styles.ctaBtn}>
          Contact Us
        </Link>
      </section>
    </main>
  );
};

export default Services;
