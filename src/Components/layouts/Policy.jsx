import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { PiNumberTwo } from "react-icons/pi";
import { FaTruck, FaUndo } from "react-icons/fa";

const Policy = () => {
  return (
    <div className="py-5">
      <Container>
        <Flex className={"justify-between"}>
          <div className="flex gap-x-2 items-center">
            <PiNumberTwo />
            <h3>Two years warranty</h3>
          </div>

          <div className="flex gap-x-2 items-center">
            <FaTruck />
            <h3>Free shipping</h3>
          </div>

          <div className="flex gap-x-2 items-center">
            <FaUndo />
            <h3>Return policy in 30 days</h3>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Policy;
