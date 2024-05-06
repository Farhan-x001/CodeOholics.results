//HomePage.js
import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const HomePage = () => {
  const router = useRouter();
  const videoData = [
    {
      id: 1,
      title: "Data Structures and Algorithms Course",
      subTitle: "Learn DSA from scratch with CodeOholics!",
      videoUrl: "https://www.youtube.com/embed/xXKL9YBWgCY?si=DpfE-0Qz7aUGO5Vd",
    },
    {
      id: 2,
      title: "Data Structures and Algorithms Course",
      subTitle: "Learn DSA from scratch with CodeOholics!",
      videoUrl: "https://www.youtube.com/embed/xXKL9YBWgCY?si=DpfE-0Qz7aUGO5Vd",
    },
    {
      id: 3,
      title: "Data Structures and Algorithms Course",
      subTitle: "Learn DSA from scratch with CodeOholics!",
      videoUrl: "https://www.youtube.com/embed/xXKL9YBWgCY?si=DpfE-0Qz7aUGO5Vd",
    },
    {
      id: 4,
      title: "Data Structures and Algorithms Course",
      subTitle: "Learn DSA from scratch with CodeOholics!",
      videoUrl: "https://www.youtube.com/embed/xXKL9YBWgCY?si=DpfE-0Qz7aUGO5Vd",
    },
    // Add more video data as needed
  ];
  const dummyData = [
    {
      SN: 1,
      ID: "0A123",
      name: "Hospital A",
      contact: "Dental",
      Phone: "view more",
      email: "john@example.com",
      type: "on time",
      registrationDate: "23/02/2023, 05:OOpm",
    },
  ];
  const filtereedData = [
    {
      name: "John Doe",
      age: 35,
      gender: "Male",
      image: "/images/ads.png",
    },
  ];

  const currentPageData = dummyData;
  const recordsPerPage = 8;
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
                <a onClick={() => router.push("/home")}>Home</a>
              </div>
            </li>
            <li>
              <div className="nav-item">
                <Image
                  src="/images/hospital.png"
                  alt=""
                  width={30}
                  height={30}
                />
                <a onClick={() => router.push("/hospitals")}>Results</a>
              </div>
            </li>
            <li>
              <div className="nav-item">
                <Image src="/images/Doctor.png" alt="" width={30} height={30} />
                <a onClick={() => router.push("/request")}>Leads</a>
              </div>
            </li>
            <li>
              <div className="nav-item">
                <Image src="/images/p1.png" alt="" width={30} height={30} />
                <a onClick={() => router.push("/patient")}>Patients</a>
              </div>
            </li>
            <li>
              <div className="nav-item">
                <Image src="/images/ads.png" alt="" width={30} height={30} />
                <a onClick={() => router.push("/ads")}>Ads Banner</a>
              </div>
            </li>
          </ul>
        </nav>
        <div className="dashboard-data">
          <div className="boxline">
            <div className="box">
              <a
                href="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
                target="_blank"
                >
                <h2>Learn A to Z of DSA</h2>
              </a>
                {/* <Image
                  src="/images/ab1.png"
                  width={100}
                  height={100}
                  alt="Icon 1"
                /> */}
                {/* <p>Strivers DSA A-Z</p> */}
            </div>
            <div className="box">
              <a
                href="https://www.geeksforgeeks.org/tag/geeksforgeeks/"
                target="_blank"
                >
                <h2>Be a GEEK!</h2>
                {/* <Image
                  src="/images/db1.png"
                  width={100}
                  height={100}
                  alt="Icon 2"
                />
                <p>geeksforgeeks archives</p> */}
              </a>
            </div>

            <div className="box">
              <a href="https://www.interviewbit.com/" target="_blank">
              <h2>DSA Boost</h2>
                {/* <Image
                  src="/images/mb1.png"
                  width={100}
                  height={100}
                  alt="Icon 3"
                />
                <p>Interview bit</p> */}
              </a>
            </div>
          </div>
          <div className="video-cards-grid">
            {videoData.map((video) => (
              <div key={video.id} className="video-card">
                <h2>{video.title}</h2>
                <p>{video.subTitle}</p>
                <iframe
                  width="280"
                  height="157.5"
                  src={video.videoUrl}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
