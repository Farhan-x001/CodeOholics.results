import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/ads.module.css';
import Image from 'next/image';
import AddDoctorPopup from './AddDoctorPopup';
import AppointmentDetailsPopup from './AppointmentDetailsPopup'; 


const AdsPage = () => {
  const router = useRouter();
  const [showAddDoctorPopup, setShowAddDoctorPopup] = useState(false);
  const handleViewMoreClick = (appointment) => {
    setPopupAppointment(appointment);
  };
  const [dummyData, setDummyData] = useState([
    {
      SN: 1,
      name: "Charan Narakula",
      designation: "Founder-CodeOHOlics| Palo alto networks",
      time: "Time management is crucial. Balancing academics, projects, and extracurricular activities can be challenging, but mastering this skill early on will set you up for success. Never underestimate the power of networking. Building relationships with peers, professors, and professionals in your field can open doors to opportunities you may not have considered. Finally, take advantage of every opportunity that comes your way. Whether it's internships(related to your field only), research projects, or joining a student club, these experiences will help you grow both personally and professionally.",
      registrationDate: "2024-03-07",
      bloodGroup: "AB+",
      age: 42,
      gender: "Male",
      appointmentDetails: "12/2/2023, 12:30 PM",
      lastBookingDetails: "28/1/2023, 12:20 AM",
      diagnosisReport: "/reports/diagnosis1.pdf",
      prescriptionReport: "/reports/prescription1.pdf"
    },
    {
      SN: 2,
      name: "Charan Narakula",
      designation: "Founder-CodeOHOlics| Palo alto networks",
      time: "Time management is crucial. Balancing academics, projects, and extracurricular activities can be challenging, but mastering this skill early on will set you up for success. Never underestimate the power of networking. Building relationships with peers, professors, and professionals in your field can open doors to opportunities you may not have considered. Finally, take advantage of every opportunity that comes your way. Whether it's internships(related to your field only), research projects, or joining a student club, these experiences will help you grow both personally and professionally.",
      registrationDate: "2024-03-07",
      bloodGroup: "AB+",
      age: 42,
      gender: "Male",
      appointmentDetails: "12/2/2023, 12:30 PM",
      lastBookingDetails: "28/1/2023, 12:20 AM",
      diagnosisReport: "/reports/diagnosis1.pdf",
      prescriptionReport: "/reports/prescription1.pdf"
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
      <div className="nav-item">
        <Image src="/images/team.png" alt="" width={30} height={30} />
        <a onClick={() => router.push('/request')}>Leads</a>
      </div>
    </li>
    <li>
      <div className="nav-item">
        <Image src="/images/inte.png" alt="" width={30} height={30} />
        <a onClick={() => router.push('/patient')}>Team</a>
      </div>
    </li>
    <li>
      <div className="nav-item1">
        <Image src="/images/dasin (3).png" alt="" width={30} height={30} />
        <a onClick={() => router.push('/ads')}>About Us</a>
      </div>
    </li>
  </ul>
</nav>
<div className="dashboard-data">
            {/* Your dashboard data content here */}
            {/* For example: */}
            <center> <h2>The Holics drop</h2></center>

               <div className="topbartable">
            <div className="fields">
          <div className="field">
            <label htmlFor="search">Search</label>
            <input type="text" id="search" value={searchQuery} onChange={handleSearchChange} onKeyPress={handleKeyPress} placeholder="Search..." />
          </div>
            <div>
      </div>
        </div>
      
          </div>
          <div className={styles.appointmentcontainer}>
        {filteredData.map(appointment => (
          <div key={appointment.SN} className={styles.card}>
            <img src="/images/image.png" alt="Doctor" className={styles.image} />
            <button className={styles.viewMore} onClick={() => handleViewMoreClick(appointment)}>View More</button>
            <h2 className={styles.name}>{appointment.name}</h2>
            <p className={styles.designation}><em>{appointment.designation}</em></p>
            <p className={styles.time}><em>{appointment.time}</em></p>
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

export default AdsPage;
