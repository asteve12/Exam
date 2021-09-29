import React from 'react';

import MobileLeftSidebar from '../../Sidebar/LeftSideBar/mobile/mobileLeftSidebar/MobileLeftSidebar';

//styles
import styles from './modal.css';
//components

function Modal(props) {
  return (
    <div
      className={props.show ? styles.ModalWrapper : styles.CloseModal}
      onClick={props.clicked}
    >
      <section className={styles.modalSection}>
        <div className={styles.modalContainer}>
          {/* <LeftSidebar></LeftSidebar> */}
          <MobileLeftSidebar></MobileLeftSidebar>
        </div>
      </section>
    </div>
  );
}

export default Modal;
