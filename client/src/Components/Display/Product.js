import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { listProductActions } from "../actions/ProductActions";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loading from "../Loaiding/Loading";

const Product = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  console.log(products)
  useEffect(() => {
    dispatch(listProductActions());
  }, [dispatch]);

  return (
    <div className="container">
      {error ? (
        <ErrorMessage variant="danger">{error}</ErrorMessage>
      ) : loading ? (
        <Loading />
      ) : (
        <div className="row">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;
