import React from 'react';
//styles
import styles from './Newsmain.css';
//Components
import RightSideBarMobile from '../../Sidebar/RightSidebar/mobile/RightSidebarmobile';
import MobileNewsRightbar from '../../Sidebar/RightSidebar/Newsrightsidebar/mobile/NewsRightbar';

function Newsmain() {
  return (
    <div className={styles.Newsmain}>
      <h1>News & Info</h1>
      <br></br>
      <RightSideBarMobile></RightSideBarMobile>
      <br></br>
      <div className={styles.MobileCon}>
        <MobileNewsRightbar></MobileNewsRightbar>
      </div>

      <form action='' className={styles.NewsInfo}>
        <section className={styles.Title}>
          <label htmlFor='inputTitle'>Title:</label>
          <input type='text' id='inputTitle' />
        </section>
        <br></br>
        <section className={styles.Date}>
          <label htmlFor='inputDate'>Date:</label>
          <input type='date' id='inputDate' placeholder='DD/MM/YY' />
        </section>
        <br></br>
        <section className={styles.Recipient}>
          <label htmlFor='inputRecipient'>Recipients:</label>
          <select type='date' id='inputRecipient' placeholder='DD/MM/YY'>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
          </select>
        </section>
        <br></br>
        <section className={styles.Details}>
          <label htmlFor='inputDetails'>Details:</label>
          <textarea id='inputDetails' />
        </section>
        <br></br>
        <br></br>
        <section className={styles.SendBtn}>
          <button>SEND</button>
        </section>
      </form>
    </div>
  );
}

export default Newsmain;
