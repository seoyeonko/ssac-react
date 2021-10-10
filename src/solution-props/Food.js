import React from "react";

const Food = ({ food }) => {
  return (
    <div>
      제가 좋아하는 음식은 <span style={{ color: "red" }}>{food}</span>입니다
    </div>
  );
};

Food.defaultProps = {
  food: "음식",
};

export default Food;
