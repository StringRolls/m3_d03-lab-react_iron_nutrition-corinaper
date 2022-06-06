import { Card, Row, Col, Divider, Input, Button } from "antd";
import "../index.css"
export default function FoodBox(props){
    
    return(
    <Col className="flexCenter">
    <Card
    title={props.food.name}
    style={{ width: 230, height: 300, margin: 10 }} >
        <img src={props.food.image} height={60} alt="" />
        <p>Calories: {props.food.calories}</p>
        <p>Servings: {props.food.servings}</p>
        <p>
            <b>Total Calories: {props.food.calories * props.food.servings} </b> kcal
        </p>
        {props.children}
        </Card>
    </Col>)
    
}