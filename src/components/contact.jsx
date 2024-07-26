import { FaRegMessage } from "react-icons/fa6";
import { FaRegCopy } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { FaFigma } from "react-icons/fa";
import Tag from "@/components/tag";
const Contact = () => {
  return (
    <div>
      <Tag text="Get in touch " />
      <p className="text-center pt-5 text-gray-600">
        Some of the noteworthy projects I have built
      </p>
      <div className="flex justify-center gap-5 text-3xl font-bold items-center pt-10">
        <FaRegMessage />
        <p>tom@pinecone.mn</p>
        <FaRegCopy />
      </div>
      <div className="flex justify-center text-3xl  font-bold gap-5 items-center pt-5">
        <IoCallOutline />
        <p>+976 88112233</p>
        <FaRegCopy />
      </div>
      <p className="text-gray-600 text-center pt-5">
        {" "}
        You may also find me on these platforms!
      </p>
      <div className="flex justify-center text-2xl gap-5 pt-10 pb-52">
        <FiGithub />
        <CiTwitter />
        <FaFigma />
      </div>
    </div>
  );
};
export default Contact;
