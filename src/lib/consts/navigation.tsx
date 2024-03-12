import { FcDepartment, FcLeave } from "react-icons/fc";
import {
  HiOutlineViewGrid,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
} from "react-icons/hi";
import { MdPeopleAlt } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "departments",
    label: "Departments",
    path: "/departments",
    icon: <FcDepartment />,
  },
  {
    key: "employees",
    label: "Employees",
    path: "/employees",
    icon: <MdPeopleAlt />,
  },
  {
    key: "leave",
    label: "Leave",
    path: "/leave",
    icon: <FcLeave />,
  },
  {
    key: "evaluation analysis",
    label: "Evaluation Analysis",
    path: "/evaluation analysis",
    icon: <TbReportAnalytics />,


  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <HiOutlineCog />,
  },
  {
    key: "support",
    label: "Help & Support",
    path: "/support",
    icon: <HiOutlineQuestionMarkCircle />,
  },
];
