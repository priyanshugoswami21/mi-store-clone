import React from 'react'
import HotItemCard from '
const HotAccessories = ({music,musicCover}) => {
  return (
    <div className='HotAccessories'>

        <div>
            <img src={musicCover}/>
        </div>

        <div>
            {
                music.map((item,index)=>(
                    <HotItemCard key = {item.image} name={item.name} image= {item.imge} index={index}/>
            ))}
        </div>
    </div>
  )
}

export default HotAccessories