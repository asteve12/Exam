import React, { useRef } from 'react';
//component
import RightSidebarmobile from '../../Sidebar/RightSidebar/mobile/RightSidebarmobile';
//styles
import styles from './AddAdmin.css';

function AddAdmin() {
  const inputBox = useRef();

  const formInputHandler = (e) => {
    console.log('lll');
    inputBox.current.click();
  };
  return (
    <div>
      <h1>Admin Details</h1>
      <br></br>
      <RightSidebarmobile></RightSidebarmobile>
      <br></br>
      <form action='' className={styles.AddAdminPage}>
        <div className={styles.AdminTitleWrapper}>
          <div className={styles.AdminTitleCon}>
            <p>Title:</p>
          </div>
          <select className={styles.AdminTitle} type='text'>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
          </select>
        </div>
        <br></br>
        <div className={styles.AdminNameWrapper}>
          <div className={styles.AdminNameCon}>
            <p>Name:</p>
          </div>
          <input className={styles.AdminName} type='text'></input>
        </div>
        <br></br>
        <div className={styles.AdminBirthWrapper}>
          <div className={styles.AdminBirthCon}>
            <p>Name:</p>
          </div>

          <div className={styles.AdminBirth} type='text'>
            <input className={styles.Date} type='Date' />
            <div className={styles.GenderCon} type='text'>
              <p>Gender:</p>
              <select name='' id=''>
                <option value=''>Gender</option>
                <option value=''></option>
                <option value=''></option>
                <option value=''></option>
                <option value=''></option>
              </select>
            </div>
          </div>
        </div>
        <br></br>
        <div className={styles.AdminBirthWrappermobile}>
          <div className={styles.AdminBirthConmobile}>
            <p>Date:</p>
            <input className={styles.Datemobile} type='Date' />
          </div>
          <br></br>

          <div className={styles.AdminBirthmobile} type='text'>
            <div className={styles.GenderConmobile} type='text'>
              <p>Gender:</p>
              <select name='' id=''>
                <option value=''>Gender</option>
                <option value=''></option>
                <option value=''></option>
                <option value=''></option>
                <option value=''></option>
              </select>
            </div>
          </div>
        </div>
        <br></br>

        <div className={styles.AdminDepartmentWrapper}>
          <div className={styles.AdminDepartmentCon}>
            <p>Department:</p>
          </div>
          <select className={styles.AdminDepartment} type='text'>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
          </select>
        </div>
        <br></br>
        <div className={styles.AdminEmailWrapper}>
          <div className={styles.AdminEmailCon}>
            <p>Email Address:</p>
          </div>
          <input className={styles.AdminEmail} type='text'></input>
        </div>
        <br></br>

        <div className={styles.AdminPhoneWrapper}>
          <div className={styles.AdminPhoneCon}>
            <p>Phone Number:</p>
          </div>
          <input className={styles.AdminPhone} type='text'></input>
        </div>
        <br></br>
        <br></br>

        <div className={styles.AdminPhotoWrapper}>
          <div className={styles.AdminPhotoCon}>
            <p>Photo:</p>
          </div>
          <div className={styles.AdminPhoto} onClick={formInputHandler}>
            <div className={styles.AdminPhotoBox}></div>
            <button className={styles.AdminPhotoBtn}>Browse File</button>
            <br></br>
          </div>
        </div>
        <input type='file' ref={inputBox} className={styles.PhotoSelect} />

        <button className={styles.AddBtn}>ADD</button>
      </form>
    </div>
  );
}

export default AddAdmin;
