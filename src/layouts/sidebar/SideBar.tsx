import React, { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IMenus } from "../Layout";
import styles from "./SideBar.module.css";

type SideBarProps = {
  sideBarMenu: IMenus[];
};

const SideBar: FC<SideBarProps> = ({
  sideBarMenu,
}) => {
  const pathName = usePathname();

  return (
    <div
      className={`${styles.sidebar} ${styles.sidebarExpanded}`}
    >
      <div className={styles.sidebarContent}>
        <ul className={styles.menuList}>
          {sideBarMenu.map((item, index) => (
            <li key={index}>
              <Link
                href={item.ref}
                className={`${styles.menuItem} ${pathName === item.ref ? styles.menuItemActive : ""
                  } ${styles.menuItemExpanded}`}
                title={item.label}
              >
                <div className={styles.iconContainer}>
                  {item.icon}
                </div>
                <span className={styles.menuLabel}>
                  {item.label}
                </span>

              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
