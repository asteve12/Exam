import React from 'react';
//styles
import styles from './SettingMain.css';
//Load
import Logo from '../../../assets/design/leftSidebar/headerImg.svg';
import SettingMobileHeader from '../../Sidebar/RightSidebar/Settings/SettingRightbar';
import RightSideBarMobile from '../../Sidebar/RightSidebar/mobile/RightSidebarmobile';

function SettingMain() {
  return (
    <div className={styles.SettingMain}>
      <h1>Settings</h1>

      {/* <RighSidebarMobile></RighSidebarMobile> */}
      <RightSideBarMobile></RightSideBarMobile>

      <div className={styles.MobileHeader}>
        <SettingMobileHeader></SettingMobileHeader>
      </div>
      <br></br>

      <section className={styles.InfoCard}>
        <header className={styles.CardHeader}>
          <h5>School Information</h5>
        </header>
        <hr />
        <br></br>
        <section className={styles.LogoBox}>
          <div className={styles.SettingName}>
            <div className={styles.SettingText}>
              <p className={styles.schoolName}>Name</p>

              <p>The Federal University of Technology, Akure</p>
            </div>
            <br></br>
            <div className={styles.SettingText}>
              <p className={styles.schoolName}>Address</p>

              <p>
                PMB 704, The Federal University of Technology Akure, Ondo State
                Nigera
              </p>
            </div>
          </div>

          <div className={styles.SettingLogo}>
            <p>Logo</p>
            <img src={Logo} alt='' className={styles.schoolLogo} />
          </div>
        </section>
      </section>
      <br></br>
      <section className={styles.personalCard}>
        <header className={styles.CardHeader}>
          <h5>Personal Information</h5>
        </header>
        <hr />
        <br />
        <section className={styles.personalBox}>
          <div className={styles.NameBox}>
            <h5>Name</h5>

            <p>Prof. Lagbaja Chinedu</p>
          </div>

          <div className={styles.NameBox}>
            <h5>D.O.B </h5>
            <p>01/01/1990</p>
          </div>
          <div className={styles.NameBox}>
            <h5>Email </h5>
            <p>lagbajachinedu@gmail.com</p>
          </div>
          <div className={styles.NameBox}>
            <h5>Password </h5>
            <p>********</p>
          </div>
          <div className={styles.NameBox}>
            <h5>Dept </h5>
            <p>Mechanical Engineering</p>
          </div>
          <div className={styles.NameBox}>
            <h5>Gender </h5>
            <p>Male</p>
          </div>
          <div className={styles.NameBox}>
            <h5>Phone </h5>
            <p>+234-810-123-4567</p>
          </div>
        </section>
      </section>
      <br></br>
      <section className={styles.personalCard}>
        <header className={styles.CardHeader}>
          <h5>General</h5>
        </header>
        <hr />
        <br />
        <section className={styles.genBox}>
          <div className={styles.generalBox}>
            <h5>Language </h5>

            <p>English (US)</p>
          </div>

          <div className={styles.generalBox}>
            <h5>Time zone </h5>
            <p>GMT +01:00 WAT</p>
          </div>
          <div className={styles.generalBox}>
            <h5>Autosave </h5>
            <p>Enabled</p>
          </div>
          <div className={styles.generalBox}>
            <h5>Course names </h5>
            <p>Full</p>
          </div>
          <div className={styles.generalBox}>
            <h5>Proctoring </h5>
            <p>Do not record</p>
          </div>
        </section>
      </section>

      <footer className={styles.settingFooter}>
        <button>Revert changes</button>
        <button>Save</button>
      </footer>
    </div>
  );
}

export default SettingMain;
