import { useState } from "react";
import styles from "./modules/Header.module.css";
import { AiOutlineSetting, AiFillSetting } from "react-icons/ai";

function Header() {
  const [settingButtonHover, setSettingsButtonHover] = useState(false);

  return (
    <header className={styles.header}>
      Sliding Block
      <button
        className={styles.settingsButton}
        onMouseEnter={() => setSettingsButtonHover(true)}
        onMouseLeave={() => setSettingsButtonHover(false)}
      >
        {settingButtonHover ? <AiFillSetting /> : <AiOutlineSetting />}
      </button>
    </header>
  );
}

export default Header;
