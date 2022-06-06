export default function FoodList(props){
    return(
    <div>
        <p> {props.foodName} </p>
        <img src={props.foodImage} width={100} alt="" />
    </div>)
    
}