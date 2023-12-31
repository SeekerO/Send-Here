import React, { useRef, useEffect } from "react";
import { TbLogout } from "react-icons/tb";

function Seetings({ Logout, setOpenSettings, openSettings }) {
  const divRef = useRef(null);

  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setOpenSettings(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!openSettings) return null;
  return (
    <div
      ref={divRef}
      className="h-[30px] w-[200px] bg-white relative ml-7 mb-1 rounded-t-md rounded-br-md p-1"
    >
      <button
        onClick={Logout}
        className="flex items-center text-[15px] gap-1 hover:text-blue-400 text-black pr-[2%]"
      >
        Logout
        <TbLogout className="text-[20px]" />
      </button>
    </div>
  );
}

export default Seetings;
