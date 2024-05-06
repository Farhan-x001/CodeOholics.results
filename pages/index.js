// components/LandingPage.js
import styles from '../styles/landing.module.css'; // Corrected the import path
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const LandingPage = () => {
  return (
    <div className={styles.body}>
      <div className={styles.healthkare}>CodeOholics </div>
    <div className={styles.centered}>
      <h1 className={styles.brandLabel}>Membership drive Results-2k24</h1>
      <p className={styles.para}>please click down to view details</p>
      <div className={styles.linksContainer}>
        <div className={styles.linkBox}>
          <Link href="/home">
          <div className ={styles.img1}>
          <Image src="/images/doctorsicon.png" alt="Hospital Icon" width={100} height={100} className={styles.image1} />
              <h4>Results</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LandingPage;
