"use client";

import React, { Suspense } from "react";
import styles from "./Layout.module.css";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import StyleIcon from '@mui/icons-material/Style';
import SideBar from "./sidebar/SideBar";

export interface IMenus {
  id: number;
  label: string;
  icon: React.JSX.Element;
  ref: string;

}


export const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {

  const menu: IMenus[] = [
    {
      id: 0,
      label: "Expenses",
      icon: <MonetizationOnIcon />,
      ref: "/expenses",
    },
    {
      id: 1,
      label: "Cards",
      icon: <StyleIcon />,
      ref: "/cards",
    },
  ];

  return (
    <Suspense>
      <div className={styles.container}>
        <div className={styles.content}>
          <div
            className={`${styles.sidebar} ${styles.group} ${styles.sidebarExpanded}`}
          >
            <SideBar
              sideBarMenu={menu}
            />
          </div>
          <div
            className={`${styles.mainContent} ${styles.mainContentExpanded}`}
          >
            {children}
          </div>
        </div>
      </div>
    </Suspense>
  );
};
