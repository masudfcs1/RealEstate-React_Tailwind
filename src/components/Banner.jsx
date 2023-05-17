import React from "react";
import Image from "../assets/img/house-banner.png";
import Search from "../components/Search";

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24 ">
      <div className="flex flex-col lg:flex-row">
        <div>
          <h1>
            <span>Rent</span> Your Deam our with us.
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex eum
            reiciendis nam odit voluptate similique quidem, tempore fugit
            accusamus rerum ipsa voluptatum cum tempora excepturi qui hic
            officia perferendis quam.
          </p>
        </div>
        <div>
          <img src={Image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
