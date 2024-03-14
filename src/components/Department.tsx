import { Link } from "react-router-dom";
import Employees from './Employees';

export default function Department() {
  return (
    <div>
      <p>Department </p>
      <div className="flex flex-col py-12">
      <Link to="/" className="underline hover:bg-cyan-500">Go Home</Link>
     
      </div>
    </div>
  );
}
