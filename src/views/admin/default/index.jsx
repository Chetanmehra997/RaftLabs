import React, { useState } from 'react';
import Card from "components/card";
import MiniCalendar from "components/calendar/MiniCalendar";
import AvatarGroup from 'react-avatar-group';

import Barchart from "views/admin/default/components/Barchart";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { IoIosAlarm } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, } from "react-icons/md";
import avatar8 from "assets/img/avatars/avatar8.png"
import NftBanner1 from "assets/img/nfts/NftBanner1.png"
import {  columnsDataComplex } from "./variables/columnsData";
import { FaCaretDown } from 'react-icons/fa';
import Widget from "components/widget/Widget";

import ComplexTable from "views/admin/default/components/ComplexTable";

import tableDataComplex from "./variables/tableDataComplex.json";

import 'react-calendar/dist/Calendar.css';
import "./style.css";

const Dashboard = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Left Column */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          {/* Your existing content for this column */}

          <div className="grid grid-cols-1 gap-4" >

            <div className="col-span-2 ..." style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex' }}>
                <div className=" flex h-[90px] w-auto flex-row items-center">
                  <div className="rounded-full bg-lightPrimary p-2 dark:bg-gray-700">
                    <span className="flex items-center text-brand-500 dark:text-white">
                      {/* <IoMdHome/> */}
                      <img src={avatar8} alt="Avatar"
                        style={{ width: '50px', borderRadius: '50%' }}
                      />
                    </span>
                  </div>
                </div>

                <div className="h-50 ml-4 flex w-auto flex-col justify-center">

                  <div style={{ display: 'flex' }}>
                    <h4 className="text-ml font-bold text-navy-700" style={{ color: 'black' }}>
                      Good Evening Team
                    </h4>
                  
                  </div>

                  <p className="font-dm text-sm font-medium text-gray-600" style={{ display: 'flex' }}>
                    <p className="font-dm text-sm font-medium text-gray-600">Have an in depth look at all the materic within you dashboar</p>

                  </p>

                </div>

              </div>

              <div className=" flex h-[90px] w-auto flex-row items-center"><IoMdSearch /></div>

            </div>


          </div>


          {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}


          <div class="grid grid-cols-1 gap-4">
            <div className="col-span-2 ... bg-black">
              <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3  " style={{ backgroundColor: 'mediumpurple', borderRadius: '17%' }}>

                <Widget
                  icon={<MdBarChart className="h-7 w-8 " />}
                  title={"Monthly Revenue"}
                  subtitle={"$340.5"}
                  sidetext={"+2.4%"}
                  footer={"Previous Month"}
                  footer1={"$1.7k"}
                />
                <Widget
                  icon={<IoDocuments className="h-6 w-4" />}
                  title={"Monthly Revenue"}
                  subtitle={"$642.39"}
                  sidetext={"+1.4%"}
                  footer={"Previous Month"}
                  footer1={"$3.1k"}
                />

                <Widget
                  icon={<IoDocuments className="h-6 w-6" />}
                  title={"Monthly Revenue"}
                  subtitle={"$10.900"}
                  sidetext={"+4.3%"}
                  footer={"Previous Month"}
                  footer1={"$8.9k"}
                />

              </div>
            </div>


          </div>

          {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
          {/* Tables & Charts */}


          <div className="grid grid-cols-2 gap-0 mt-5" >
            <Card extra="!flex-row flex-grow items-center rounded-[0px] bg-mediumpurple rounded-l-lg" >
              <div className="col-span-2 ..." style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '13px', paddingBottom: '13px', }}>
                <div style={{ display: 'flex' }}>

                  <div className="h-50 ml-4 flex w-auto flex-col justify-center">

                    <h4 className="text-ml font-bold text-navy-700" style={{ color: 'black' }}>
                      Total Sales & Cost
                    </h4>
                    {/* <p className="font-dm text-xs font-medium ml-2 bg-white p-1" style={{borderRadius:'40%'}}>fgfgfg</p> */}

                    <p className="font-dm text-sm font-medium text-gray-600" style={{ display: 'flex' }}>
                      <p className="font-dm text-sm font-medium text-gray-600">Last 60 days</p>

                    </p>
                    <div className="mt-5" style={{ display: 'flex' }}>
                      <h1 className="font-dm text-xxl " style={{
                        fontSize: '22px',
                        fontWeight: '700',
                        color: 'mediumpurple'
                      }}>$956.82k</h1>
                      <p className="font-dm text-xs font-medium ml-2 bg-green p-1" style={{ borderRadius: '40%', background: 'palegreen',height: '25px', }}>+5.4%</p>
                    </div>
                    <span style={{ fontSize: '12px' }}><span style={{ color: 'palegreen', fontSize: '12px' }}>+8.20k</span >vs preview 60 days</span>

                  </div>

                </div>



              </div>

            </Card>


            <Card extra="! items-center rounded-[0px] rounded-r-lg " >
              <h4 className="text-ml font-bold text-navy-700" style={{ color: 'black' }}>
                Analatics
                <span style={{ color: 'green', fontSize: '12px' }}>+5.4%</span>
              </h4>
              <Barchart />
            </Card>

             </div>

          <div className="grid grid-cols-1 gap-0 mt-5" >
          
            <div className="col-span-2 ...">
              <ComplexTable
                columnsData={columnsDataComplex}
                tableData={tableDataComplex}
              />
            </div>


         
          </div>
        </div>

        {/* Right Column */}

        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          {/* Your existing content for this column */}
          <Card >
          <div className=" flex h-[90px] w-auto flex-row items-center grid grid-cols-1 gap-5 md:grid-cols-2 ">
            <div><IoIosNotificationsOutline /></div>

            <div>
              <div className="relative">
                <button
                  className={`${isOpen ? 'bg-white-500' : 'bg-white-500'
                    } px-4 py-2 rounded-md rounded-tl-none rounded-tr-none flex items-center justify-between shadow-md`}
                  onClick={toggleDropdown} style={{ borderRadius: '20px' }}
                >
                  <img src={avatar8} alt="Avatar"
                    style={{ width: '25px', borderRadius: '50%' }}
                  />
                  <span className="text-black ml-2" style={{ color: 'black' }}>Jhonstosan</span>
                  <FaCaretDown className="ml-2 text-black" style={{ color: 'black' }} />
                </button>

                {isOpen && (
                  <div className="absolute mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-md">
                    <ul>
                      <li className="py-2 px-4 hover:bg-gray-100">Option 1</li>
                      <li className="py-2 px-4 hover:bg-gray-100">Option 2</li>
                      <li className="py-2 px-4 hover:bg-gray-100">Option 3</li>
                    </ul>
                  </div>
                )}
              </div>

            </div>
          </div>

          <div style={{paddingBottom:'1.8rem',paddingLeft:'0.4rem',paddingRight:'0.4rem'}}>
            <span class="text-sm text-mediumpurple mb-4" style={{ color: 'mediumpurple' }}>Premium Access</span>

            <div>
              <h2 className="font-bold text-lg">Take Back</h2>
              <h2 className="font-bold text-lg">Your Creative</h2>
              <h2 className="font-bold text-lg" style={{display:'flex'}}>Control  
              <AvatarGroup
                  avatars={["Rames", "Umy", "Iill","Rames", "Umy", "Will" ]}
                  initialCharacters={1}
                  max={3}
                  size={30}
                  displayAllOnHover
                  shadow={2}
                />
              </h2>
            </div>

            <div class="text-sm text-mediumpurple mb-6 mt-8" style={{ color: 'mediumpurple' }}>The Professional Platform</div>

            <button className="w-full px-4 py-2 bg-white text-blue-500 border border-gray-200  shadow-md hover:shadow-lg relative" style={{
              display: 'flex',
              justifyContent: 'end',
            }}>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>

              </div>
              <span className="absolute inset-0 flex items-center justify-left pointer-events-none text-gray-400 ml-1 text-sm">
                Upgrade Now
              </span>
            </button>

            <div className="mt-9 mb-7">
              <MiniCalendar />
            </div>

            <div className="mt-9">
              <table className="w-full">
                <tr className="border-b mb-6 row-height">
                  <td className="py-4 px-4" style={{ display: 'flex' }}>
                    <img src={NftBanner1} alt="Avatar" style={{ width: '31px', borderRadius: '50%' }} />
                    <span style={{ display: 'grid', marginLeft: '7%' }}>
                      <span style={{ fontSize: '12px' }}>Meeting With Client</span>
                      <span style={{ fontSize: '10px' }}>Google Meet</span>
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm"><span style={{
                    display: 'flex',
                    fontSize: '10px',
                    color: 'gray',
                    marginTop:'1rem'
                
                  }}><IoIosAlarm class=" mt-1 mr-2"/>12pm</span></td>
                </tr>
                <tr className="border-b mb-6 row-height">
                  <td className="py-4 px-4" style={{ display: 'flex' }}>
                    <img src={NftBanner1} alt="Avatar" style={{ width: '31px', borderRadius: '50%' }} />
                    <span style={{ display: 'grid', marginLeft: '7%' }}>
                      <span style={{ fontSize: '12px' }}>Weekly Report</span>
                      <span style={{ fontSize: '10px' }}>Google Meet</span>
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm"><span style={{
                    display: 'flex',
                    fontSize: '10px',
                    color: 'gray',
                    marginTop:'1rem'
                
                  }}><IoIosAlarm class=" mt-1 mr-2"/>12pm</span></td>
                </tr>
                <tr className="row-height">
                  <td className="py-4 px-4" style={{ display: 'flex' }}>
                    <img src={NftBanner1} alt="Avatar" style={{ width: '31px', borderRadius: '50%' }} />
                    <span style={{ display: 'grid', marginLeft: '7%' }}>
                      <span style={{ fontSize: '12px' }}>Daily Scrum Meeting</span>
                      <span style={{ fontSize: '10px' }}>Google Meet</span>
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm"><span style={{
                    display: 'flex',
                    fontSize: '10px',
                    color: 'gray',
                    marginTop:'1rem'
                
                  }}><IoIosAlarm class=" mt-1 mr-2"/>12pm</span></td>
                </tr>
              </table>
            </div>


          </div>

          </Card> 
        

        </div>
      </div>



    </div>
  );
};

export default Dashboard;
