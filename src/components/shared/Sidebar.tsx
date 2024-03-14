import React from "react";
import { FcBullish } from "react-icons/fc";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../../lib/consts/navigation";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { SlLogout } from "react-icons/sl";

const linkClasses =
  "flex items-center gap-3 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

export default function Sidebar() {
  return (
    <div className="bg-neutral-900 w-60 p-3 flex flex-col text-white">
      <div className="flex items-center gap-2 px-1 py-3 hover:animate-pulse">
        <FcBullish fontSize={24} />
        <span className="text-neutral-100 text-lg">wndrflgrc</span>
      </div>
      <div className="flex-1 py-8 flex flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((way) => (
          <SidebarLink key={way.key} way={way} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((way) => (
          <SidebarLink key={way.key} way={way} />
        ))}
        <div className={classNames("text-red-500 cursor-pointer", linkClasses)}>
          <span className="text-xl">
            <SlLogout />
          </span>
          Logout
        </div>
      </div>
    </div>
  );
}

//@ts-expect-error jsx
function SidebarLink({ way }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={way.path}
      className={classNames(
        pathname === way.path
          ? "bg-neutral-700 text-white"
          : "text-neutral-400",
        linkClasses
      )}
    >
      <span className="text-xl">{way.icon}</span>
      {way.label}
    </Link>
  );
}
