import { Link, useLocation, useSearchParams } from "react-router-dom";
export const AuthSwitch = () => {
  let { pathname } = useLocation();
  return (
    <div className="flex">
      <Link to=".signin">Sign in</Link>
      <Link to=".signup">Sign in</Link>
    </div>
  );
};