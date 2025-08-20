import React from "react";
import Image from "./Image";
import Badge from "./Badge";
import Flex from "./Flex";

const Product = ({productImg ,bdgText}) => {
  return (
    <>
      <div className="w-1/4 relative">
        <Image imgSrc={productImg} className={"w-full"} />
        <Badge className={" absolute top-5 left-5"} badgeText={bdgText}/>
        <Flex className={"justify-between"}>
          <h3>Basic Crew Neck Tee</h3>
          <h3>$44.00</h3>
        </Flex>
      </div>
    </>
  );
};

export default Product;
