import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom';
import "../../assets/styles.scss";

export default function Search() {
    let keywordRef = useRef('');
    let [searchParams, setSearchParams] = useSearchParams();
    let [arrProduct,setArrProduct] = useState([]);
    let timeoutRef = useRef({});
     
    
    
    const getProductBykeyword = async () => {
        try{
            let keyword = searchParams.get('keyword');
            if (keyword.trim() !== '' && keyword != null) {
                let result =  await  axios({
                    url: 'https://shop.cyberlearn.vn/api/Product?keyword='+keyword,
                    method:'GET'
                })
                console.log(result.data.content);
                setArrProduct(result.data.content);
                clearTimeout(timeoutRef.current);
            }else{
                setArrProduct([])
            }


        }catch(err){
            console.log(err)

        }
    }

    const handleChange = (e) => {
        // Đưa value vào keyword
        keywordRef.current = e.target.value;
        timeoutRef.current = setTimeout(()=>{
            setSearchParams({ keyword: keywordRef.current });
        },1000);
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        //Đưa dữ liệu keyword người dùng nhập lên url
        // setSearchParams({ keyword: keywordRef.current });
    }
    useEffect(()=>{
        // khi từ khoá có giá trị mới chạy
            getProductBykeyword();
    },[keywordRef.current]);

   const renderProductBykeyword = () => {
        return arrProduct.map((item,index)=> {
            return           <div className="col-4" key={index}>       
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
                                            {/* <div className=" btn-buynow">Buy now</div> */}
                                      <NavLink className="btn-buynow" to={`/detail/${item.id}/${item.name}`}>Buy now</NavLink>

                                        </div>
                                        <div className="col-6 bg-price">
                                            <div className='price'>{item.price}$</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            })
    }
  return (
    <div className='search'>
        <form className="container" onSubmit={handleSubmit}>
            <div className="search-prod">
                <label htmlFor="">Search</label>
                <div>
                    <input type="text" className='input-search' placeholder='Tìm Kiếm ...' onChange={handleChange}/>
                    <button className='btn-search'>SEARCH</button>
                </div>
            </div>
        </form>
        <div className="search-result">
            <h4>Search result</h4>
        </div>
        <div className="container">
            <div className="show_price">
                <p>Price</p>
                <select className='select-price'  name="" id="">
                    <option value="">Price</option>
                    <option value="">Tăng Dần</option>
                    <option value="">Giam Dần</option>
                </select>
            </div>
            <div className="show_prod">
                <div className="row">
                    {renderProductBykeyword()}
                </div>
            </div>
        </div>
    </div>
  )
}
