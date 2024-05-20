import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/RequestPage.module.css';
import Image from 'next/image';
import AddDoctorPopup from './AddDoctorPopup';
import AppointmentDetailsPopup from './AppointmentDetailsPopup'; 
const RequestPage = () => {

  const router = useRouter();
  const [showAddDoctorPopup, setShowAddDoctorPopup] = useState(false);
  const handleViewMoreClick = (appointment) => {
    setPopupAppointment(appointment);
  };
  const [dummyData, setDummyData] = useState([
    {
      id: 1,
      name: 'Farhan Ahmed',
      image: '/images/farhan.png',
      designation: 'President',
      year: '3rd',
      courseSection: 'Computer Science - Section C',
      phno: '9502527812',
      linkedinProfile: 'https://www.linkedin.com/in/farhan-ahmed-63324b242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  },
  {
    SN: 2,
    name: "Veda Nayini",
    image: '/images/veda.jpeg',
    designation: 'Outreach Lead',
    year: '2rd',
    courseSection: 'Computer Science - Section D',
    phno: '+91 90008 70630',
    linkedinProfile: 'https://www.linkedin.com/in/veda-nayini-376026277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  },
  {
    SN: 3,
    name: "chetan sirigi",
    image: '/images/chetan.JPG',
    designation: 'Dev lead',
    year: '2rd',
    courseSection: 'CSM - Section B',
    phno: '+91 79898 42906',
    linkedinProfile: 'https://www.linkedin.com/in/chetan-sirigiri?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  },
  {
    SN: 4,
    name: "Moid Uddin",
    image: '/images/moid.jpeg',
    designation: 'Events lead',
    year: '3rd',
    courseSection: 'AIML - Section B',
    phno: '+91 97004 43234',
    linkedinProfile: 'https://www.linkedin.com/in/moiduddinahmed-79a94923b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  },
  {
    SN: 5,
    name: "Leo nikhil",
    image: '/images/leo.png',
    designation: "vice president",
    year: '3rd',
    courseSection: 'CSM - Section B',
    phno: '+91 83091 09430',
    linkedinProfile: 'https://www.linkedin.com/in/leo-nikhil-mothukuri-5169b021a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  },
  {
    SN: 6,
    name: "Shaibaz Ahmed",
    image: '/images/shaibaz.jpeg',
    designation: "CP-lead",
    year: '3rd',
    courseSection: 'CSE - Section A',
    phno: '+91 79952 79643',
    linkedinProfile: 'https://www.linkedin.com/in/chetan-sirigiri?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  },
  {
    SN: 7,
    name: "Hyder Ali",
    image: '/images/hyder.jpeg',
    designation: "Tech-Lead",
    year: '3rd',
    courseSection: 'CSM - Section B',
    phno: '+91 87904 88175',
    linkedinProfile: 'https://www.linkedin.com/in/shaik-hyder-ali-694765240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  }
  ]);
  
   // Initial dummy data

    const [popupAppointment, setPopupAppointment] = useState(null); // Define state variable
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedDate, setSelectedDate] = useState('');
    const [filteredData, setFilteredData] = useState(dummyData); // State to hold filtered data
  


    const recordsPerPage = 8;
    const totalPages = Math.ceil(dummyData.length / recordsPerPage);

  const currentPageData=dummyData;
  const [currentPage, setCurrentPage] = useState(1); // Current page number
 
  const handleAddDoctorClick = () => {
    setShowAddDoctorPopup(true);
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      filterData(searchQuery, selectedDate);
    }
  };

  const filterData = (query, date) => {
    let filtered = dummyData;
    if (date) {
      filtered = filtered.filter(record => record.registrationDate === date);
    }
    if (query) {
      const lowerCaseQuery = query.toLowerCase();
      filtered = filtered.filter(record =>
        record.SN.toString().includes(lowerCaseQuery) ||
        record.name.toLowerCase().includes(lowerCaseQuery) ||
        record.designation.toLowerCase().includes(lowerCaseQuery) ||
        (record.contact && record.contact.toLowerCase().includes(lowerCaseQuery))
      );
    }
    setFilteredData(filtered);
  };
  
  

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    filterData(query, selectedDate);
  };

  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);
    filterData(searchQuery, date);
  };
  const handleAddDoctor = (newDoctor) => {
    setFilteredData([...filteredData, newDoctor]);
    setDummyData([...dummyData, newDoctor]); // Update dummyData as well
    setShowAddDoctorPopup(false);
    };

  return (
<div className="content">
        
<nav className="vertical-navbar">
  <ul>
    <li>
      <div className="healthkare-header">
        <h2>CodeOholics</h2>
        <hr />
      </div>
    </li>
    <li>
      <div className="nav-item">
        <Image src="/images/dashboard.png" alt="" width={30} height={30} />
        <a onClick={() => router.push('/home')}>Dashboard</a>
      </div>
    </li>
    <li>
      <div className="nav-item">
        <Image src="/images/result.png" alt="" width={30} height={30} />
        <a onClick={() => router.push('/hospitals')}>Results</a>
      </div>
    </li>
    <li>
      <div className="nav-item1">
        <Image src="/images/dasin (5).png" alt="" width={30} height={30} />
        <a onClick={() => router.push('/request')}>Core Team</a>
      </div>
    </li>
    <li>
      <div className="nav-item">
        <Image src="/images/inte.png" alt="" width={30} height={30} />
        <a onClick={() => router.push('/patient')}>Pannel</a>
      </div>
    </li>
    <li>
      <div className="nav-item">
        <Image src="/images/about.png" alt="" width={30} height={30} />
        <a onClick={() => router.push('/ads')}>About/views</a>
      </div>
    </li>
  </ul>
</nav>
          <div className="dashboard-data">
            {/* Your dashboard data content here */}
            {/* For example: */}
               <div className="topbartable">
            <h2>CORE team  members</h2>
            <div className="fields">
          <div className="field">
            <label htmlFor="search">Search</label>
            <input type="text" id="search" value={searchQuery} onChange={handleSearchChange} onKeyPress={handleKeyPress} placeholder="Search..." />
          </div>
            {/* <div>
            <button onClick={handleAddDoctorClick} className={styles.button}>+ add doctor</button>
      </div> */}
        </div>
      {/* {showAddDoctorPopup && (
        <AddDoctorPopup onClose={() => setShowAddDoctorPopup(false)} onAddDoctor={handleAddDoctor} />
      )} */}
          </div>
          <div className={styles.appointmentcontainer}>
        {filteredData.map(appointment => (
          <div key={appointment.SN} className={styles.card}>
            <img src={appointment.image} alt="Doctor" className={styles.image} />
            <h2 className={styles.name}>{appointment.name}</h2>
            <p className={styles.designation}><em>{appointment.designation}</em></p>
            {/* <p className={styles.time}><em>{appointment.time}</em></p> */}
            <button className={styles.viewMore} onClick={() => handleViewMoreClick(appointment)}>View More</button>
          </div>
    ))}
  </div>
      
          <div className="pagination">
            <div className="pagination">
              Page {currentPage} of {totalPages}
            </div>
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
              &laquo; Prev
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button key={index} onClick={() => handlePageChange(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
                {index + 1}
              </button>
            ))}
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
              Next &raquo;
            </button>
          </div>
        </div>
        {popupAppointment && (
        <AppointmentDetailsPopup appointment={popupAppointment} onClose={() => setPopupAppointment(null)} />
      )}
      </div>
    
  );
};

export default RequestPage;
