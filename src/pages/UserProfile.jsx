import { useContext, useState } from "react";
import {
  FiUser,
  FiLogOut,
  FiChevronDown,
} from "react-icons/fi";
import { useNavigate } from "react-router";
import { MyStore } from "../context/MyStore";

export default function UserProfile() {
   const {open, setOpen} = useContext(MyStore)
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('loggedUser')) || [{ name: 'Guest' }];
  // console.log(user[0].name);

  const firstLetter = user[0].name.charAt(0).toUpperCase();

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    navigate("/login");
  };

  return (
    <div className="relative">
     <button
  onClick={() => setOpen((prev) => !prev)}
  className="flex items-center gap-3 rounded-xl border border-[#1f1b18] bg-[#1f1b18] px-2 py-2 transition-all duration-300 hover:border-[#d86b3d] hover:bg-[#2b2622]"
>
  {/* Avatar */}
  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#d86b3d] text-base font-bold text-white">
    {firstLetter}
  </div>

  {/* Show full name only on desktop */}
  <span className="hidden whitespace-nowrap text-sm font-semibold text-white lg:block">
    {user[0].name}
  </span>

  {/* Show arrow only on desktop */}
  <FiChevronDown
    size={18}
    className={`hidden text-gray-300 transition-transform duration-300 lg:block ${
      open ? "rotate-180" : ""
    }`}
  />
</button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-56 overflow-hidden rounded-2xl border border-[#e7d5c3] bg-[#fff8f2] shadow-2xl">
          {/* Header */}
          <div className="border-b border-[#ead7c4] bg-[#f6e5d6] px-5 py-4">
            <p className="text-xs uppercase tracking-wider text-gray-500">
              Signed in as
            </p>
            <p className="mt-1 font-semibold text-[#1f1b18]">
              {user.name}
            </p>
          </div>

          {/* Profile */}
          <button
            onClick={() => {
              setOpen(false);
              navigate("/profile");
            }}
            className="flex w-full items-center gap-3 px-5 py-4 text-sm font-medium text-[#1f1b18] transition hover:bg-[#d86b3d] hover:text-white"
          >
            <FiUser size={18} />
            My Profile
          </button>

          {/* Divider */}
          <div className="border-t border-[#ead7c4]" />

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 px-5 py-4 text-sm font-medium text-red-600 transition hover:bg-red-500 hover:text-white"
          >
            <FiLogOut size={18} />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}