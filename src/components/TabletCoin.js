import React from 'react'
import RowsCoin from './RowsCoin'

const title = ["#", "coin", "price", "price change", "24 volume"]
 
export const TabletCoin = ({Coins, search}) => {
    



    const filteredCoins =  Coins.filter((coin)=> coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase()))

  return (
   
<table className='table table-dark mt-4 table-hover'>
 <thead>
<tr>

{

  title.map(title =>(
<td>{title}</td>

  ))

}

 


</tr>



 </thead>
<tbody>
{filteredCoins.map((coin, index) =>(
  <RowsCoin coin={coin} key={index} index={index + 1}/>
  
))}



</tbody>


</table>


   
  )
}

export default TabletCoin
