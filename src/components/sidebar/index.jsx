
import Links from "./components/Links";
import { IoIosSync } from "react-icons/io";
import routes from "routes.js";

const Sidebar = ({ open, onClose }) => {
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex  flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
    

      <div className={`mx-[56px] mt-[50px] flex items-center`}>
        <div className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
          <div style={{display:'flex'}}>
          <IoIosSync style={{
            width: '38px',
            height: '42px',
            color: 'mediumpurple'
          }}/>
          Omoi
          </div>
        </div>
      </div>
      <div class="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30" />
      {/* Nav item */}

      <ul className="mb-auto pt-1">
        <Links routes={routes} />
      </ul>

    </div>
  );
};

export default Sidebar;
