import React, { useContext } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import { ShopContext } from "../Context/ShopContext";
import Breadcrum from "../components/Breadcrums/Breadcrum";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { productId } = useParams(); // Extract productId from URL
  const { all_product } = useContext(ShopContext);
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
