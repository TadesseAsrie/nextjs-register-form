import React from "react";
import Link from "next/link";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <ul className={styles.menuList}>
        <li>
          <Link href="/" className={styles.menuItem}>
            🏠 Home Dashboard
          </Link>
        </li>
        <li>
          <Link href="/register" className={styles.menuItem}>
            📝 Register Student
          </Link>
        </li>
      </ul>
    </aside>
  );
}
