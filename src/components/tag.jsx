const Tag = ({ text }) => {
  console.log("text", text);
  return (
    <div className="bg-teal-300 w-24 rounded mt-52  text-center ml-[1050px]">
      {text}
    </div>
  );
};

export default Tag;
