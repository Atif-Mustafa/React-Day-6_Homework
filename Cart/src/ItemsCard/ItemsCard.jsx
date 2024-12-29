import Card from "../assets/Card/Card";
import './ItemsCard.css'
const ItemsCard = (props) => {

    {console.log("in items card")}
    return (

        <div className="items_container"> 
            {
                props.itemsList.map((obj, index)=>{
                   return <Card item={obj} 
                    key={index} 
                    id={index}
                    increaseAmount={props.increaseAmount}
                    decreaseAmount={props.decreaseAmount}
                    removeItem={props.removeItem}/>
                })
            }
        </div>
    )
}

export default ItemsCard