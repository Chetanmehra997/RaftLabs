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

      <div className=" mt-5 mb-4" style={{ display: 'flex' }}>
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


      <table class="w-full border-collapse">
        <thead>

          <tr class="bg-white-200">
            <th class="py-2 px-4 text-left no-bold">Customer</th>
            <th class="py-2 px-4 text-left no-bold">Status</th>
            <th class="py-2 px-4 text-left no-bold">Date</th>
            <th class="py-2 px-4 text-left no-bold">Invoice</th>
            <th class="py-2 px-4 text-left no-bold">People</th>
          </tr>

        </thead>
        <tbody>
          <tr class="border-b">
            <td class="py-4 px-4" style={{ display: 'flex' }}>
              <img src={avatar8} alt="Avatar"
                style={{ width: '31px', borderRadius: '50%' }}
              />
              <span style={{ display: 'grid', marginLeft: '7%', }}>
                <span style={{ fontSize: '12px', }}>Flyod johntosan</span>
                <span style={{ fontSize: '8px', }}> johntosan@gmail.com</span>
              </span>

            </td>
            <td class="py-4 px-4 text-sm">Success</td>
            <td class="py-4 px-4 text-sm">Nov 02, 2021</td>
            <td class="py-4 px-4 text-sm">$100.00</td>
            <td class="py-4 px-4 text-sm">
              {/* <span> */}
                <AvatarGroup
                  avatars={["Rames", "Amy", "Will" ]}
                  initialCharacters={1}
                  max={2}
                  size={30}
                  displayAllOnHover
                  shadow={2}
                />
              {/* </span> */}

            </td>
          </tr>
          <tr>
            <td class="py-4 px-4" style={{ display: 'flex' }}>
              <img src={avatar8} alt="Avatar"
                style={{ width: '31px', borderRadius: '50%' }}
              />
              <span style={{ display: 'grid', marginLeft: '7%', }}>
                <span style={{ fontSize: '12px', }}>Flyod johntosan</span>
                <span style={{ fontSize: '8px', }}> johntosan@gmail.com</span>
              </span>

            </td>
            <td class="py-4 px-4 text-sm">Pending</td>
            <td class="py-4 px-4 text-sm">Nov 02, 2021</td>
            <td class="py-4 px-4 text-sm">$100.00</td>
            <td class="py-4 px-4 text-sm">
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



    </Card>
  );
};

export default ComplexTable;
