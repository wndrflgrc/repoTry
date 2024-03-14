import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <p>Dashboard </p>
      <div className="flex flex-col py-12">
      <Link to="departments" className="underline hover:bg-cyan-500">Department</Link>
      
      </div>
    </div>
  );
}
 