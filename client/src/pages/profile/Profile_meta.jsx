import { Avatar } from "@mantine/core";

export const Profile_meta = () => {
  let metaData = {
    name: "Alina d soza",
    bio: "",
    subject: "Hindi, English",
    contentCount: 20,
    followers: 300,
    contentHours: 100,
  };

  return (
    <div>
      <h2 className="text-center mt-8 text-[2rem] mb-0">{metaData.name}</h2>
      <p className="text-center text-slate-600">{metaData.subject}</p>
      <div className="flex max-w-[35rem] mx-auto mt-12">
        <div className=" basis-4/12 text-center content">
          <h5 className="text-[1.5rem] font-semibold">
            {metaData.contentCount}
          </h5>
          <p>Study Materials</p>
        </div>
        <div className=" basis-4/12 text-center followers">
          <h5 className="text-[1.5rem] font-semibold"> {metaData.followers}</h5>
          <p>Followers</p>
        </div>
        <div className=" basis-4/12 text-center study-time">
          <h5 className="text-[1.5rem] font-semibold">
            {metaData.contentHours}
          </h5>
          <p>Content Hours</p>
        </div>
      </div>
      <div className="bg- rounded-2xl my-10 py-5">
        <p className="text-md text-slate-700 leading-7 max-w-[80rem] mx-auto text-center">
          My name is Katie Sawyer, and I am proud to be a Parkway Early
          Childhood Panda!! I am from St. Louis, received a Bachelor's Degree in
          Education from the University of Dayton, and my Masters in Education
          from Missouri Baptist University. I am certified to teach Early
          Childhood, Early Childhood Special Education, and Elementary
          Education. This will be my eighth year at Parkway Early Childhood
          after four years at Kirkwood Early Childhood Center in Early Childhood
          Special Education.
        </p>
      </div>
    </div>
  );
};
