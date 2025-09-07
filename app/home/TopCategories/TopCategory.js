import Image from "next/image";
import "./TopCategories.scss";
import Button from "@/app/components/Button";
import Link from "next/link";

export default function TopCategory({ name, img, category }) {
  return (
    <div className="tc__product">
      <div className="tc__img-container">
        <Image src={img} alt={img} className="tc__img" />
        <Link href={`/products?category=${category}`}>
          <Button className="button--tc button--green">View Category</Button>
        </Link>
      </div>
      <span className="tc__name">{name}</span>
    </div>
  );
}
