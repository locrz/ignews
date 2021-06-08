import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import styles from "./styles.module.scss";

export function SignInButton() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  function toggleButton() {
    setIsUserLoggedIn((prev) => !prev);
  }

  if (isUserLoggedIn) {
    return (
      <button
        className={styles.signInButton}
        type="button"
        onClick={toggleButton}
      >
        <FaGithub color="#84d361" />
        Lucas Oliveira
        <FiX color="#737380" className={styles.closeIcon} />
      </button>
    );
  }

  return (
    <button
      className={styles.signInButton}
      type="button"
      onClick={toggleButton}
    >
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}
