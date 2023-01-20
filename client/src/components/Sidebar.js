import { RiHandHeartLine } from "react-icons/ri";
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo, FaDiscord } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="flex flex-col py-3 space-y-4 w-24 h-screen m-1 bg-discordgray-900 rounded-md">
      <button
        className="flex mx-auto p-4 text-gray-300 text-5xl bg-discordgray-800 
       rounded-8xl hover:rounded-3xl active:translate-y-1 hover:bg-indigo-600 duration-200"
      >
        <FaDiscord />
      </button>
      <button
        className="flex mx-auto p-4 text-gray-300 text-5xl bg-discordgray-800 
        rounded-8xl hover:rounded-3xl active:translate-y-1 hover:bg-indigo-600  duration-200"
      >
        <RiHandHeartLine />
      </button>
      <button
        className="flex mx-auto p-4 text-gray-300 text-5xl bg-discordgray-800 
        rounded-8xl hover:rounded-3xl active:translate-y-1 hover:bg-indigo-600  duration-200"
      >
        <BsFillLightningFill />
      </button>
      <button
        className="flex mx-auto p-4 text-gray-300 text-5xl bg-discordgray-800 
        rounded-8xl hover:rounded-3xl active:translate-y-1 hover:bg-indigo-600  duration-200"
      >
        <FaFire />
      </button>
      <button
        className="flex mx-auto p-4 text-gray-300 text-5xl bg-discordgray-800 
        rounded-8xl hover:rounded-3xl active:translate-y-1 hover:bg-indigo-600  duration-200"
      >
        <FaPoo />
      </button>
      <button
        className="flex mx-auto p-4 text-gray-300 text-5xl bg-discordgray-800 
        rounded-8xl hover:rounded-3xl active:translate-y-1 hover:bg-indigo-600  duration-200"
      >
        <BsPlus />
      </button>
      <button
        className="flex mx-auto p-4 text-gray-300 text-5xl bg-discordgray-800 
        rounded-8xl hover:rounded-3xl active:translate-y-1 hover:bg-indigo-600  duration-200"
      >
        <BsGearFill />
      </button>
    </div>
  );
};

export default Sidebar;
