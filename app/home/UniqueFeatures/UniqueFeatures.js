import Image from "next/image";
import Chair from "./chair.png";
import "./UniqueFeatures.scss";
import Button from "@/app/components/Button";


export default function UniqueFeatures() {
  return (
    <section className="uf">
      <div className="uf__img-container">
        <Image
          alt="chair"
          src={Chair}
          className="uf__img"
          width="200px"
          height="200px"
        />
      </div>
      <div className="uf__details">
        <h3>Unique Features Of latest & Trending Products</h3>

        <div className="uf__points">
          <div className="point">
            <div className="marker marker--1"></div>
            <span>
              All frames constructed with hardwood solids and laminates
            </span>
          </div>
          <div className="point">
            <div className="marker marker--2"></div>
            <span>
              Reinforced with double wood dowels, glue, screw - nails corner
            </span>
          </div>
          <div className="point">
            <div className="marker marker--3"></div>
            <span>Arms, backs and seats are structurally reinforced</span>
          </div>
        </div>

        <div className="uf__mini-img-container">
        <Image
          alt="chair"
          src={Chair}
          className="uf__mini-img"
        />
      </div>

        <div className="uf__cart">
          <Button>Add To Cart</Button>
          <div className="uf__cart-info">
            <span>B&amp;B Italian Sofa</span>
            <span>$32.00</span>
          </div>
        </div>
      </div>
    </section>
  );
}
