"use client";

import React from "react";
import Link from "next/link";
const sidebarLinks = [
  { label: "Dashboard", icon: "🏠", path: "/user" },
  { label: "Profile", icon: "👤", path: "/user/profile" },
  { label: "Settings", icon: "🤫", path: "/user/settings" },
  { label: "Logout", icon: "🚪", path: "/logout" },
];

export default function UserSidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white h-[calc(100vh-50px)] p-5 space-y-4">
      <h2 className="text-2xl font-bold mb-6">User Panel</h2>
      <ul className="space-y-3">
        {sidebarLinks.map(({ label, icon, path }, idx) => (
          <li key={idx}>
            <Link
              href={path}
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-700 rounded transition-colors duration-200"
            >
              <span className="text-xl">{icon}</span>
              <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
