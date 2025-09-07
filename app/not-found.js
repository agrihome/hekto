import Button from "./components/Button";
import "./not-found.scss";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found">
     &quot; the resource is under deveopment. &quot;
      <Button>
        <Link href="/home" className="">
          Home
        </Link>
      </Button>
    </div>
  );
}
