import { Link } from "react-router-dom";

export default function Department() {
  return (
    <div>
      <p>Department </p>
      <Link to="/" className="underline hover:bg-cyan-500">Go Home</Link>
    </div>
  );
}
