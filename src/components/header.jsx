import { MdLightMode } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";
const Header = () => {
  return (
    <div className="flex justify-between pl-32 pr-32 items-center pt-5 ">
      <h1 className="text-3xl font-black">BAT</h1>

      <div className="flex max-sm:hidden ">
        <ul className="flex gap-4 text-gray-400 pr-72 ">
          <li>About</li>
          <li>Work</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>
        <MdLightMode className=" text-2xl" />
        <button className="px-4 bg-black text-white rounded-xl ml-4 ">
          Download CV
        </button>
      </div>
      <HiDotsHorizontal className="max-[4000px]:hidden max-sm:block " />
    </div>
  );
};
export default Header;
