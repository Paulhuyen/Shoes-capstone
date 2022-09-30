import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios"
import "../../assets/styles.scss";
import { useDispatch, useSelector } from "react-redux";
import {  getAllProductDetailApi } from "../../redux/reducers/productReducer";


export default function ProductDetail() {
  const {productDetail} = useSelector(state => state.productReducer);
  const dispatch = useDispatch();
  const params = useParams();
  console.log('productdetail',productDetail);

  useEffect(()=>{
    let {id} = params;
    //dispatch action thunk
    const action = getAllProductDetailApi(id);
    dispatch(action);
  },[params.id])//param.id load lại trang khi click 
  return (
    <div className="detail">
      <div className="container">
        <div className="detail-product" id="detail-product">
          <div className="detail-l">
            <img src={productDetail.image} alt />
          </div>
          <div className="detail-r">
            <div className="detail-r-title">
              <div className="name">
                <h3>{productDetail.name}</h3>
              </div>
              <div className="description">
                <p>
                  {productDetail.description}
                </p>
              </div>
              <div className="size">
                <p>Available Size</p>
                {productDetail.size?.map((itemsz,index)=>{
                  return <button className="btn-size" key={index}>{itemsz}</button>
                  
                })}
                
              </div>
              <div className="price">{productDetail.price}</div>
              <div className="cacl">
                <div className="caclItem">
                  <button className="btn-cacl">-</button>
                </div>
                <div className="caclItem">
                  <p>{productDetail.quantity}</p>
                </div>
                <div className="caclItem">
                  <button className="btn-cacl">+</button>
                </div>
              </div>
              <div className="btn-button">
                <button className="button">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="realate-product">
          <h1 className="text-center">- Realate Product -</h1>
          <div className="row">
          {productDetail.relatedProducts?.map((item,index)=>{
            return      <div className="col-pr" key={index}>
                            <div className="card-item">
                                    <div className="card-img">
                                      <img src={item.image} alt="..." />
                                    </div>
                                    <div className="card-body">
                                      <h5>{item.name}</h5>
                                      <p className="desc">{item.description}</p>
                                    </div>
                                    <div className="card-footer mt-2">
                                      <div className="col-6">
                                      <NavLink className="btn-buynow" to={`/detail/${item.id}/${item.name}`}>Buy now</NavLink>
                                      </div>
                                      <div className="col-6 bg-price">
                                        <div className="price text-center">{item.price}$</div>
                                      </div>
                                    </div>
                              </div>  
                          </div>                
               })}
          </div>

        </div>
      </div>
    </div>
  );
}
