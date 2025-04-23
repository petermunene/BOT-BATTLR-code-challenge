import React ,{useState} from "react";

function SortBar({bots,setBots}){
    const [health, setHealth]=useState()
    const [damage, setDamage]=useState()
    const [armor, setArmor]=useState()

    function sortHealth(v){
        const value=parseInt(v)
        setHealth(value)
        if(!isNaN(value)){
        const updated=bots.filter((bot)=>bot.health===value)
        setBots(updated)}
        else if(!value){
            setBots(bots)
        }
        console.log(health)
        
    }
    function sortDamage(v){
        const value=parseInt(v)
        setDamage(value)
        if(!isNaN(value)){
        const updated=bots.filter((bot)=>bot.damage===value)
        setBots(updated)}
        else if(!value){
            setBots(bots)
        }
        console.log(damage)
    }
    function sortArmor(v){
        const value=parseInt(v)
        setArmor(value)
        if(!isNaN(value)){
        const updated=bots.filter((bot)=>bot.armor===value)
        setBots(updated)}
        else if(!value){
            setBots(bots)
        }
        console.log(armor)
    }
    return(<div style={{display:"flex"}}>
                <input type="text" name="health" placeholder="enter health" onChange={(e)=>sortHealth(e.target.value)} />
                <input type="text" name="damage" placeholder="enter damage" onChange={(e)=>sortDamage(e.target.value)} />
                <input type="text" name="armor" placeholder="enter armor" onChange={(e)=>sortArmor(e.target.value)} />
          </div>
    )
}
export default SortBar

