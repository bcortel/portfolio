import React, { ReactNode } from "react";
import styles from "./index.module.scss";
import clsx from "clsx";
import Header from "./header";
import Footer from "./footer";
import Banner from "./banner";

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

function MainLayout({ children, className, style }: Props) {
  return (
    <div className={styles["layout"]}>
      <Header />
      <Banner />
      <main
        style={style}
        className={clsx(styles["content"], className, "leading-6 ")}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
