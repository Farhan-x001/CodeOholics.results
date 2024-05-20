import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/PaitationPage.module.css';
import Image from 'next/image';
import AppointmentDetailsPopup from './AppointmentDetailsPopup'; 
    const PaitationPage = () => {
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
        name: "Mahitha kalyani",
        image: '/images/mahitha.JPG',
        designation: 'BZ alumini,events lead @intelclub',
        year: '3rd',
        courseSection: 'Computer Science - Section c',
        phno: '9959287349',
        linkedinProfile: 'https://www.linkedin.com/in/mahitha-preetham-a8b78322a/'
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
        name: "Mohd Ibrahim",
        image: '/images/ibrahim.jpeg',
        designation: 'EX-vice President',
        year: 'class-24',
        courseSection: 'CSD',
        phno: '6304415807',
        linkedinProfile: 'https://www.linkedin.com/in/moiduddinahmed-79a94923b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
      },
      {
        SN: 5,
        name: "Leo nikhil",
        image: '/images/leo.png',
        designation: "vice president",
        year: '3rd',
        courseSection: 'CSM - Section B',
        phno: '+91 8309109430',
        linkedinProfile: 'https://www.linkedin.com/in/leo-nikhil-mothukuri-5169b021a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
      },
      {
        SN: 6,
        name: "Ajay reddy",
        image: '/images/ajay.jpg',
        designation: "BZ-alumini,TECH-LEAD @intelclub",
        year: '3rd',
        courseSection: 'CSE - Section C',
        phno: '9705693025',
        linkedinProfile: 'https://www.linkedin.com/in/g-ajay-reddy-a135a7257/'
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
      },
      {
        SN: 8,
        name: "Samsritha Putta",
        image: '/images/sam.png',
        designation: "BZ-alumini,py developer",
        year: '3rd',
        courseSection: 'CSE',
        phno: '6302572910',
        linkedinProfile: 'https://www.linkedin.com/in/samsritha-putta-7ab27b229/'
      },
      {
        SN: 3,
        name: "Srikanth Surna",
        image: '/images/srikanth.jpg',
        designation: 'BZ-alumini,DSA-GEEK',
        year: '3rd',
        courseSection: 'CSE',
        phno: '+91 79898 42906',
        linkedinProfile: 'https://www.linkedin.com/in/surna-srikanth-8b0724227/'
      },
      ]);
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
        <a onClick={() => router.push('/request')}>Core Team</a>
      </div>
    </li>
    <li>
      <div className="nav-item1">
        <Image src="/images/int.png" alt="" width={30} height={30} />
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
                      <h2>Our Pannel</h2>
                      <div className="fields">
                    <div className="field">
                      <label htmlFor="search">Search</label>
                      <input type="text" id="search" value={searchQuery} onChange={handleSearchChange} onKeyPress={handleKeyPress} placeholder="Search..." />
                    </div>
                  </div>
                    </div>
                    <div className={styles.appointmentcontainer}>
                  {filteredData.map(appointment => (
                    <div key={appointment.SN} className={styles.card}>
                   <img src={appointment.image} alt="Doctor" className={styles.image} />
                      <h2 className={styles.name}>{appointment.name}</h2>
                      <p className={styles.designation}><em>{appointment.designation}</em></p>
                      <p className={styles.time}><em>{appointment.time}</em></p>
                      <button className={styles.viewMore} onClick={() => handleViewMoreClick(appointment)}>View More</button>
                    </div>
              ))}
            </div>
            <div className={styles.thanks}>
      <h2>Thank You</h2>
      <p>
        Dear Pannel,
      </p>
      <p>
        On behalf of CodeOholics, I want to extend our heartfelt gratitude to you for your invaluable time and effort in selecting members for our Membership Drive 2k24. Your dedication and keen judgment have played a crucial role in identifying the right talent to join our community.
      </p>
      <p>
        Your insights and feedback during the interview process have not only helped us in choosing exceptional candidates but have also contributed to upholding the standards and values that CodeOholics stands for. We appreciate your commitment to fostering a community of passionate and skilled individuals who will drive our mission forward.
      </p>
      <p>
        Thank you once again for your support and for being an integral part of our membership drive. We look forward to a successful year ahead, filled with innovation and collaboration.
      </p>
      <p>
        Warm regards,
      </p>
      <p>
        Team CodeOholics
      </p>
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

export default PaitationPage;
