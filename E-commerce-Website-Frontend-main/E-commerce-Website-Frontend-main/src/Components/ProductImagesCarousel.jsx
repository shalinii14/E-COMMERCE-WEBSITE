import React from "react";

const ProductImages = ({img}) => {
  return (
    <div>
      {
        img.map((item)=>{
          return (
            <div className="max-w-52 border-4">
              <img src={item} alt="product image" className="sm:w-20 md:w-52 "/>
            </div>
          )
        })
      }
    </div>
  );
};

export default ProductImages;
