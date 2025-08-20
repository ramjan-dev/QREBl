import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Product from "../Product";
import cat from "/src/assets/cat.png";
import watch from "/src/assets/watch.png";

const NewArrivai = () => {
  return (
    <>
      <div className="py-6 ">
        <Container>
          <h3>New Arrivai</h3>
          <Flex className={"mt-6 gap-x-5"}>
            <Product productImg={cat} bdgText={"New"} />
            <Product productImg={watch} bdgText={"10%"} />
            <Product productImg={cat} bdgText={"New"} />
            <Product productImg={watch} bdgText={"10%"} />
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default NewArrivai;
