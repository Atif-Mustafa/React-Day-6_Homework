import './Card.css'
const Card = (props) => {
   {console.log("in card")}
    return (
      <div className="item">
        {console.log(props.item.image)}
        <img src={props.item.image} alt="" className='item_image'/>
        <div className='item_info_container'>
            <h2>{props.item.productName}</h2>
            <p>${props.item.productPrice}</p>
            <button onClick={()=>props.removeItem(props.id)}>remove</button>
        </div>
        <div className='amount_container'>
            <button onClick={()=> props.increaseAmount(props.id)}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="amount-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg></button>
            <span>{props.item.amount}</span>
            <button onClick={()=> props.decreaseAmount(props.id)}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="amount-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg></button>
        </div>
      </div>
    )
}

export default Card