import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TabletCoin from './TabletCoin'
import Navbar from './Navbar'


const Coin = () => {

const [Coins, setCoin] = useState([])
const [search, setSearch] = useState("")


const getData = async () =>{

const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1")
console.log(res.data)
setCoin(res.data)
}

useEffect(()=>{

 getData()
 


}, [])



  return (
    <div className='container'>
      <div className='row'>
    
      <Navbar/>
   <input type={"text"} placeholder="Buscar monedas" className="form-control bg-dark text-white border-0 mt-4 text-center sear "
   onChange={e => setSearch(e.target.value)}/>
        
      <TabletCoin Coins={Coins} search={search}/>


      </div>
    </div>
  )
}

export default Coin
