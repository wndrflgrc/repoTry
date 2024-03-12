import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <p>Dashboard </p>
      <Link to="/departments" className="hover:underline">Go to Departments</Link>
    </div>
  );
}
 