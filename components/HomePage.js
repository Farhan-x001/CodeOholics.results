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
      imageSrc: "/images/codewithharry.png",
      altText: "Icon 1",
      description: "The Ultimate hub for devs",
    },
    {
      id: 2,
      title: "Roadmap SDE2024",
      link: "https://github.com/KushalVijay/GetHiredRoadmap2024",
      imageSrc: "/images/Kushal.png",
      altText: "Icon 2",
      description: "KushalVijay Special",
    },
    {
      id: 3,
      title: "Projects At ease",
      link: "https://www.youtube.com/@LamaDev",
      imageSrc: "/images/lama1.png",
      altText: "Icon 3",
      description: "Find best projects",
    },
    {
      id: 3,
      title: "microsoft-dev",
      link: "https://github.com/microsoft/Web-Dev-For-Beginners",
      imageSrc: "/images/microsoft.png",
      altText: "Icon 3",
      description: "The top class repo!",
    },
  ];
  const boxData1 = [
    {
      id: 1,
      title: "Glassdoor",
      link: "https://www.glassdoor.co.in/Community/index.htm",
      imageSrc: "/images/glassodor.png",
      altText: "Icon 1",
      description: "Get insights about placement drives.",
    },
    {
      id: 2,
      title: "GFG-Campus archives",
      link: "https://www.geeksforgeeks.org/tag/on-campus/",
      imageSrc: "/images/gfg.png",
      altText: "Icon 2",
      description: "Get interview experiences, difficulty level, and detailed interview information.",
    },
    {
      id: 3,
      title: "InterviewBit",
      link: "https://www.interviewbit.com/coding-interview-questions/",
      imageSrc: "/images/interviewbit.png",
      altText: "Icon 3",
      description: "Solve CS fundamentals, MCQs, and round 1 CS questions.",
    },
    {
      id: 4,
      title: "FreeCodeCamp",
      link: "https://www.freecodecamp.org/",
      imageSrc: "/images/freecodecamp.png",
      altText: "Icon 4",
      description: "Improve your skills with mini-courses and get free certifications.",
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
                  src="/images/result.png"
                  alt=""
                  width={30}
                  height={30}
                />
                <a onClick={() => router.push("/hospitals")}>Results</a>
              </div>
            </li>
            <li>
              <div className="nav-item">
                <Image src="/images/team.png" alt="" width={30} height={30} />
                <a onClick={() => router.push("/request")}>Core Team</a>
              </div>
            </li>
            <li>
              <div className="nav-item">
                <Image src="/images/inte.png" alt="" width={30} height={30} />
                <a onClick={() => router.push("/patient")}>Pannel</a>
              </div>
            </li>
            <li>
              <div className="nav-item">
                <Image src="/images/about.png" alt="" width={30} height={30} />
                <a onClick={() => router.push("/ads")}>About/views</a>
              </div>
            </li>
          </ul>
        </nav>
        <div className="dashboard-data">
        <div className="quote-box">
    <p>
      `Alan Kay once said,The best way to predict the future is to invent it.Keep coding and innovating!`
    </p>
    <style jsx>{`
      .quote-box {
        width: 80%;
        margin: 50px auto;
        padding: 20px;
        border-radius: 10px;
        background: linear-gradient(135deg, #FF7E5F, #FFA387);
        color: #ffffff;
        text-align: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
    `}</style>
  </div>
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
                  width="350"
                  height="250"
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
  {boxData1.map((box) => (
    <div key={box.id} className="video-card">
      <h2>{box.title}</h2>
      <p>{box.description}</p>
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
