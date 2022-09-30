import React, { useEffect, useState } from "react";
import "../../assets/styles.scss";
import { NavLink, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector}from 'react-redux'
import {  getProductApi } from "../../redux/reducers/productReducer";

import Slider from "react-slick"

export default function Home() {
  const {arrProduct} = useSelector(state => state.productReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //call api
  const getAllProductApi =  () => {
    const actionThunk = getProductApi();
    dispatch(actionThunk);
  }

  useEffect(()=>{
    getAllProductApi();
  },[])

  const renderProduct = () => {
    return arrProduct.map((item, index) => {
       return <div className="col-pr col-4" key={index}>
            
            <div className="card-item">
                  <div className="card-like">
                      <i class="far fa-heart"></i>
                      {/* <i class="fas fa-heart"></i> */}
                  </div>
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
                      <div className="price">{item.price}$</div>
                    </div>
                  </div>
            </div>

          </div>
    });
  };


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    
    <div className="section-home">
        <div classname="carousel-home">
          <Slider {...settings}>
             {arrProduct.map((item,index)=>{
              
                return    <div className="carousel-inner">
                       <div className="row">
                        <div className="col-8 carousel-image">
                          <img src={item.image} alt="" />
                        </div>
                        <div className="col-4 carousel-title">
                           <div className="carousel-title_inner">
                           <h3>{item.name}</h3>
                           <p className="desc">{item.description}</p>
                           <NavLink className="btn-buynow" to={`/detail/${item.id}/${item.name}`}>Buy now</NavLink>
                           </div>
                        </div>
                       </div>
                  </div>
             })}
          </Slider>

        </div>
      <div className="realate-product ">
        <div className="realate-product_title">Product Feature</div>
        <div className="container">
          <div className="row " >
            {renderProduct()}
          </div>
        </div>
      </div>
    </div>
  );
}
