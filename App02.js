// 2. Създаване на CarCard
// Създайте CarCard компонент приемащ – Модел, Марка, Конски сили и изображение на
// колата. Създайте масив от елементи – {brand: “”, model: “”, image:””,horsePowers:””} и
// рендирайте няколко card

import React from "react";
import CarCard from "./card/CarCard";

export default function App02(){

    const cars = [
        {brand:"Mercedes", model:"63", image:"/images/mercedes63.webp", horsePowers:480},
        {brand:"BMW", model:"3 Series", image:"/images/bmwm5.jpg", horsePowers:420},   
        {brand:"Mercedes", model:"63", image:"/images/mercedes63.webp", horsePowers:480},
        {brand:"BMW", model:"3 Series", image:"/images/bmwm5.jpg", horsePowers:420}
    ];

    return(
        <div style={{padding:20, display:"flex", justifyContent:"space-between", flexWrap: "wrap"}}>
            {/* {cars.maps(c => <CarCard brand={c.brand} model={c.model}/> )} */}
            {cars.map(c => <CarCard  {...c} width={"40%"}/>)}
        </div>
    )
}