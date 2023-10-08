import React, { useState } from 'react';

import avatar8 from "assets/img/avatars/avatar8.png"
import { FaCaretDown } from 'react-icons/fa';
import { IoMdToday } from "react-icons/io";
import AvatarGroup from 'react-avatar-group';
import Card from "components/card";

const ComplexTable = (props) => {


  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [isOpen1, setIsOpen1] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const [isOpen2, setIsOpen2] = useState(false);

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };


  const [isOpen3, setIsOpen3] = useState(false);

  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };






  return (
    <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
      <div class="relative flex items-center justify-between pt-4">
        <div class="text-xl font-bold text-navy-700 dark:text-white">
          Transastion History
        </div>

        <div class="">
          <div className="relative">
            <button
              className={`${isOpen3 ? 'bg-white-500' : 'bg-white-500'
                } px-4 py-2 rounded-md rounded-tl-none rounded-tr-none flex items-center justify-between shadow-md`}
              onClick={toggleDropdown3}
            >
              <IoMdToday
                style={{ width: '25px', borderRadius: '50%', color: 'gray' }}
              />
              <span className="text-black ml-2" style={{ color: 'black' }}>Month</span>
              <FaCaretDown className="ml-2 text-black" style={{ color: 'black' }} />
            </button>

            {isOpen3 && (
              <div className="absolute mt-2 w-36 bg-white border border-gray-300 shadow-lg rounded-md">
                <ul>
                  <li className="py-2 px-4 hover:bg-gray-100">Option 1</li>
                  <li className="py-2 px-4 hover:bg-gray-100">Option 2</li>
                  <li className="py-2 px-4 hover:bg-gray-100">Option 3</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        {/* <CardMenu /> */}
      </div>

      <div className=" mt-5 mb-4 md:grid-cols-3" style={{ display: 'flex' }}>
        <div className="relative ">
          <button
            className={`${isOpen ? 'bg-gray-100' : 'bg-gray-100'
              } px-4 py-2 rounded-md rounded-tl-none rounded-tr-none flex items-center justify-between shadow-md`}
            onClick={toggleDropdown}
          >

            <span className="text-black ml-2" style={{ color: 'black' }}>Recepient</span>
            <FaCaretDown className="ml-2 text-black" style={{ color: 'black' }} />
          </button>

          {isOpen && (
            <div className="absolute mt-2 w-36 bg-white border border-gray-300 shadow-lg rounded-md">
              <ul>
                <li className="py-2 px-4 hover:bg-gray-100">Option 1</li>
                <li className="py-2 px-4 hover:bg-gray-100">Option 2</li>
                <li className="py-2 px-4 hover:bg-gray-100">Option 3</li>
              </ul>
            </div>
          )}
        </div>

        <div className="relative ml-2 mr-2">
          <button
            className={`${isOpen1 ? 'bg-gray-100' : 'bg-gray-100'
              } px-4 py-2 rounded-md rounded-tl-none rounded-tr-none flex items-center justify-between shadow-md`}
            onClick={toggleDropdown1}
          >

            <span className="text-black ml-2" style={{ color: 'black' }}>Amount</span>
            <FaCaretDown className="ml-2 text-black" style={{ color: 'black' }} />
          </button>

          {isOpen1 && (
            <div className="absolute mt-2 w-36 bg-white border border-gray-300 shadow-lg rounded-md">
              <ul>
                <li className="py-2 px-4 hover:bg-gray-100">Option 1</li>
                <li className="py-2 px-4 hover:bg-gray-100">Option 2</li>
                <li className="py-2 px-4 hover:bg-gray-100">Option 3</li>
              </ul>
            </div>
          )}
        </div>

        <div className="relative ">
          <button
            className={`${isOpen2 ? 'bg-gray-100' : 'bg-gray-100'
              } px-4 py-2 rounded-md rounded-tl-none rounded-tr-none flex items-center justify-between shadow-md`}
            onClick={toggleDropdown2}
          >

            <span className="text-black ml-2" style={{ color: 'black' }}>Status</span>
            <FaCaretDown className="ml-2 text-black" style={{ color: 'black' }} />
          </button>

          {isOpen2 && (
            <div className="absolute mt-2 w-36 bg-white border border-gray-300 shadow-lg rounded-md">
              <ul>
                <li className="py-2 px-4 hover:bg-gray-100">Option 1</li>
                <li className="py-2 px-4 hover:bg-gray-100">Option 2</li>
                <li className="py-2 px-4 hover:bg-gray-100">Option 3</li>
              </ul>
            </div>
          )}
        </div>
      </div> 


      <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 text-left">Customer</th>
            <th className="py-2 px-4 text-left">Status</th>
            <th className="py-2 px-4 text-left">Date</th>
            <th className="py-2 px-4 text-left">Invoice</th>
            <th className="py-2 px-4 text-left">People</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-4 px-4" data-label="Customer" style={{ display: 'flex' }}>
              <img src={avatar8} alt="Avatar" style={{ width: '31px', borderRadius: '50%' }} />
              <div style={{ display: 'grid', marginLeft: '7%' }}>
                <span style={{ fontSize: '12px' }}>Flyod johntosan</span>
                <span style={{ fontSize: '8px' }}>johntosan@gmail.com</span>
              </div>
            </td>
            <td className="py-4 px-4 text-sm" data-label="Status">Success</td>
            <td className="py-4 px-4 text-sm" data-label="Date">Nov 02, 2021</td>
            <td className="py-4 px-4 text-sm" data-label="Invoice">$100.00</td>
            <td className="py-4 px-4 text-sm" data-label="People">
              <AvatarGroup
                avatars={["Rames", "Amy", "Will" ]}
                initialCharacters={1}
                max={2}
                size={30}
                displayAllOnHover
                shadow={2}
              />
            </td>
          </tr>
          <tr>
            <td className="py-4 px-4" data-label="Customer" style={{ display: 'flex' }}>
              <img src={avatar8} alt="Avatar" style={{ width: '31px', borderRadius: '50%' }} />
              <div style={{ display: 'grid', marginLeft: '7%' }}>
                <span style={{ fontSize: '12px' }}>Flyod johntosan</span>
                <span style={{ fontSize: '8px' }}>johntosan@gmail.com</span>
              </div>
            </td>
            <td className="py-4 px-4 text-sm" data-label="Status">Pending</td>
            <td className="py-4 px-4 text-sm" data-label="Date">Nov 02, 2021</td>
            <td className="py-4 px-4 text-sm" data-label="Invoice">$100.00</td>
            <td className="py-4 px-4 text-sm" data-label="People">
              <AvatarGroup
                avatars={["Hames", "Amy", "Will" ]}
                initialCharacters={1}
                max={2}
                size={30}
                displayAllOnHover
                shadow={2}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>



    </Card>
  );
};

export default ComplexTable;
