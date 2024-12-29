import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header/Header'
import ItemsCard from './ItemsCard/ItemsCard'
import BagEmpty from './BagEmpty/BagEmpty'

function App() {
  const [count, setCount] = useState(4)
  let [totalAmount, setTotalAmount] = useState(2199.96)
  const [empty, setEmpty] = useState(true);

  const [itemsList, setItemsList] = useState([
    {
      image: "https://www.course-api.com/images/cart/phone-1.png",
      productName: "Samsung Galaxy S8",
      productPrice: 399.99,
      amount: 1
    },
    {
      image: "https://www.course-api.com/images/cart/phone-2.png",
      productName: "Google Pixel",
      productPrice: 499.99,
      amount: 1
    },
    {
      image: "https://www.course-api.com/images/cart/phone-3.png",
      productName: "Xiaomi Redmi Note 2",
      productPrice: 699.99,
      amount: 1
    },
    {
      image: "https://www.course-api.com/images/cart/phone-4.png",
      productName: "Samsung Galaxy S7",
      productPrice: 599.99,
      amount: 1
    }
  ]);


  function clearCart(){
     setEmpty(false);
  }

  function removeItem(id) {
    const itemsListCopy = [...itemsList];
    itemsListCopy.splice(id, 1)
    setItemsList([...itemsListCopy]);
  }

  function increaseAmount(id) {
    // console.log({...itemsList[id]})
    const newObject = {
      ...itemsList[id]
    };
    newObject.amount = newObject.amount + 1;
    setCount(count + 1)
    console.log(newObject)

    const itemsListCopy = [...itemsList];
    itemsListCopy.splice(id, 1, newObject)
    setItemsList([...itemsListCopy]);

    setTotalAmount(totalAmount + itemsList[id].productPrice)
  }
  function decreaseAmount(id) {
    if (itemsList[id].amount - 1 === 0) {
      removeItem(id);
      setCount(count - 1)
    setTotalAmount(totalAmount - itemsList[id].productPrice)

     return; 
    }

    const newObject = {
      ...itemsList[id],
    };
    newObject.amount = newObject.amount - 1;
    setCount(count - 1);

    const itemsListCopy = [...itemsList];
    itemsListCopy.splice(id, 1, newObject)
    setItemsList([...itemsListCopy]);
    setTotalAmount(totalAmount - itemsList[id].productPrice)

  }


  return (
    <>
      <Header count={count} />
     {empty? <div> <h1 style={{ textAlign: "center", marginBlock: "4rem 2.5rem", fontSize: "3rem", fontWeight: "500" }}>YOUR BAG</h1>
      <ItemsCard itemsList={itemsList}
        decreaseAmount={decreaseAmount}
        increaseAmount={increaseAmount}
        removeItem={removeItem} />
      <hr />
      <div className="total_container">
        <p>Total</p>
        <p className='total_amount'>${totalAmount}</p>
      </div>
      <div className="btn_container">
        <button onClick={clearCart}>Clear Cart</button>
      </div> </div>: <BagEmpty />}
    </>
  )
}

export default App
