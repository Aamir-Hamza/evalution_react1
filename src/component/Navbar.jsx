 import {Link} from "react-router-dom"
 import "../App.css"

import { ExpensesShow } from "./ExpensesShow"
 export function Navbar(){
    
    return(<>
       <div  className="navdiv" style={{width:"100%",height:"50px", textAlign:"center", padding:"10px", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
       <Link  style={{
            textDecoration:"none", color:"black"
         }}to= {"/"}>HOME </Link>
         <Link style={{
            textDecoration:"none",
          color:"black"}} to= {"/income"}>INCOME </Link>
         <Link  style={{
            textDecoration:"none"
         , fontSize:"20px", color:"black"}} to= {"/expense"}>EXPENSES </Link>
         <Link  style={{
            textDecoration:"none", color:"black"
         }}to= {"/transaction"}>TRANSACTION </Link>
        
       </div>
       


   
    
    

    
    </>)
}