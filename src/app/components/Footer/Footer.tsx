"use client";

import Link from "next/link";
import styles from "./Footer.module.css";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"; // Importing social media icons

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logo}>
          <h2>Urbanization Project</h2>
          <p>Exploring the Impact of Urbanization in Freetown</p>
        </div>

        <div className={styles.footerLinks}>
          <h3>Quick Links</h3>
          <ul className={styles.linkList}>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/documentation">Documentation</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className={styles.socialLinks}>
          <h3>Follow Us</h3>
          <ul className={styles.socialList}>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className={styles.socialIcon} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className={styles.socialIcon} />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className={styles.socialIcon} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Urbanization Project. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
