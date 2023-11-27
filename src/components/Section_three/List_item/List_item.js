import React, { Children } from 'react'

// CSS
import "./List_item.css"

// Icons
import { IoMdCheckmarkCircle } from "react-icons/io";

const List_item = ({children}) => {
  return (
    <div className='item-container'>
        <div>
          <IoMdCheckmarkCircle style={{color: "var(--dark-orange)", fontSize: "1.3rem"}}/>
        </div>
        <div>
          <p>{children}</p>
        </div>
    </div>
  )
}

export default List_item