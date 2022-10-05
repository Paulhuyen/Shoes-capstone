import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import "../../assets/styles.scss";
export default function Profile() {
    const [index,setIndex] = useState(0);
    const {userLogin} = useSelector((state) => state.userReducer);
    console.log(userLogin);
    console.log(userLogin.ordersHistory.orderDetail);

    

  return (
    <div>
        <div className="profile-information">
            <div className="profile-title">
                <h2 className='title'>Profile</h2>
            </div>
            <br/>
            <div className="profile">
                <div className="profile-avatar">
                    <img src="https://i.pravatar.cc/?u=paul.huyentran123@gmail.com" alt="..." />
                </div>
                    <form action="" className="profile-form">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <p>Email</p>
                                    <input className='input-form' type="text"  id='email' name='email'/>
                                    <p>err</p>
                                </div>
                                <div className="form-group">
                                    <p>Phone</p>
                                    <input className='input-form' type="text"  id='phone' name='phone'/>
                                    <p>err</p>

                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <p>Name</p>
                                    <input className='input-form' type="text"  id='name' name='name'/>
                                    <p>err</p>

                                </div>
                                <div className="form-group">
                                    <p>Password</p>
                                    <input className='input-form' type="text" id='password' name='password' />
                                    <p>err</p>

                                </div>
                                <div className="form-group">
                                    <label className="my-2">Gender</label>
                                    <input className="mx-4" name="gender" id="gender" value="true" type="radio" />
                                    <input className="mx-2" name="gender" id="gender" value="false" type="radio"/>
                                </div>
                                <div className="form-group">
                                    <button className='btn-submit'>Update</button>
                                </div>
                            </div>
                        </div>
                    </form>
            </div>
        </div>
        <div className="profile-history">
            <div className="tabs">
                <div className="tabsList">
                    <div className={`tabHead ${index===0?'active':null}`} onClick={()=>{
                        setIndex(0);
                    }}>Order History</div>
                    <div className={`tabHead ${index===1?'active':null}`}onClick={()=>{
                        setIndex(1);
                    }}> Favourite</div>
                </div>
                <div className="tabContant" hidden={index!=0}>
                {userLogin?.ordersHistory.map((item) => {
                                    return       <div className="history-order" key={item.id}>
                                                    <p>+ Orders have been placed on {item.date}</p>
                                                    <table className="history-table table">
                                                        <thead className='thead'>
                                                            <tr>
                                                                <th>id</th>
                                                                <th>img</th>
                                                                <th>Name</th>
                                                                <th>Price</th>
                                                                <th>Quantity</th>
                                                                <th>Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className='tbody'>
                                                                 {item.orderDetail.map((prod, index)=>{
                                                                        return    <tr key={index}>
                                                                        <td>{prod.id}</td>
                                                                        <td className='img-prod'><img  src={prod.image}alt="..." /></td>
                                                                        <td>{prod.name}</td>
                                                                        <td>{prod.price}</td>
                                                                        <td className='quantity-prod'>
                                                                            <button className='btn-quantity'>{prod.quantity}</button>
                                                                        </td>
                                                                        <td className='total-prod'>
                                                                            50$
                                                                        </td>
                                                                    </tr>
                                                                 })}

                                                        </tbody>
                                                    </table>
                                                </div>
                                })}

                </div>
                <div className="tabContant" hidden={index!=1}>
                <div className="history-order">
                        <p>+ Orders have been placed on 29 - 9 -2022</p>
                        <table className="history-table table">
                            <thead className='thead'>
                                <tr>
                                    <th>id</th>
                                    <th>img</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody className='tbody'>
                                <tr>
                                    <td>1</td>
                                    <td className='img-prod'><img  src="https://i.pravatar.cc/?u=paul.huyentran123@gmail.com" alt="..." /></td>
                                    <td>Product 1</td>
                                    <td>50$</td>
                                    <td className='quantity-prod'>
                                        <button className='btn-quantity'>5</button>
                                    </td>
                                    <td className='total-prod'>
                                        50$
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}
