import clsx from "clsx";
import React from "react";
import styles from "./index.module.scss";

function Banner() {
  return <div className={clsx(styles["banner"], "h-2/5 ")}></div>;
}

export default Banner;
