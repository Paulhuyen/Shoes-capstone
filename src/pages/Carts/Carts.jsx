import React from 'react'
import "../../assets/styles.scss";

export default function Carts() {
  return (
    <div >
        <div className="carts">
            <div className="container">
                <div className="carts-title">
                    Cart
                </div>
                <hr />
                <div className="carts-table">
                    <table className='table'>
                        <thead className='title-table'>
                            <tr>
                                <th>icon</th>
                                <th>id</th>
                                <th>img</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className='table-tbody'>
                            <tr>
                                <td>icon</td>
                                <td>1</td>
                                <td><img src="" alt="..." /></td>
                                <td>Product 1</td>
                                <td>50$</td>
                                <td className='quantity-prod'>
                                    <button className='btn btnDown'>-</button>
                                    <button className='btn-quantity'>5</button>
                                    <button className='btn btnUp'>+</button>
                                </td>
                                <td className='total-prod'>
                                    50$
                                </td>
                                <td className='action-prod'>
                                    <button className='btn btn-edit'>Edit</button>
                                    <button className='btn btn-delete'>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
   
            </div>
        </div>
    </div>
  )
}
