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
    // {
    //   SN: 1,
    //   name: "Charan Narakula",
    //   designation: "Founder-CodeOHOlics| Palo alto networks",
    //   time: "Time management is crucial. Balancing academics, projects, and extracurricular activities can be challenging, but mastering this skill early on will set you up for success. Never underestimate the power of networking. Building relationships with peers, professors, and professionals in your field can open doors to opportunities you may not have considered. Finally, take advantage of every opportunity that comes your way. Whether it's internships(related to your field only), research projects, or joining a student club, these experiences will help you grow both personally and professionally.",
    //   registrationDate: "2024-03-07",
    //   bloodGroup: "AB+",
    //   age: 42,
    //   gender: "Male",
    //   appointmentDetails: "12/2/2023, 12:30 PM",
    //   lastBookingDetails: "28/1/2023, 12:20 AM",
    //   diagnosisReport: "/reports/diagnosis1.pdf",
    //   prescriptionReport: "/reports/prescription1.pdf"
    // },
    {
      SN: 1,
      name: "Charan Narakula",
      designation: "Founder-CodeOHOlics| Palo alto networks",
      image: '/images/charan.png',
      time: "Time management is crucial. Balancing academics, projects, and extracurricular activities can be challenging, but mastering this skill early on will set you up for success. Never underestimate the power of networking. Building relationships with peers, professors, and professionals in your field can open doors to opportunities you may not have considered. Finally, take advantage of every opportunity that comes your way. Whether it's internships(related to your field only), research projects, or joining a student club, these experiences will help you grow both personally and professionally.",
      phno:"6301342605",
      linkedinProfile: "https://www.linkedin.com/in/charan-narukulla?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      id: 1,
      name: 'Farhan Ahmed',
      image: '/images/farhan.png',
      designation: 'President',
      time: `Congratulations! 🎇 You guys have made it! You are officially members of the Codeoholics family!Here, we craft crazy fun-packed learning experiences and a roller coaster ride. Remember one thing: in this field of engineering, we cry, we laugh, we learn, we build, and we grow! I had a sweet experience interacting with my juniors. The first step will be hard, but you guys are here,Stay focused and collaborate with interesting minds. Try to connect and share your views and thought processes. Be selfish for yourself. You might see the world with just two eyes and think with one mind, but network with everyone and try to understand what others are doing. Be both observant and an observer at the same time. Be the one who can contribute to the community because there will definitely be one person who will get inspired by your thoughts!In this world, no one is bigger, no one is more skilled. It's all about how you work out, think, and develop yourself and the community.At the same time, stay focused on DSA and then development! Try to contribute to an open-source project and learn from your mistakes. If you are facing any problems, you have a big community standing for you. It's the Codeoholics family—welcome aboard! 🫠🎇.I appreciate everyone's efforts in attempting the Codeoholics Membership Drive 2k24. You've all performed superbly.`,
      year: '3rd',
      courseSection: 'Computer Science - Section C',
      phno: '9502527812',
      linkedinProfile: 'https://www.linkedin.com/in/farhan-ahmed-63324b242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },    
  {
    SN: 2,
    name: "Mahitha kalyani",
    image: '/images/mahitha.jpg',
    time:' The experience is very nice...I didnt expect that Ill be engaging with them for soo long but the interviewees were soo active and enthusiastic that the interview lasted for almost an hour.So they made my job easy... and Thanks for choosing us. But we expect more involvement of the core and executive team of the Codeoholics club from next time...',
    designation: 'BZ alumini,events lead @intelclub',
    year: '3rd',
    courseSection: 'Computer Science - Section c',
    phno: '9959287349',
    linkedinProfile: 'https://www.linkedin.com/in/mahitha-preetham-a8b78322a/'
  },
  {
    SN: 2,
    name: "Veda Nayini",
    image: '/images/veda.jpeg',
    designation: 'Outreach Lead',
    time:"hey juniors! here are few things that might help you,  Always wonder about the WHAT IFs while doing anything, go beyond your syllabus, explore online courses and spend time learning those things which you find interesting. Do not restrict yourself to specific domains very early on (one of the mistakes I did), you have plenty of time to do that later and explore everything.also not focus on specific frameworks or stacks instead focus on core concepts.Theory will take you only so far (get it?), but practical experience is key. Build projects that interest you; it could be anything simple really. And also prioritize your mental health in this journey.And lastly welcome to codeoholics, let's have fun and learn from each other.",
    year: '2rd',
    courseSection: 'Computer Science - Section D',
    phno: '+91 90008 70630',
    linkedinProfile: 'https://www.linkedin.com/in/veda-nayini-376026277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  },
  // {
  //   SN: 3,
  //   name: "chetan sirigi",
  //   image: '/images/chetan.JPG',
  //   designation: 'Dev lead',
  //   year: '2rd',
  //   courseSection: 'CSM - Section B',
  //   phno: '+91 79898 42906',
  //   linkedinProfile: 'https://www.linkedin.com/in/chetan-sirigiri?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  // },

  {
    SN: 4,
    name: "Mohd Ibrahim",
    image: '/images/ibrahim.jpeg',
    time:'Hi everyone,\n\nThis is Mohammed Ibrahim, your ex-Vice President of CodeOHolics. I wanted to take a moment to express my sincere gratitude for everyone who made our recent interview process such a success.\n\nFirst and foremost, a huge shoutout to my amazing core team! Their dedication and collaborative effort were instrumental in setting up and running these interviews smoothly. Their support allowed us to really get to know each applicant and identify the talent we have in our college.\n\nTo all the applicants, thank you for coming forward! The interviews themselves were a true pleasure. These conversations with each of you – your diverse coding experiences, your innovative ideas, and your sheer enthusiasm for learning and growing together – were truly inspiring.\n\nThe selection process will undoubtedly be a challenge with so many talented individuals, but every single interview left a positive impression.\n\nSo, whether you receive an official invitation or not, please know that your participation in the interviews was invaluable. Keep honing your skills, stay curious, and remember, the world of coding offers endless possibilities.\n\nFor those who are selected, congratulations! We are incredibly excited to welcome you to the CodeOHolics family and embark on this journey together.\n\nBest regards,\n\nMohammed Ibrahim\n\nEx-Vice President, CodeOHolics',
    designation: 'EX-vice President',
    year: 'class-24',
    courseSection: 'CSE-D',
    phno: '6304415807',
    linkedinProfile: 'https://www.linkedin.com/in/moiduddinahmed-79a94923b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  },
  {
    SN: 6,
    name: "Shaibaz Ahmed",
    image: '/images/shaibaz.jpeg',
    designation: "CP-lead",
    time:"Don't let the fast paced world define you, experience every emotion as it comes!!",
    year: '3rd',
    courseSection: 'CSE - Section A',
    phno: '+91 79952 79643',
    linkedinProfile: 'https://www.linkedin.com/in/chetan-sirigiri?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  },
  {
    SN: 5,
    name: "Leo nikhil",
    image: '/images/leo.png',
    designation: "vice president",
    time:"As you embark on your college journey, remember the importance of time management, networking, and seizing opportunities. Balancing academics, projects, and extracurricular activities is key to success. Connect with peers, professors, and professionals to expand your network and explore new opportunities. Attend tech events, seminars, and hackathons to learn and grow. Never stop your hunger for learning and sharing, as it enhances your understanding. Seize every opportunity, including internships and research projects, to gain valuable experience. Remember to prioritize work-life balance and continue upskilling. Here's to a rewarding and fulfilling college experience ahead! 🚀",
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
    time:"The students exhibited excellent interaction skills during the interviews and showed great enthusiasm about joining the club to showcase their talent. Their genuine interest and knowledge about the clubs activities and goals demonstrate a strong fit with our culture. They are eager to work with the club to learn new skills and showcase their abilities. The majority of candidates expressed that they are very interested in working with President Farhan Ahmed.",
    year: '3rd',
    courseSection: 'CSE - Section C',
    phno: '9705693025',
    linkedinProfile: 'https://www.linkedin.com/in/g-ajay-reddy-a135a7257/'
  },
  // {
  //   SN: 7,
  //   name: "Hyder Ali",
  //   image: '/images/hyder.jpeg',
  //   designation: "Tech-Lead",
  //   year: '3rd',
  //   courseSection: 'CSM - Section B',
  //   phno: '+91 87904 88175',
  //   linkedinProfile: 'https://www.linkedin.com/in/shaik-hyder-ali-694765240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  // },
  {
    SN: 8,
    name: "Samsritha Putta",
    image: '/images/sam.png',
    designation: "BZ-alumini,py developer",
    time:'The experience with these talented juniors was so good and it was quite interactive. They were ready to answer all the questions in their own way and everyone excelled at it. Some were interesting, some were quite and some were very active. I wish them all the best to continue with the same spark. And thanks to codeoholics for giving the opportunity to interview, it was great!!',
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
    time:"The interview went well with interesting answers and Juniors were very interactive than expected. They were little confused with their strategies but still performed well. Overall it was a good experience listening to their views and answers.Thanks to Codeoholics for giving an opportunity to interview.",
    year: '3rd',
    courseSection: 'CSE',
    phno: '+91 79898 42906',
    linkedinProfile: 'https://www.linkedin.com/in/surna-srikanth-8b0724227/'
  },
  {
    SN: 4,
    name: "Moid Uddin",
    image: '/images/moid.jpeg',
    designation: 'Events lead',
    time:'The Membership Drive 2k24 was a stellar showcase of talent and determination. Participants navigated rigorous coding rounds and insightful interviews, demonstrating exceptional skills. To all who took part, hats off—you’ve made a significant leap toward success. 🎉👏\n\nA special congratulations to those selected; welcome to the vibrant and dynamic Codeoholics Community. We have discovered not just talented coders, but also future leaders and innovators. 🚀💡\n\nWe eagerly anticipate your contributions and wish you the best in your future endeavors. 🌟✨\n\nMoiduddin Ahmed\nEvents Lead\nCodeoholics Community',
    year: '3rd',
    courseSection: 'AIML - Section B',
    phno: '+91 97004 43234',
    linkedinProfile: 'https://www.linkedin.com/in/moiduddinahmed-79a94923b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  },
    
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
      <div className="nav-item1">
        <Image src="/images/dasin (3).png" alt="" width={30} height={30} />
        <a onClick={() => router.push('/ads')}>About/views</a>
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
            <img src={appointment.image} alt="Doctor" className={styles.image} />
            <button className={styles.viewMore} onClick={() => handleViewMoreClick(appointment)}>View More</button>
            <h2 className={styles.name}>{appointment.name}</h2>
            <p className={styles.designation}><em>{appointment.designation}</em></p>
            <p className={styles.time}><em>{appointment.time}</em></p>
          </div>
    ))}
  </div>

  
  
  <div className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.aboutUs}>
                    <h2>ABOUT US</h2>
                    <p>
                        CODEOHOLICS, THE ULTIMATE CODING CLUB FOR STUDENTS AT CMRTC
                        <br /><br />
                        Are you passionate about coding, programming, and all things tech? Do you want to join a community of like-minded individuals who share your love for computer science? Then look no further, because CodeOholics is the club for you.
                        <br /><br />
                        Joining CodeOholics is a great way to enhance your coding skills, meet new people, and gain experience that will be valuable for your future career. So come join us and become a part of our community of CodeOholics!
                    </p>
                    <div className={styles.contactInfo}>
                        <p>Website: <a href="https://hacktheverse-lemon.vercel.app/">https://hacktheverse-lemon.vercel.app/</a></p>
                        <p>Email: <a href="mailto:codeoholics@cmrtc.ac.in">codeoholics@cmrtc.ac.in</a></p>
                        <p>
                            <a href="https://www.instagram.com/codeoholics/">Instagram</a> | 
                            <a href="https://www.youtube.com/channel/UCJfu4MvWEq0e4z-cz1VcLDw"> YouTube</a> | 
                            <a href="https://www.linkedin.com/company/codeoholics-club-cmrtc/"> LinkedIn</a>
                        </p>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/images/codeOholics.png" alt="CodeOholics Logo" width={200} height={200} />
                </div>
            </div>
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
        
        {popupAppointment && (
        <AppointmentDetailsPopup appointment={popupAppointment} onClose={() => setPopupAppointment(null)} />
      )}
      
      </div>
  );
};

export default AdsPage;
