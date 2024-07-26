import { FaLocationDot } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="flex justify-between  mb-32 max-sm:block  max-sm:justify-center">
      <div>
        <h1 className="font-bold text-3xl pl-32 pt-16">Hi, I’m Ireedui 👋</h1>
        <p className="pl-32 pt-4 text-gray-600">
          I specialize in full stack development, particularly with React.js and
          Node.js.
          <br />
          My main goal is to create exceptional digital experiences that are
          fast, visually
          <br />
          appealing, and accessible to everyone. With over 7 years of experience
          in web <br />
          development, I continue to find joy in crafting innovative solutions
          and designs.
          <br />
          Ulaanbaatar, Mongolia Available for new project
        </p>
        <div className="flex pt-8">
          <FaLocationDot className="ml-32 text-2xl" />
          <p className=" text-gray-600">Ulaanbaatar,Mongolia</p>
        </div>
        <div className="flex">
          <GoDotFill className="ml-32 text-2xl text-red-300" />
          <p className=" text-gray-600">Available for new projects </p>
        </div>
        <div className="flex gap-6 mt-8">
          <FaGithub className="ml-32 text-2xl text-gray-600 " />
          <FaTwitter className=" text-2xl text-gray-600" />
          <FaFigma className=" text-2xl text-gray-600 " />
        </div>
      </div>

      <img
        className="w-80 h-96 mt-16 mr-40 object-cover "
        src="https://mail.google.com/mail/u/0?ui=2&ik=108f6e5c56&attid=0.2&permmsgid=msg-a:r5702192071865280734&th=190e7d6ab84ed8c0&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ8nbwwPv41YOWyXGCsUp9bm-44bjpiRJavBiua87j_tH67tR65fQIo_afIcTBVntvk-SrAve1qmc80ZKEPd-UoQL3KK1Gykhk32eT38vJHT6fv9RH9MxqYnQb8&disp=emb&realattid=190e7d60ac8a557dee81"
      />
    </div>
  );
};
export default Hero;
