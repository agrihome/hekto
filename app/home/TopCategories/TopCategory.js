import Image from "next/image";
import "./TopCategories.scss";
import Button from "@/app/components/Button";


export default function TopCategory({ name, img }) {
  return (
    <div className="tc__product">
      <div className="tc__img-container">
        <Image src={img} alt={img} className="tc__img" />
        <Button className="button--tc button--green">View Category</Button>
      </div>
      <span className="tc__name">{name}</span>
    </div>
  );
}
