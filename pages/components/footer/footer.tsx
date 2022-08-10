import React from 'react';
import styles from './footer.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const getYear = () => {
    const d = new Date();
    return d.getFullYear();
  };
  return (
    <div id={styles.footer_styles}>
      <div className={styles.footer_column}>
        <b className={styles.footer_title}>About Me</b>
        <p className={styles.footer_text}>
          American software developer living in Germany.{' '}
        </p>
        <u className={styles.footer_text}>
          <a href="https://unruffled-yonath-e1bcf6.netlify.app/">Learn More</a>
        </u>
      </div>
      <div className={styles.footer_column}>
        <a
          className={styles.footer_text}
          href="https://www.termsfeed.com/public/uploads/2019/04/privacy-policy-template.pdf"
        >
          Private Policy
        </a>
        <a
          className={styles.footer_text}
          href="https://unruffled-yonath-e1bcf6.netlify.app/"
        >
          Sitemap
        </a>
        <a className={styles.footer_text}>{`© ${getYear()} Charnoky Media`}</a>
      </div>
      <div className={`${styles.footer_column} ${styles.icons}`}>
        <b className={styles.footer_title}>Connect With Me</b>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/ryan-charnoky-motivated-developer/">
              <FontAwesomeIcon
                id={styles.linkedin_icon}
                icon={faLinkedin}
                className={`${styles.fab}`}
                aria-hidden="true"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/motivated-developer">
              <FontAwesomeIcon
                id={styles.github_icon}
                icon={faGithub}
                className={`${styles.fab}`}
                aria-hidden="true"
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ryan_charnoky/">
              <FontAwesomeIcon
                id={styles.instagram_icon}
                icon={faInstagram}
                className={`${styles.fab}`}
                aria-hidden="true"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
