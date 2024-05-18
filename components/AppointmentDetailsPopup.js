import React from 'react';
import styles from '../styles/PopupStylesdoc.module.css';

const AppointmentDetailsPopup = ({ appointment, onClose, image }) => {
    return (
        <div className={styles.popupOverlay}>
            <div className={styles.popup}>
                <div className={styles.popupContent}>
                    <h2 className={styles.popupTitle}>{appointment.name}</h2>
                    <hr className={styles.hr} />
                    <div className={styles.imageContainer}>
                        <input
                            type="image"
                            src={appointment.image}
                            alt="Doctor"
                            className={styles.image}
                            disabled
                        />
                    </div>
                    <form>
                        {/* Existing form groups */}
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" value={appointment.name} disabled />
                        </div>
                        {/* Add new form groups */}
                        <div className={styles.formGroup}>
                            <label htmlFor="designation">Designation</label>
                            <input type="text" id="designation" value={appointment.designation} disabled />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="year">Year</label>
                            <input type="text" id="year" value={appointment.year} disabled />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="courseSection">Course/Section</label>
                            <input type="text" id="courseSection" value={appointment.courseSection} disabled />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="phno">Phone Number</label>
                            <input type="text" id="phno" value={appointment.phno} disabled />
                        </div>
                        <div className={styles.formGroup}>
  {/* LinkedIn button */}
  <a href={appointment.linkedinProfile} target="_blank" rel="noopener noreferrer" className={styles.linkedinButton}>
    LinkedIn
  </a>
</div>

                        
                        <button className={styles.popupButton} onClick={onClose}>
              <p>Close</p>
            </button>                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentDetailsPopup;
