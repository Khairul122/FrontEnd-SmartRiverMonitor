import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.loginForm}>
          <h1 className={styles.title}>WELCOME TO SMART RIVER MONITOR</h1>
          <p className={styles.subtitle}>Sign into your account</p>
          <form action="#" method="POST">
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              id="email"
              type="email"
              className={styles.input}
              placeholder="Input your email"
              // required
            />
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              id="password"
              type="password"
              className={styles.input}
              placeholder="Input your password"
              // required
            />
            <a href="#" className={styles.forgotPassword}>
              Forgot password?
            </a>
            <Link
              href="/home"
              style={{ textDecoration: "none", color: "black" }}
            >
            <button type="submit" className={styles.loginButton}>
              LOG IN
            </button>
            </Link>
          </form>
        </div>
      </div>
      <div className={styles.imageContainer}></div>
    </div>
  );
}
