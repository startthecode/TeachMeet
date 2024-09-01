export const Divider = ({ spacing }) => {
  return (
    <div className={`relative ${spacing}`}>
      <div className="absolute left-0 top-[50%] translateY-[-50%] w-full h-[0.1rem] bg-slate-200"></div>
      <p className="relative bg-white max-w-max px-2 mx-auto">or</p>
    </div>
  );
};
