import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-neutral-900 w-60 p-3 flex flex-col">
      <div className="py-8 flex flex-1 flex-col gap-0.5">
        <Link
          to={"/dashboard"}
          class="bg-neutral-700 text-white p-2 py-2 rounded-xl text-center hover:bg-white hover:text-black"
        >
          <span> Dashboard</span>
        </Link>

        <Link
          to={"articlelist"}
          class="bg-neutral-700 text-white p-2 py-2 rounded-xl text-center hover:bg-white hover:text-black"
        >
          <span> Article List</span>
        </Link>
        <Link
          to={`profile`}
          class="bg-neutral-700 text-white p-2 py-2 rounded-xl text-center hover:bg-white hover:text-black"
        >
          <span> Edit Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
