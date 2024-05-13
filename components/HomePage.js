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
      title: "DSA from scratch",
      subTitle: "Learn DSA from scratch with CodeOholics!",
      videoUrl: "https://www.youtube.com/embed/videoseries?si=JvQwHLoxN5aniToV&amp;list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz",
    },
    {
      id: 3,
      title: "DP - aditya verma",
      subTitle: "Learn DSA from scratch with CodeOholics!",
      videoUrl: "https://www.youtube.com/embed/nqowUJzG-iM?si=kuwhlm2XU9SJJfQa",
    },
    {
      id: 4,
      title: "DEVops",
      subTitle: "Learn DSA from scratch with CodeOholics!",
      videoUrl: "https://www.youtube.com/embed/ZbG0c87wcM8?si=QRnUA_bwEl2Kebs4",
    },
    // Add more video data as needed
  ];
  const boxData = [
    {
      id: 1,
      title: "Code With harry",
      link: "https://www.codewithharry.com/",
      imageSrc: "/images/ab1.png",
      altText: "Icon 1",
      description: "Strivers DSA A-Z",
    },
    {
      id: 2,
      title: "Roadmap SDE2024",
      link: "https://github.com/KushalVijay/GetHiredRoadmap2024",
      imageSrc: "/images/db1.png",
      altText: "Icon 2",
      description: "geeksforgeeks archives",
    },
    {
      id: 3,
      title: "Projects At ease",
      link: "https://www.youtube.com/@LamaDev",
      imageSrc: "/images/mb1.png",
      altText: "Icon 3",
      description: "Interview bit",
    },
    {
      id: 3,
      title: "microsoft-dev",
      link: "https://github.com/microsoft/Web-Dev-For-Beginners",
      imageSrc: "/images/mb1.png",
      altText: "Icon 3",
      description: "Interview bit",
    },
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
          <div className="headtxt"><center><h1>Best resources for DSA & DEV</h1></center></div>
        <div className="boxline">
          {boxData.map((box) => (
            <div key={box.id} className="box">
              <a href={box.link} target="_blank" rel="noopener noreferrer">
                <h2>{box.title}</h2>
                <Image src={box.imageSrc} width={100} height={100} alt={box.altText} />
                <p>{box.description}</p>
              </a>
            </div>
          ))}
        </div>
        <div className="headtxt"><center><h1>Best youtube Series
          </h1></center></div>

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
          <div className="headtxt"><center><h1>Best  resources for projects</h1></center></div>


          <div className="video-cards-grid">
  {boxData.map((box) => (
    <div key={box.id} className="video-card">
      <h2>{box.title}</h2>
      <p>{box.subTitle}</p>
      <a href={box.link}>
        <img
          src={box.imageSrc}
          alt={box.title}
          width="280"
          height="157.5"
        />
      </a>
    </div>
  ))}
</div>

        </div>
      </div>
    </div>
  );
};
export default HomePage;
