import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">🎓 EduPortal</Link>
      </div>
      <div className={styles.profile}>
        <span className={styles.avatar}>TA</span>
        <span className={styles.username}>Tadesse Asrie</span>
      </div>
    </nav>
  );
}
