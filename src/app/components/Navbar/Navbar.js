"use client";
import "./Navbar.module.css";

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">Urbanization Freetown</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <style jsx>{`
        /* Navbar styling */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.8rem 2rem;
          background-color: #111827;
          color: white;
          font-family: Arial, sans-serif;
        }

        /* Logo */
        .logo a {
          color: #fff;
          font-size: 1.5rem;
          font-weight: bold;
          text-decoration: none;
        }

        /* Navigation links container */
        .nav-links {
          list-style: none;
          display: flex;
          gap: 2rem;
        }

        /* Individual navigation link */
        .nav-links li {
          margin: 0;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          font-size: 1rem;
          transition: color 0.3s ease;
        }

        .nav-links a:hover {
          color: #00bcd4; /* Color change on hover */
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .nav-links {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
