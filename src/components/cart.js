import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useRef, useState } from 'react';

function Cart(props) {

    const buttonRef = useRef();

    

    const cartElements = [

        {

            title: 'Colors',

            price: 100,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

            quantity: 2,

        },

        {

            title: 'Black and white Colors',

            price: 50,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

            quantity: 3,

        },

        {

            title: 'Yellow and Black Colors',

            price: 70,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

            quantity: 1,

        }

    ]

    const [cartS,setCartS] = useState(cartElements)

    function remove(e)
    {
        e.preventDefault();
        console.log(e.target.parentNode.parentNode.children[1])
        const rm = e.target.parentNode.parentNode.children[0].children[0];
        
        setCartS((p) =>
        {
            const newa = p.filter((i)=>
            {
                return i.quantity !== rm
            })
            console.log(cartS)
            return newa;
        })
    }

    const displayTo = (cartS.map((item) => {
        return (
            <tr style={{justifyContent:'space-between'}}>
                <td>
                    <img src={item.imageUrl} style={{width:'80px',borderRadius:'8%'}} alt="" />
                </td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
                <td><button style={{borderRadius:'10px',background:'blue',color:'white'}}  ref={buttonRef} onClick={remove}>Remove</button></td>
            </tr>
        )


    }))
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header >
                    <Modal.Title>Your Cart</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <table style={{justifyContent:'space-evenly'}}>
                        <tr>
                        <th>Item</th>
                        
                        <th>Quantity</th>
                        <th>Price</th>
                        </tr>
                        {displayTo}
                    </table>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={props.setCartFalse} variant="secondary">Close</Button>
                    <Button variant="primary">Order</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default Cart;