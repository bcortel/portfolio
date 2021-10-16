import clsx from "clsx";
import React from "react";
import styles from "./index.module.scss";

function Banner() {
  return <div id="banner" className={clsx(styles["banner"], "h-2/5 ")}></div>;
}

export default Banner;
