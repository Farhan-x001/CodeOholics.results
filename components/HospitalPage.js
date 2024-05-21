import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/HospitalPage.module.css";

const AppointmentDetailsPopup = ({ appointment, onClose }) => {
  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        {/* Display appointment details */}
        <h2>{appointment.name}</h2>
        <p>Contact: {appointment.contact}</p>
        <p>Comment: {appointment.remark}</p>
        {/* Add more appointment details as needed */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const HospitalPage = () => {
  const router = useRouter();
  const dummyData = [
    {
      SN: 1,
      ID: "237r1a0518",
      name: "E.Pavithra",
      rollno: "237r1a0518",
      department: "CSE",
      type: "selected",
      contact: "",
      remark: "Excellent",
    },
    {
      SN: 2,
      ID: "237R1A0409",
      name: "Pranay",
      rollno: "237R1A0409",
      department: "ECE",
      type: "selected",
      contact: "970674507",
      remark: "Excellent",
    },
    {
      SN: 3,
      ID: "237R1A0429",
      name: "K Vivek",
      rollno: "237R1A0429",
      department: "ECE",
      type: "selected",
    },
    {
      SN: 4,
      ID: "237R1A0463",
      name: "Sai Rithvik",
      rollno: "237R1A0463",
      department: "ECE",
      type: "selected",
    },
    {
      SN: 5,
      ID: "237R1A0494",
      name: "M SRAVAN KUMAR",
      rollno: "237R1A0494",
      department: "ECE",
      type: "selected",
    },
    {
      SN: 6,
      ID: "237R1A0496",
      name: "MAMILLAPALLI ANANTA MARUTI VENKATA RAMANA",
      rollno: "237R1A0496",
      department: "ECE",
      type: "selected",
    },
    {
      SN: 7,
      ID: "237R1A04B7",
      name: "Manaswini Sakhamudi",
      rollno: "237R1A04B7",
      department: "ECE",
      type: "selected",
    },
    {
      SN: 8,
      ID: "237R1A0505",
      name: "Amritanshu Mishra",
      rollno: "237R1A0505",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 9,
      ID: "237R1A0532",
      name: "Mahesh Mangayi",
      rollno: "237R1A0532",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 10,
      ID: "237r1a0566",
      name: "Abhinav kanna",
      rollno: "237r1a0566",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 11,
      ID: "237R1A05AL",
      name: "Gadewar lakshana sai",
      rollno: "237R1A05AL",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 12,
      ID: "237R1A05AV",
      name: "KOTHA VARSHITH REDDY",
      rollno: "237R1A05AV",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 13,
      ID: "237r1a05aw",
      name: "M.Yashaswi",
      rollno: "237r1a05aw",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 14,
      ID: "237R1A05AX",
      name: "M.Yashwanth",
      rollno: "237R1A05AX",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 15,
      ID: "237R1A05AY",
      name: "Mahek Saxena",
      rollno: "237R1A05AY",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 16,
      ID: "237R1A05BQ",
      name: "Sandana aini",
      rollno: "237R1A05BQ",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 17,
      ID: "237r1a05c7",
      name: "Dileep Chakravarthy",
      rollno: "237r1a05c7",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 18,
      ID: "237R1A05CH",
      name: "Bhargavi",
      rollno: "237R1A05CH",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 19,
      ID: "237R1A05CJ",
      name: "Zeba Fathima",
      rollno: "237R1A05CJ",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 20,
      ID: "237R1A05CV",
      name: "G AKHILESH GOUD",
      rollno: "237R1A05CV",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 21,
      ID: "237r1a05cz",
      name: "G.sindhuja",
      rollno: "237r1a05cz",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 22,
      ID: "237R1A05D8",
      name: "B. AASHREETHA",
      rollno: "237R1A05D8",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 23,
      ID: "237R1A05DT",
      name: "MOHAMMED SHOEB ALI",
      rollno: "237R1A05DT",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 24,
      ID: "237R1A05E3",
      name: "Sushma",
      rollno: "237R1A05E3",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 25,
      ID: "237r1a05ed",
      name: "rohanth",
      rollno: "237r1a05ed",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 26,
      ID: "237R1A05EQ",
      name: "Arnav",
      rollno: "237R1A05EQ",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 27,
      ID: "237R1A05F1",
      name: "K.PAVAN SAI",
      rollno: "237R1A05F1",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 28,
      ID: "237R1A05F8",
      name: "Siddhartha",
      rollno: "237R1A05F8",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 29,
      ID: "237r1a05g4",
      name: "Sai Nutan",
      rollno: "237r1a05g4",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 30,
      ID: "237R1A05H7",
      name: "V. Komal",
      rollno: "237R1A05H7",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 32,
      ID: "237R1A05H7",
      name: "VINOD",
      rollno: "237R1A05H7",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 33,
      ID: "237R1A05J1",
      name: "Sathya Jaya Sree Siddabathuni",
      rollno: "237R1A05J1",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 34,
      ID: "237r1a05k0",
      name: "Sujith kumar",
      rollno: "237r1a05k0",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 35,
      ID: "237R1A05K5",
      name: "Bhavish Ankam",
      rollno: "237R1A05K5",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 36,
      ID: "237r1a05l6",
      name: "Pavitra",
      rollno: "237r1a05l6",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 37,
      ID: "237R1A05N7",
      name: "MACHA ROHITH",
      rollno: "237R1A05N7",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 38,
      ID: "237R1A05P1",
      name: "Abdul Rahman",
      rollno: "237R1A05P1",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 39,
      ID: "237R1A05R3",
      name: "Vanga Karthik Reddy",
      rollno: "237R1A05R3",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 40,
      ID: "237R1A05R4",
      name: "Vanga Kavya Sree",
      rollno: "237R1A05R4",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 41,
      ID: "237R1A05R5",
      name: "Yandapalli Anshitha",
      rollno: "237R1A05R5",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 42,
      ID: "237R1A05R6",
      name: "Yarra.Harshini",
      rollno: "237R1A05R6",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 43,
      ID: "237R1A05V2",
      name: "K Deekshith Reddy",
      rollno: "237R1A05V2",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 44,
      ID: "237r1a05v7",
      name: "k.shashaank",
      rollno: "237r1a05v7",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 45,
      ID: "237r1a05x2",
      name: "Pajjuri Rahul",
      rollno: "237r1a05x2",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 46,
      ID: "237R1A05X4",
      name: "Vedh Rishi",
      rollno: "237R1A05X4",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 47,
      ID: "237R1A05Y6",
      name: "V.Abhliash Chary",
      rollno: "237R1A05Y6",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 48,
      ID: "237R1A05Z1",
      name: "A.Abhishekh",
      rollno: "237R1A05Z1",
      department: "CSE",
      type: "selected",
    },
    {
      SN: 49,
      ID: "237R1A3321",
      name: "Saketh vadnala",
      rollno: "237R1A3321",
      department: "CSIT",
      type: "selected",
    },
    {
      SN: 50,
      ID: "237R1A3332",
      name: "KAIRAMKONDA PALLAVI",
      rollno: "237R1A3332",
      department: "CSIT",
      type: "selected",
    },
    {
      SN: 51,
      ID: "237R1A6631",
      name: "VAAGDEVI KORIPALLY",
      rollno: "237R1A6631",
      department: "CSE - (AI & ML)",
      type: "selected",
    },
    {
      SN: 52,
      ID: "237r1a6651",
      name: "Siri",
      rollno: "237r1a6651",
      department: "CSM",
      type: "selected",
    },
    {
      SN: 53,
      ID: "237R1A6684",
      name: "K.Sai Sruti",
      rollno: "237R1A6684",
      department: "CSE - (AI & ML)",
      type: "selected",
    },
    {
      SN: 54,
      ID: "237R1A66C2",
      name: "VENKATREDDY KARTHIK REDDY",
      rollno: "237R1A66C2",
      department: "CSE - (AI & ML)",
      type: "selected",
    },
    {
      SN: 55,
      ID: "237R1A66C5",
      name: "YEDAVALLI CHANDAN KUMAR",
      rollno: "237R1A66C5",
      department: "CSE - (AI & ML)",
      type: "selected",
    },
    {
      SN: 56,
      ID: "237R1A6715",
      name: "D Pranav Sai",
      rollno: "237R1A6715",
      department: "CSE (DS)",
      type: "selected",
    },
    {
      SN: 57,
      ID: "237R1A6719",
      name: "EDAMAKANTI RAVI THEJA REDDY",
      rollno: "237R1A6719",
      department: "CSE (DS)",
      type: "selected",
    },
    {
      SN: 58,
      ID: "237R1A6723",
      name: "Kushal kumar",
      rollno: "237R1A6723",
      department: "CSE (DS)",
      type: "selected",
    },
    {
      SN: 59,
      ID: "237R1A67H7",
      name: "Abhinav",
      rollno: "237R1A67H7",
      department: "CSE (DS)",
      type: "selected",
    },
    {
      SN: 60,
      ID: "237R1A67J2",
      name: "P.R.SHARANYA",
      rollno: "237R1A67J2",
      department: "CSE (DS)",
      type: "selected",
    },
    {
      SN: 61,
      ID: "227R1A05P8",
      name: "Nausheen Fatima",
      rollno: "227R1A05P8",
      department: "CSE-d",
      type: "selected",
    },
    {
      SN: 62,
      ID: "227R1A6782",
      name: "Abhinav Donthula",
      rollno: "227R1A6782",
      section: "B",
      department: "CSE (DS)",
      remark: "Keep it up!",
      type: "selected",
    },
    {
      SN: 63,
      ID: "237R1A05L5",
      name: "Sushmitha",
      rollno: "237R1A05L5",
      section: "F",
      department: "CSE",
      remark: "Impressive work!",
      type: "selected",
    },
    {
      SN: 64,
      ID: "237r1a0518",
      name: "E. Pavithra",
      rollno: "237r1a0518",
      section: "A",
      department: "CSE",
      remark: "Keep it up!",
      type: "selected",
    },
    {
      SN: 65,
      ID: "237r1a05h1",
      name: "Uday Patil",
      rollno: "237r1a05h1",
      section: "C",
      department: "CSE",
      remark: "Impressive work!",
      type: "selected",
    },
    {
      SN: 66,
      ID: "237R1A05G3",
      name: "Harshadith. N",
      rollno: "237R1A05G3",
      section: "C",
      department: "CSE",
      remark: "Superb effort!",
      type: "selected",
    },
    {
      SN: 67,
      ID: "237R1A05L9",
      name: "G. Dheeraj",
      rollno: "237R1A05L9",
      section: "D",
      department: "CSE",
      remark: "Keep it up!",
      type: "selected",
    },
    {
      SN: 68,
      ID: "237R1A67H0",
      name: "Nagashashank Panyam",
      rollno: "237R1A67H0",
      section: "C",
      department: "CSE (DS)",
      remark: "Well done!",
      type: "selected",
    },
    {
      SN: 69,
      ID: "237R1A66C4",
      name: "Y. Kaushal Kumar",
      rollno: "237R1A66C4",
      section: "B",
      department: "CSM",
      remark: "Superb effort!",
      type: "selected",
    },
    {
      SN: 70,
      ID: "237R1A0423",
      name: "Ruthvik Indirala",
      rollno: "237R1A0423",
      section: "A",
      department: "ECE",
      remark: "Superb effort!",
      type: "selected",
    },
    {
      SN: 71,
      ID: "237R1A6738",
      name: "Mohammed Maaz",
      rollno: "237R1A6738",
      section: "A",
      department: "CSE (DS)",
      remark: "Excellent work!",
      type: "selected",
    },
    {
      SN: 72,
      ID: "237R1A05L9",
      name: "G. Dheeraj",
      rollno: "237R1A05L9",
      section: "D",
      department: "CSE",
      remark: "Well done!",
      type: "selected",
    },
    {
      SN: 73,
      ID: "237R1A66R2",
      name: "Jagannathan",
      rollno: "237R1A66R2",
      section: "D",
      department: "CSE - (AI & ML)",
      remark: "Well done!",
      type: "selected",
    },
    {
      SN: 74,
      ID: "227R1A73C0",
      name: "Bhuvan Sai",
      rollno: "227R1A73C0",
      section: "B",
      department: "AIML",
      remark: "Excellent work!",
      type: "selected",
    },
    {
      SN: 75,
      ID: "237R5A0503",
      name: "SYED AFZAL UR RAHMAN",
      rollno: "237R5A0503",
      section: "A",
      department: "CSE",
      remark: "Excellent work!",
      type: "selected",
    },
    {
      SN: 76,
      ID: "227R1A05L7",
      name: "Chiluvuri Emmanuel Judson",
      rollno: "227R1A05L7",
      section: "D",
      department: "CSE",
      remark: "Impressive work!",
      type: "selected",
    },
    {
      SN: 77,
      ID: "227R1A05N6",
      name: "Kaluri Karthikeya",
      rollno: "227R1A05N6",
      section: "D",
      department: "CSE",
      remark: "Excellent work!",
      type: "selected",
    },
    {
      SN: 78,
      ID: "227R1A05P0",
      name: "Hanish",
      rollno: "227R1A05P0",
      section: "D",
      department: "CSE",
      remark: "Keep it up!",
      type: "selected",
    },
    {
      SN: 79,
      ID: "227r1a66d6",
      name: "Betala Shasi Kiran",
      rollno: "227r1a66d6",
      section: "C",
      department: "CSE - (AI & ML)",
      remark: "Impressive work!",
      type: "selected",
    },
    {
      SN: 80,
      ID: "227R1A66E5",
      name: "D. Jithin",
      rollno: "227R1A66E5",
      section: "C",
      department: "CSE - (AI & ML)",
      remark: "Keep it up!",
      type: "selected",
    },
    {
      SN: 81,
      ID: "227R1A66H2",
      name: "MOHAMMED.ARFAN KHAN",
      rollno: "227R1A66H2",
      section: "C",
      department: "CSE - (AI & ML)",
      remark: "Excellent work!",
      type: "selected",
    },
    {
      SN: 82,
      ID: "227R1A6734",
      name: "Mohammad Kammar Ahmed",
      rollno: "227R1A6734",
      section: "A",
      department: "CSE (DS)",
      remark: "Keep it up!",
      type: "selected",
    },
    {
      SN: 83,
      ID: "227R1A67C7",
      name: "Deepika Vegesna",
      rollno: "227R1A67C7",
      section: "B",
      department: "CSE (DS)",
      remark: "Impressive work!",
      type: "selected",
    },
    {
      SN: 84,
      ID: "227R1A6776",
      name: "Arya Dova",
      rollno: "227R1A6776",
      section: "B",
      department: "CSE (DS)",
      remark: "Impressive work!",
      type: "selected",
    },
    {
      SN: 85,
      ID: "227R1A6768",
      name: "Prakash Bandapalli",
      rollno: "227R1A6768",
      section: "D",
      department: "CSE (DS)",
      remark: "Excellent work!",
      type: "selected",
    },
    {
      SN: 86,
      ID: "227r1a0424",
      name: "G Aravind Kumar",
      rollno: "227r1a0424",
      section: "A",
      department: "ECE",
      remark: "Superb effort!",
      type: "selected",
    },
    {
      SN: 87,
      ID: "227r1a05r2",
      name: "Hamsini",
      rollno: "227r1a05r2",
      section: "d",
      department: "cse",
      remark: "Keep it up!",
      type: "selected",
    },
    {
      SN: 87,
      ID: "227r1a6749",
      name: "sameer",
      rollno: "227r1a05r2",
      section: "a",
      department: "csd",
      remark: "Keep it up!",
      type: "selected",
    },
    {
      SN: 88,
      ID: "227R1A0486",
      name: "Sathwik",
      rollno: "227R1A0486",
      section: "B",
      department: "ECE",
      remark: "Superb effort!",
      type: "selected",
    },
    {
      SN: 89,
      ID: "227r1a05q7",
      name: "Shaik Sameer Hussain",
      rollno: "227r1a05q7",
      section: "D",
      department: "CSE",
      remark: "Great job!",
      type: "selected",
    },
    {
      SN: 90,
      ID: "227r1a73a5",
      name: "MD RAHEMAN",
      rollno: "227r1a73a5",
      section: "B",
      department: "AIML",
      remark: "Good going!",
      type: "selected",
    },
    {
      SN: 90,
      ID: "217r1a05k2",
      name: "v.v.s",
      rollno: "217r1a05k2",
      section: "c",
      department: "cse",
      remark: "Good going!",
      type: "selected",
    },
    {
      SN: 90,
      name: "Gopu Siri",
      phno: "6305600338",
      department: "CSM",
      remark: "Cash",
    },
    {
      SN: 91,
      name: "S. Manoj Kumar",
      phno: "800818968",
      department: "CSE",
      remark: "Cash",
    },
    {
      SN: 92,
      name: "Udaya Kumar Varma",
      phno: "6305470546",
      department: "CSD",
      remark: "Cash",
    },
    {
      SN: 93,
      name: "MD. MADHIYA Begum",
      phno: "7569083575",
      department: "CSE",
      remark: "Cash",
    },
    {
      SN: 94,
      name: "G. Dhanush Kumar",
      phno: "9542180499",
      department: "CSM",
      remark: "Cash",
    },
    {
      SN: 95,
      name: "J. Niharika",
      phno: "7386775184",
      department: "CSE",
      remark: "Cash",
    },
    {
      SN: 96,
      name: "G. Pavani",
      phno: "9121943281",
      department: "CSD",
      remark: "Cash",
    },
    {
      SN: 97,
      name: "K. Venkatesh",
      phno: "8790594047",
      department: "CSD",
      remark: "Cash",
    },
    {
      SN: 98,
      name: "K. Kiran",
      phno: "8919187924",
      department: "CSM",
      remark: "Cash",
    },
    {
      SN: 99,
      name: "Chandana",
      phno: "8977381911",
      department: "CSM",
      remark: "Cash",
    },
    {
      SN: 100,
      name: "M. Yakshanayai",
      phno: "8309841113",
      department: "CSE",
      remark: "Cash",
    },
    {
      SN: 101,
      name: "S. Satya Jayasri",
      phno: "9247385895",
      department: "CSE",
      remark: "Phone Pe",
    },
    {
      SN: 102,
      name: "Likitha",
      phno: "9705135696",
      department: "CSE",
      remark: "Cash",
    },
    {
      SN: 103,
      name: "G. Sri Charan",
      phno: "9059743414",
      department: "CSE",
      remark: "Cash",
    },
    {
      SN: 104,
      name: "V. Karthik Reddy",
      phno: "6300525505",
      department: "CSM",
      remark: "Cash",
    },
    {
      SN: 105,
      name: "P. Anusha",
      phno: "8801706558",
      department: "CSD-D",
      remark: "Cash",
    },
    {
      SN: 106,
      name: "K. Vagdevi",
      phno: "6303959592",
      department: "CSM",
      remark: "Cash",
    },
    {
      SN: 107,
      name: "K. Mahesh",
      phno: "9908342917",
      department: "CSE B",
      remark: "Cash",
    },
    {
      SN: 108,
      name: "SK Fasi",
      phno: "6302334559",
      department: "CSD C",
      remark: "Cash",
    },
    {
      SN: 109,
      name: "Varshini",
      phno: "9618889422",
      department: "CSIT",
      remark: "Cash",
    },
    {
      SN: 110,
      name: "Swetha",
      phno: "8919784264",
      department: "CSM A",
      remark: "Cash",
    },
    {
      SN: 111,
      name: "Varshini",
      phno: "8328879115",
      department: "CSM B",
      remark: "Cash",
    },
    {
      SN: 112,
      name: "Abhista",
      phno: "7659812267",
      department: "ECE A",
      remark: "Cash",
    },
    {
      SN: 113,
      name: "Sohail Akther",
      phno: "9381026650",
      department: "CSD A",
      remark: "Phone Pe",
    },
    {
      SN: 114,
      name: "Pranay Raj",
      phno: "8790214100",
      department: "CSD A",
      remark: "Cash",
    },
  ];
  const [popupAppointment, setPopupAppointment] = useState(null); // Define state variable
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // State to hold search query
  const [selectedDate, setSelectedDate] = useState(""); // State to hold selected date
  const [selectedDepartment, setSelectedDepartment] = useState(""); // State to hold selected department
  const [filteredData, setFilteredData] = useState(dummyData); // State to hold filtered data
  const recordsPerPage = 50;
  const totalPages = Math.ceil(filteredData.length / recordsPerPage);
  const currentPageData = filteredData.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      filterData(searchQuery, selectedDepartment); // Filter data based on search query and selected department
      setCurrentPage(1);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDepartmentChange = (event) => {
    const department = event.target.value;
    setSelectedDepartment(department);
    filterData(searchQuery, department); // Filter data based on search query and selected department
  };
  const handleViewMoreClick = (appointment) => {
    setPopupAppointment(appointment);
  };

  const filterData = (query, department) => {
    let filtered = dummyData;
    if (department) {
      filtered = filtered.filter(
        (record) => record.department.toLowerCase() === department.toLowerCase()
      );
    }
    filtered = filtered.filter(
      (record) =>
        record.name.toLowerCase().includes(query.toLowerCase()) ||
        record.rollno.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterData(query, selectedDepartment); // Filter data based on search query and selected department
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
              <Image
                src="/images/dashboard.png"
                alt=""
                width={30}
                height={30}
              />
              <a onClick={() => router.push("/home")}>Dashboard</a>
            </div>
          </li>
          <li>
            <div className="nav-item1">
              <Image src="/images/dasin (4).png" alt="" width={30} height={30} />
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
      {" "}
      <div className="dashboard-data">
        <div className="topbartable">
          <h1 className="drive-header">Drive Results</h1>
          <div className="fields">
            <div className="field">
              <label htmlFor="department">Filter by Department</label>
              <select id="department" onChange={handleDepartmentChange}>
                <option value="">All Departments</option>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="CSIT">CSIT</option>
                <option value="CSE - (AI & ML)">CSE - (AI & ML)</option>
                <option value="CSM">CSM</option>
                <option value="CSE (DS)">CSE (DS)</option>
              </select>
            </div>
            {/* <div className="field">
              <label htmlFor="sortBy">Sort by</label>
              <select id="sortBy">
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div> */}
            <div className="field">
              <label htmlFor="search">Search</label>
              <input
                type="text"
                id="search"
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyPress={handleKeyPress}
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
        {filteredData.length > 0 ? (
          <div className="con">
            <table>
              <thead>
                <tr className="tr1">
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Type</th>
                  <th>Details</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {currentPageData.map((record, index) => (
                  <tr class="tr2" key={index}>
                    <td>{record.SN}</td>
                    <td>{record.name}</td>
                    <td>{record.rollno}</td>
                    <td>{record.department}</td>
                    <td>
                      <div
                        className={`type-oval ${
                          record.type === "on time"
                            ? "type-hospital"
                            : "type-clinic"
                        }`}
                      >
                        {record.type}
                      </div>
                    </td>
                    {/* <td>
                      <button onClick={() => handleViewMoreClick(record)}>
                        View More
                      </button>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pagination">
              Page {currentPage} of {totalPages}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                &laquo; Prev
              </button>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={currentPage === index + 1 ? "active" : ""}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next &raquo;
              </button>
            </div>
          </div>
        ) : (
          <p>No records found.</p>
        )}
        {popupAppointment && (
          <AppointmentDetailsPopup
            appointment={popupAppointment}
            onClose={() => setPopupAppointment(null)}
          />
        )}
      </div>
    </div>
  );
};

export default HospitalPage;
