import { GoDotFill } from "react-icons/go";
const About = () => {
  return (
    <div className="flex justify-evenly pt-64">
      <img className="w-96 h-auto" src="/image/stand.jpeg/" />
      <div>
        <h2 className="text-bold font-semibold text-3xl pl-72">
          Curious about me? Here you have it:
        </h2>
        <br />
        <p className="text-gray-600 pl-72">
          I'm a designer turned full stack developer, passionate about React.js
          and <br />
          Node.js. I excel in blending technical and visual aspects to craft
          exceptional
          <br />
          digital products, prioritizing user experience, precise design, and
          optimized <br />
          code.
          <br />
          <br />
          Since starting my web development journey in 2015, I've embraced
          <br />
          challenges and kept up with the latest tech trends. Now in my early
          thirties,
          <br />
          seven years in, I'm building cutting-edge web apps using Next.js,
          TypeScript,
          <br />
          Nestjs, Tailwindcss, Supabase, and more.
          <br />
          <br />
          With a progressive mindset, I enjoy the entire product development
          process,
          <br />
          from ideation to execution. Off duty, you'll find me on Twitter,
          tracking <br />
          startup journeys, or unwinding. Follow me for tech insights and public
          project <br /> updates on Twitter or GitHub.
          <br />
          <br />
          Finally, some quick bits about me.
          <br />
          <br />
          <div className="flex items-center gap-2">
            <GoDotFill className="text-base" />
            B.E. in Computer Engineering <br />
            <GoDotFill className="text-base" />
            Full time freelancer <br />
            <GoDotFill className="text-base" />
            Avid learner
            <br />
          </div>
          <br />
          One last thing, I'm available for freelance work, so feel free to
          reach out and say hello! I promise I don't bite 😉
          <br />
        </p>
      </div>
    </div>
  );
};
export default About;
