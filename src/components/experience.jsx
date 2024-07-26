import Tag from "./tag";

const Experience = () => {
  return (
    <div className="bg-gray-100 p-20">
      <Tag text="Experience" />
      <p className="text-center pt-5">
        Here is a quick summary of my most recent experiences
      </p>
      <div className="w-[896px] h-72  m-auto flex justify-between border-2 border-inherit border-solid align bg-white rounded-md mt-14">
        <h1 className="text-red-500 font-black pl-5 pt-7">Upwork</h1>
        <ul>
          <li className="font-bold pt-7">Sr. Frontend Developer</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
        <p className="text-gray-400 pr-5 pt-7">Nov 2021 - Present</p>
      </div>
      <div className="w-[896px] h-72  m-auto flex justify-between border-2 border-inherit border-solid align bg-white rounded-md mt-14">
        <h1 className="text-red-500 font-black pl-5 pt-7">Upwork</h1>
        <ul>
          <li className="font-bold pt-7">Team lead</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
        <p className="text-gray-400 pr-5 pt-7">Jul 2017 - Oct 2021</p>
      </div>
      <div className="w-[896px] h-72  m-auto flex justify-between border-2 border-inherit border-solid align bg-white rounded-md mt-14">
        <h1 className="text-red-500 font-black pl-5 pt-7">Upwork</h1>
        <ul>
          <li className="font-bold pt-7">Full Stack Developer</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
        <p className="text-gray-400 pr-5 pt-7">Dec 2015 - May 2017</p>
      </div>
    </div>
  );
};
export default Experience;
