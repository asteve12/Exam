import React from 'react';

//styles
import styles from './Header.css';

//Icons
import { FiSearch } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';

function Header(props) {
  return (
    <header className={styles.MainHeader}>
      <div onClick={props.showModalHandler} className={styles.ModalBtn}>
        <GiHamburgerMenu className={styles.Hamburger}></GiHamburgerMenu>
      </div>

      <div className={styles.MainInputWrapper}>
        <div className={styles.MainIconBox}>
          <FiSearch></FiSearch>
        </div>
        <input
          className={styles.MainInputBox}
          type='text'
          placeholder='Search'
        />
      </div>
    </header>
  );
}

export default Header;
