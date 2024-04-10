import React from "react";
import styles from "./Sidebar.module.css";
import { menuConfig } from "../../helpers/menu";
import { MdAccountCircle } from "react-icons/md";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarBrandBox}></div>

      <div className={styles.wrapperContainer}>
        <div className={styles.listWrapper}>
          {menuConfig.map((menuItem) => (
            <div key={menuItem.id} className={styles.text}>
              {menuItem.icon}
              {menuItem.name}
            </div>
          ))}
        </div>

        <div className={styles.userName}>
          <span className={styles.text}>
            <MdAccountCircle />
            User Name
          </span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
