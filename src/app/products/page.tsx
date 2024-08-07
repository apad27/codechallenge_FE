"use client";
import * as React from "react";
import Card from "@/components/card/Card";
import ProductsHeroSection from "@/components/products/ProductsHeroSection";
import ProductsCatalogue from "@/components/products/ProductsCatalogue";

interface IProductsProps {}

const Products: React.FunctionComponent<IProductsProps> = (props) => {
  return (
    <div>
      <ProductsHeroSection></ProductsHeroSection>
      <ProductsCatalogue />
    </div>
  );
};

export default Products;
