import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";


// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdShoppingBasket,
  MdAssignment
} from "react-icons/md";

const routes = [
  {
    name: "Home",
    layout: "/admin",
    path: "home",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
    
  },
  {
    name: "Analytic",
    layout: "/admin",
    path: "analytic",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: "Explore",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "explore",
    component: <DataTables />,
  },
  {
    name: "Shop ",
    layout: "/admin",
    path: "shop",
    icon: <MdShoppingBasket className="h-6 w-6" />,
    component: <Profile />,
  },

  {
    name: "Inbox",
    layout: "/admin",
    path: "inbox",
    icon: <MdAssignment className="h-6 w-6" />,
    component: <Profile />,
   
  },

  

];
export default routes;
