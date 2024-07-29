import { GoDotFill } from "react-icons/go";

const About = () => {
  return (
    <div className="flex justify-evenly py-32 dark:bg-gray-100 max-sm:block  max-sm:py-10  max-sm:justify-center ">
      <img
        className="w-96  h-auto object-cover max-sm:w-56"
        src="https://mail.google.com/mail/u/0?ui=2&ik=108f6e5c56&attid=0.1&permmsgid=msg-a:r5702192071865280734&th=190e7d6ab84ed8c0&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ8SRxgaS_Q-NWe-3_2zqBhO7Dr1E_AzVfWIiUqlJEcMj6w3XD0qZ4ZriRQIUMnvpwgqVH5D2Em0Wr2IsOQ3ZmMr-OCw6RwtKKrSH668ExHDu78jgwB9TEUE2g0&disp=emb&realattid=190e7d699eb8e19b1632"
      />
      <div className="w-[40%]">
        <h2 className="text-bold font-semibold text-3xl  text-center">
          Curious about me? Here you have it:
        </h2>
        <div className="text-gray-600  ">
          <p>
            I'm a designer turned full stack developer, passionate about
            React.js and Node.js. I excel in blending technical and visual
            aspects to craft exceptional digital products, prioritizing user
            experience, precise design, and optimized code. Since starting my
            web development journey in 2015, I've embraced challenges and kept
            up with the latest tech trends. Now in my early thirties, seven
            years in, I'm building cutting-edge web apps using Next.js,
            TypeScript, Nestjs, Tailwindcss, Supabase, and more. With a
            progressive mindset, I enjoy the entire product development process,
            from ideation to execution. Off duty, you'll find me on Twitter,
            tracking <br />
            startup journeys, or unwinding. Follow me for tech insights and
            public project <br /> updates on Twitter or GitHub Finally, some
            quick bits about me.
          </p>
          <div className="flex items-center gap-2">
            <GoDotFill className="text-base" />
            B.E. in Computer Engineering <br />
            <GoDotFill className="text-base" />
            Full time freelancer <br />
            <GoDotFill className="text-base" />
            Avid learner
          </div>
          <p>
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
