import './productprice.css'
export default function Productprice({price,offer,exchange,bank}){
  return(
   
    <div className="productprice">
    <a href="https://www.flipkart.com/motorola-edge-60-fusion-5g-pantone-mykonos-blue-256-gb/p/itmdbb95e3f12ab6?pid=MOBH9ARFZXNHC7VZ&lid=LSTMOBH9ARFZXNHC7VZD9IAPG&marketplace=FLIPKART&store=tyy%2F4io&srno=b_1_3&otracker=CLP_Filters&fm=organic&iid=64d2c4d4-43ce-4025-ae33-4430c43a942c.MOBH9ARFZXNHC7VZ.SEARCH&ppt=clp&ppn=mobile-phones-store&ssid=nq3dg3q4g00000001751568877757">
    
  
    <h1>{price}</h1>
    <h6>{offer}</h6>
    <h5>{exchange}</h5>
    <h5>{bank}</h5>
    
 </a>
 </div>
    
  )  
}