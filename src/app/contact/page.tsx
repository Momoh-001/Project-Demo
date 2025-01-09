"use client";

import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <main className={styles.container}>
      <section className={styles.contactSection}>
        <h1 className={styles.contactTitle}>Get in Touch</h1>
        <p className={styles.contactText}>
          We&apos;d love to hear from you! Whether you have questions about our work on urbanization and population growth in Freetown, or you want to collaborate with us, feel free to reach out using the form below.
        </p>

        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>Your Name</label>
            <input type="text" id="name" className={styles.formInput} placeholder="Enter your name" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>Your Email</label>
            <input type="email" id="email" className={styles.formInput} placeholder="Enter your email" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>Message</label>
            <textarea id="message" className={styles.formTextarea} placeholder="Write your message here" />
          </div>

          <button type="submit" className={styles.submitBtn}>Send Message</button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
