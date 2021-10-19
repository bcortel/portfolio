import clsx from "clsx";
import React from "react";
import styles from "./index.module.scss";

function Footer() {
  return (
    <footer className={clsx("py-14 h-96", styles["footer"])}>
      <div className="container mx-auto"></div>
    </footer>
  );
}

export default Footer;
