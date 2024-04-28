//HomePage.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const HomePage = () => {
  const router = useRouter();
  const dummyData = [
    {
      SN: 1,
      ID: "0A123",
      name: "Hospital A",
      contact: "Dental",
      Phone:"view more",
      email: "john@example.com",
      type: "on time",
      registrationDate: "23/02/2023, 05:OOpm",
    },
    {
      SN: 2,
      ID: "0A123",
      name: "Clinic B",
      contact: "general",
      Phone:"view more",
      email: "jane@example.com",
      type: "on time",
      registrationDate: "23/02/2023, 05:OOpm",
    },
    {
      SN: 3,
      ID: "0A123",
      name: "Hospital C",
      contact: "General",
      Phone:"view more",
      email: "alice@example.com",
      type: "on time",
      registrationDate: "23/02/2023, 05:OOpm",
    },
    {
      SN: 4,
      ID: "0A123",
      name: "Clinic D",
      contact: "Dental",
      Phone:"view more",
      email: "bob@example.com",
      type: "delayed",
      registrationDate: "23/02/2023, 05:OOpm",
    },
    {
      SN: 5,
      ID: "0A123",
      name: "Hospital E",
      contact: "Ortho",
      Phone:"967457xxx",
      email: "charlie@example.com",
      type: "delayed",
      registrationDate: "23/02/2023, 05:OOpm",
    },
  ];
  const filtereedData = [
    { 
      name: 'John Doe',
      age: 35,
      gender: 'Male',
      image: '/images/ads.png'
    },
    { 
      name: 'Jane Smith',
      age: 28,
      gender: 'Female',
      image: '/images/ads.png'
    },
    { 
      name: 'John Doe',
      age: 35,
      gender: 'Male',
      image: '/images/ads.png'
    },
    { 
      name: 'Jane Smith',
      age: 28,
      gender: 'Female',
      image: '/images/ads.png'
    },
    { 
      name: 'John Doe',
      age: 35,
      gender: 'Male',
      image: '/images/ads.png'
    },
    { 
      name: 'Jane Smith',
      age: 28,
      gender: 'Female',
      image: '/images/ads.png'
    },
    // Add more data as needed
  ];
  
  const currentPageData=dummyData;
  const recordsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [searchQuery, setSearchQuery] = useState(""); // State to hold search query
  const [selectedDate, setSelectedDate] = useState(''); // State to hold selected date
  const [filteredData, setFilteredData] = useState(dummyData); // State to hold filtered data
  const totalPages = Math.ceil(dummyData.length / recordsPerPage);
 
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const filtered = dummyData.filter(record =>
        record.SN.toString().includes(searchQuery) ||
        record.name.toLowerCase().includes(searchQuery) ||
        record.contact.toLowerCase().includes(searchQuery)
      );
      setFilteredData(filtered);
      setCurrentPage(1); 
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);
    filterData(searchQuery, date); 
  };
  const filterData = (query, date) => {
    let filtered = currentPageData;
    if (date) {
      filtered = filtered.filter(record => record.registrationDate === date);
    }
    filtered = filtered.filter(record =>
      record.SN.toString().includes(query) ||
      record.name.toLowerCase().includes(query) ||
      record.contact.toLowerCase().includes(query)
    );
    setFilteredData(filtered);
    setCurrentPage(1); 
  };
  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = currentPageData.filter(record =>
      record.SN.toString().includes(query) || record.ID.toString().includes(query) ||
      record.name.toLowerCase().includes(query) ||
      record.contact.toLowerCase().includes(query)
    );
    setFilteredData(filtered);
    setCurrentPage(1); 
    };
  return (
    <div>
     
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
      <div className="nav-item1">
        <Image src="/images/dasin.png" alt="" width={30} height={30} />
        <a onClick={() => router.push('/home')}>Home</a>
      </div>
    </li>
    <li>
      <div className="nav-item">
        <Image src="/images/hospital.png" alt="" width={30} height={30} />
        <a onClick={() => router.push('/hospitals')}>Results</a>
      </div>
    </li>
    <li>
      <div className="nav-item">
        <Image src="/images/Doctor.png" alt="" width={30} height={30} />
        <a onClick={() => router.push('/request')}>Leads</a>
      </div>
    </li>
    <li>
      <div className="nav-item">
        <Image src="/images/p1.png" alt="" width={30} height={30} />
        <a onClick={() => router.push('/patient')}>Patients</a>
      </div>
    </li>
    <li>
      <div className="nav-item">
        <Image src="/images/ads.png" alt="" width={30} height={30} />
        <a onClick={() => router.push('/ads')}>Ads Banner</a>
      </div>
    </li>
  </ul>
</nav>
        <div className="dashboard-data">
          <div className="head-data">
          <p>Hi, here is your daily analytics</p>
          <h1> Dashboard</h1>
          </div>
           
           <div className="boxline">

           <div className="box">
    <h2>124</h2>
    <a href="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/" target="_blank">
        <Image src="/images/ab1.png" width={100} height={100} alt="Icon 1" />
        <p>Strivers DSA A-Z</p>
    </a>
</div>

<div className="box">
    <h2>12</h2>
    <a href="https://www.geeksforgeeks.org/tag/geeksforgeeks/" target="_blank">
        <Image src="/images/db1.png" width={100} height={100} alt="Icon 2" />
        <p>geeksforgeeks archives</p>
    </a>
</div>

<div className="box">
    <h2>98712</h2>
    <a href="https://www.interviewbit.com/" target="_blank">
        <Image src="/images/mb1.png" width={100} height={100} alt="Icon 3" />
        <p>Interview bit</p>
    </a>
</div>

           </div>
           <div className="topbartable">   
          </div>


          {/* <div className="pagination">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};


export default HomePage;
